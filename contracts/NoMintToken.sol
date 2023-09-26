// SPDX-License-Identifier: MIT

pragma solidity ^0.8.14;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract NoMintToken is IERC20, Ownable {
    using SafeMath for uint256;
    string public name;
    string public symbol;
    uint256 public decimals;
    uint256 public totalSupply;
    uint256 public maxSupply;

    mapping(address => uint256) internal _balances;
    mapping(address => mapping(address => uint256)) internal _allowed;

    constructor(
        string memory _name,
        string memory _symbol,
        uint256 _decimales,
        uint256 _totalSupply,
        uint256 _maxSupply,
        address newOwner
    ) {
        name = _name;
        symbol = _symbol;
        decimals = _decimales;
        totalSupply = _totalSupply;
        maxSupply = _maxSupply;
        _transferOwnership(newOwner);
    }

    function transfer(
        address _to,
        uint256 _value
    ) external override returns (bool) {
        require(_to != address(0), "CTC: 0 address is not valid");
        require(_value <= _balances[msg.sender], "CTC: insufficient balance");
        _balances[msg.sender] = _balances[msg.sender].sub(_value);
        _balances[_to] = _balances[_to].add(_value);
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function balanceOf(
        address _owner
    ) external view override returns (uint256 balance) {
        return _balances[_owner];
    }

    function approve(
        address _spender,
        uint256 _value
    ) external override returns (bool) {
        _allowed[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) external override returns (bool) {
        require(_from != address(0), "Token: from address is not valid");
        require(_to != address(0), "Token: to address is not valid");
        require(_value <= _balances[_from], "Token: insufficient balance");
        require(
            _value <= _allowed[_from][msg.sender],
            "Token: transfer from value not allowed"
        );
        _allowed[_from][msg.sender] = _allowed[_from][msg.sender].sub(_value);
        _balances[_from] = _balances[_from].sub(_value);
        _balances[_to] = _balances[_to].add(_value);
        emit Transfer(_from, _to, _value);
        return true;
    }

    function allowance(
        address _owner,
        address _spender
    ) external view override returns (uint256) {
        return _allowed[_owner][_spender];
    }

    function increaseApproval(
        address _spender,
        uint256 _addedValue
    ) external returns (bool) {
        _allowed[msg.sender][_spender] = _allowed[msg.sender][_spender].add(
            _addedValue
        );
        emit Approval(msg.sender, _spender, _allowed[msg.sender][_spender]);
        return true;
    }

    function decreaseApproval(
        address _spender,
        uint256 _subtractedValue
    ) external returns (bool) {
        uint256 oldValue = _allowed[msg.sender][_spender];
        if (_subtractedValue > oldValue) {
            _allowed[msg.sender][_spender] = 0;
        } else {
            _allowed[msg.sender][_spender] = oldValue.sub(_subtractedValue);
        }
        emit Approval(msg.sender, _spender, _allowed[msg.sender][_spender]);
        return true;
    }
}
