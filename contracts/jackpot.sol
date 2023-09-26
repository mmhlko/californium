// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract JackpotLottery {
    address public owner;
    uint public ticketPrice;
    uint public totalTicketsSold;
    uint public jackpotAmount;
    uint public numWinners;
    uint public ticketsCount;
    mapping(uint => address) public tickets;
    uint[] private winningTicketNumbers;
    mapping(address => bool) public isWinner;
    mapping(address => uint) public winnings;

    event TicketPurchased(address indexed buyer, uint ticketNumber);
    event JackpotAwarded(address indexed winner, uint amount);

    constructor(
        uint _ticketPrice,
        uint _numWinners,
        address _owner,
        uint256 _ticketsCount
    ) {
        owner = _owner;
        ticketPrice = _ticketPrice;
        numWinners = _numWinners;
        ticketsCount = _ticketsCount;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    receive() external payable {}

    fallback() external payable {}

    function buyTicket() public payable {
        require(msg.value == ticketPrice, "Ticket price must be paid");
        require(totalTicketsSold <= ticketsCount, "All tickets sold");
        totalTicketsSold++;
        tickets[totalTicketsSold] = msg.sender;
        emit TicketPurchased(msg.sender, totalTicketsSold);
    }

    function drawWinningTickets() external onlyOwner {
        require(msg.sender == owner, "Only the owner can draw winning tickets");
        require(
            winningTicketNumbers.length == 0,
            "Winning tickets already drawn"
        );
        require(totalTicketsSold > 0, "No tickets sold");

        // Generate winning ticket numbers
        uint[] memory allTicketNumbers = new uint[](totalTicketsSold);
        for (uint i = 0; i < totalTicketsSold; i++) {
            allTicketNumbers[i] = i + 1;
        }
        for (uint j = 0; j < numWinners; j++) {
            uint remainingTickets = totalTicketsSold - j;
            uint randomIndex = uint(
                keccak256(abi.encodePacked(block.timestamp, j, msg.sender))
            ) % remainingTickets;
            uint winningTicketNumber = allTicketNumbers[randomIndex];
            winningTicketNumbers.push(winningTicketNumber);
            allTicketNumbers[randomIndex] = allTicketNumbers[
                remainingTickets - 1
            ];
        }
    }

    function awardJackpot() external onlyOwner {
        require(msg.sender == owner, "Only the owner can award the jackpot");
        require(
            winningTicketNumbers.length == numWinners,
            "Winning tickets not drawn"
        );
        require(jackpotAmount > 0, "Jackpot amount is zero");

        // Calculate winnings for each winner
        uint winnerShare = jackpotAmount / numWinners;
        for (uint i = 0; i < numWinners; i++) {
            address winner = tickets[winningTicketNumbers[i]];
            isWinner[winner] = true;
            winnings[winner] = winnerShare;
            emit JackpotAwarded(winner, winnerShare);
        }

        // Transfer jackpot amount to the contract owner
        payable(owner).transfer(jackpotAmount);

        // Reset lottery for next round
        totalTicketsSold = 0;
        jackpotAmount = 0;
        delete winningTicketNumbers;
        for (uint j = 1; j <= totalTicketsSold; j++) {
            delete tickets[j];
        }
    }

    function claimWinnings() public {
        require(isWinner[msg.sender], "Not a winner");
        require(winnings[msg.sender] > 0, "No winnings to claim");

        uint amount = winnings[msg.sender];
        winnings[msg.sender] = 0;
        // Transfer winnings to the winner
        payable(msg.sender).transfer(amount);
    }

    function getWinningTicketNumbers() public view returns (uint[] memory) {
        return winningTicketNumbers;
    }

    function getJackpotAmount() public view returns (uint) {
        return jackpotAmount;
    }

    function getWinnerStatus(address _address) public view returns (bool) {
        return isWinner[_address];
    }

    function getWinnings(address _address) public view returns (uint) {
        return winnings[_address];
    }
}
