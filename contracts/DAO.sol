// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

contract DAO {
    // Variables
    uint256 public MIN_CONTRIBUTION;
    uint256 public VOTE_DURATION;
    uint256 public totalSupply;
    uint256 public totalShares;
    uint256 public minSharesToPassAVote;

    address public owner;

    bool public isActive;

    mapping(address => uint256) public balances;
    mapping(address => uint256) public shares;
    mapping(address => bool) public members;
    mapping(address => mapping(uint => bool)) public voted;
    mapping(uint256 => uint256) public votesFor;
    mapping(uint256 => uint256) public votesAgainst;

    uint256 public proposalIndex;

    struct Proposal {
        string description;
        address recipient;
        uint256 amount;
        uint256 votingDeadline;
        bool executed;
        mapping(address => uint256) votesFor;
        mapping(address => uint256) votesAgainst;
    }

    mapping(uint256 => Proposal) public proposals;

    // Events
    event NewMember(address indexed member);
    event Deposit(address indexed sender, uint amount);
    event Withdrawal(address indexed receiver, uint amount);
    event ProposalCreated(uint indexed proposalId);
    event Voted(
        address indexed voter,
        uint indexed proposalId,
        bool vote,
        uint shares
    );
    event ProposalExecuted(uint indexed proposalId);

    // Constructor
    constructor(address _owner, uint256 _duration, uint256 _minShares) {
        owner = _owner;
        VOTE_DURATION = _duration;
        minSharesToPassAVote = _minShares;
    }

    // Modifiers
    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "DAO: Only the owner can perform this action"
        );
        _;
    }

    modifier onlyActive() {
        require(isActive, "DAO: This contract is no longer active");
        _;
    }

    receive() external payable {}

    fallback() external payable {}

    // Functions
    function setActive() external onlyOwner {
        isActive = true;
    }

    function addMember(address _member) external onlyOwner onlyActive {
        require(!members[_member], "DAO: Member already exists");
        members[_member] = true;

        totalShares++;
        shares[_member]++;

        emit NewMember(_member);
    }

    function deposit() external payable onlyActive {
        require(
            msg.value >= MIN_CONTRIBUTION,
            "DAO: Minimum contribution not met"
        );
        require(members[msg.sender], "DAO: Not a member");

        balances[msg.sender] += msg.value;
        totalSupply += msg.value;

        emit Deposit(msg.sender, msg.value);
    }

    function withdraw(uint _amount) external onlyActive {
        require(balances[msg.sender] >= _amount, "DAO: Insufficient balance");
        require(address(this).balance >= _amount, "DAO: Insufficient funds");

        balances[msg.sender] -= _amount;
        totalSupply -= _amount;
        payable(msg.sender).transfer(_amount);

        emit Withdrawal(msg.sender, _amount);
    }

    function createProposal(
        string memory _description,
        address payable _recipient,
        uint _amount
    ) external onlyActive {
        require(members[msg.sender], "DAO: Not a member");
        require(balances[msg.sender] >= _amount, "DAO: Insufficient balance");

        proposalIndex++;
        Proposal storage p = proposals[proposalIndex];
        p.description = _description;
        p.recipient = _recipient;
        p.amount = _amount;
        p.votingDeadline = block.timestamp + VOTE_DURATION;
        p.executed = false;

        balances[msg.sender] -= _amount;
        p.votesFor[msg.sender] = shares[msg.sender];

        emit ProposalCreated(proposalIndex);
    }

    function vote(uint _proposalId, bool _support) external onlyActive {
        Proposal storage p = proposals[_proposalId];
        require(members[msg.sender], "DAO: Not a member");
        require(
            !voted[msg.sender][_proposalId],
            "DAO: Already voted on this proposal"
        );
        require(
            block.timestamp <= p.votingDeadline,
            "DAO: Voting period has ended"
        );

        voted[msg.sender][_proposalId] = true;

        uint sharesVoting = shares[msg.sender];
        if (_support) {
            p.votesFor[msg.sender] += sharesVoting;
        } else {
            p.votesAgainst[msg.sender] += sharesVoting;
        }

        emit Voted(msg.sender, _proposalId, _support, sharesVoting);
    }

    function executeProposal(uint _proposalId) external onlyOwner onlyActive {
        Proposal storage p = proposals[_proposalId];
        require(!p.executed, "DAO: Proposal has already been executed");
        require(
            block.timestamp > p.votingDeadline,
            "DAO: Voting period has not ended yet"
        );
        require(
            p.votesFor[msg.sender] >= minSharesToPassAVote,
            "DAO: Proposal did not pass"
        );

        p.executed = true;
        (bool success, ) = p.recipient.call{value: p.amount}("");
        require(success, "DAO: Transfer failed");

        emit ProposalExecuted(_proposalId);
    }

    function endContract() external onlyOwner onlyActive {
        isActive = false;
        selfdestruct(payable(owner));
    }
}
