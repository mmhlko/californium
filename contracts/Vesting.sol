// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Vesting {
    address public beneficiary;
    uint public vestingStart;
    uint public vestingDuration;
    uint public totalTokens;
    uint public tokensReleased;
    bool public revocable;
    bool public revoked;

    mapping (address => uint) public released;
    mapping (address => uint) public balances;

    event TokensReleased(address recipient, uint tokens);
    event VestingRevoked();

    constructor(
        address _beneficiary,
        uint _vestingStart,
        uint _vestingDuration,
        uint _totalTokens,
        bool _revocable
    ) {
        beneficiary = _beneficiary;
        vestingStart = _vestingStart;
        vestingDuration = _vestingDuration;
        totalTokens = _totalTokens;
        revocable = _revocable;
    }

    function balanceOf(address _recipient) external view returns (uint) {
        return balances[_recipient];
    }

    function release() external {
        uint unreleased = releasableAmount(msg.sender);
        require(unreleased > 0, "No tokens to release");

        released[msg.sender] += unreleased;
        tokensReleased += unreleased;

        (bool sent, ) = beneficiary.call{value: unreleased}("");
        require(sent, "Failed to send Ether");

        emit TokensReleased(msg.sender, unreleased);
    }

    function revoke() external {
        require(revocable, "This contract is not revocable");
        require(!revoked, "This contract has already been revoked");

        uint balance = balances[msg.sender];
        uint unreleased = releasableAmount(msg.sender);
        uint refund = balance - unreleased;

        revoked = true;

        (bool sent, ) = beneficiary.call{value: refund}("");
        require(sent, "Failed to send Ether");

        emit VestingRevoked();
    }

    function releasableAmount(address _recipient) public view returns (uint) {
        return vestedAmount(_recipient) - released[_recipient];
    }

    function vestedAmount(address _recipient) public view returns (uint) {
        uint currentBalance = balances[_recipient];
        uint totalVesting = totalTokens - tokensReleased;
        uint timeElapsed = block.timestamp - vestingStart;

        if (timeElapsed >= vestingDuration) {
            return currentBalance;
        } else {
            return (currentBalance * timeElapsed) / vestingDuration + (totalVesting * timeElapsed) / vestingDuration;
        }
    }

    function deposit() external payable {
        require(!revoked, "This contract has been revoked");

        balances[msg.sender] += msg.value;
    }
}