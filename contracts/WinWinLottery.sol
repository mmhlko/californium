// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract WinWinLottery {
    address owner;
    address[] participants;
    mapping(address => uint256) public balances;
    uint256 public totalBalance;
    uint256 public ticketPrice;
    uint256 public winnersCount;
    uint256[] public winnersShares;

    constructor(
        uint256 _ticketPrice,
        uint256 _winnersCount,
        uint256[] memory _winnersShares,
        address _owner
    ) {
        owner = _owner;
        ticketPrice = _ticketPrice;
        winnersCount = _winnersCount;
        winnersShares = _winnersShares;
    }

    function buyTicket() public payable {
        require(msg.value >= ticketPrice, "Insufficient funds");
        participants.push(msg.sender);
        balances[msg.sender] += msg.value;
        totalBalance += msg.value;
    }

    function distributePrize() public {
        require(msg.sender == owner, "Only owner can distribute prizes");
        require(participants.length > 0, "No participants");

        // Calculate winners' payouts
        uint256[] memory payouts = new uint256[](winnersCount);
        uint256 remainingBalance = totalBalance;
        for (uint256 i = 0; i < winnersCount; i++) {
            uint256 winnerShare = winnersShares[i];
            uint256 winnerPayout = (totalBalance * winnerShare) / 100;
            payouts[i] = winnerPayout;
            remainingBalance -= winnerPayout;
        }

        // Distribute remaining balance equally among non-winning participants
        uint256 nonWinnersCount = participants.length - winnersCount;
        uint256 nonWinnerPayout = remainingBalance / nonWinnersCount;
        for (uint256 i = winnersCount; i < participants.length; i++) {
            balances[participants[i]] += nonWinnerPayout;
        }

        // Reset the lottery
        delete participants;
        totalBalance = 0;
    }

    function withdraw() public {
        uint256 balance = balances[msg.sender];
        require(balance > 0, "No balance to withdraw");
        balances[msg.sender] = 0;
        payable(msg.sender).transfer(balance);
    }
}
