// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PrizeDrawLottery {
    address payable public creator; // the creator of the lottery
    uint256 public prizePool; // the total prize pool
    mapping(address => uint256) public ticketCounts; // the number of tickets each participant has
    address[] public participants; // the list of participants
    uint256 public winners1Percent; // percentage of winners in group 1
    uint256 public winners2Percent; // percentage of winners in group 2
    uint256 public share1Percent; // percentage of prize pool for winners in group 1
    uint256 public share2Percent; // percentage of prize pool for winners in group 2
    uint256 public share3Percent; // percentage of prize pool for winners in group 3
    
    constructor(uint256 _winners1Percent, uint256 _winners2Percent, uint256 _share1Percent, uint256 _share2Percent, uint256 _share3Percent, address _creator) {
        require(_winners1Percent + _winners2Percent <= 100, "Sum of winners percentages must be less than or equal to 100");
        creator = payable(_creator);
         winners1Percent = _winners1Percent;
        winners2Percent = _winners2Percent;
        share1Percent = _share1Percent;
        share2Percent = _share2Percent;
        share3Percent = _share3Percent;
    }

    receive() external payable {}

    fallback() external payable {}
    
    function buyTickets(uint256 count) public payable {
        require(msg.value >= count * 0.001 ether, "Insufficient payment");
        prizePool += msg.value;
        ticketCounts[msg.sender] += count;
        for (uint256 i = 0; i < count; i++) {
            participants.push(msg.sender);
        }
    }
    
    function drawWinners() public {
        require(msg.sender == creator, "Only the creator can draw winners");
        require(participants.length > 0, "No participants in the lottery");
        
        // Calculate the number of winners and their shares
        uint256 numWinners1 = participants.length * winners1Percent / 100;
        uint256 numWinners2 = participants.length * winners2Percent / 100;
        uint256 numWinners3 = participants.length - numWinners1 - numWinners2;
        uint256 share1 = prizePool * share1Percent / 100 / numWinners1;
        uint256 share2 = prizePool * share2Percent / 100 / numWinners2;
        uint256 share3 = prizePool * share3Percent / 100 / numWinners3;
        
        // Select the winners randomly
        for (uint256 i = 0; i < numWinners1; i++) {
            uint256 index = uint256(keccak256(abi.encodePacked(block.timestamp, i, "1"))) % participants.length;
            address winner = participants[index];
            payable(winner).transfer(share1);
            ticketCounts[winner] = 0;
            delete participants[index];
        }
        for (uint256 i = 0; i < numWinners2; i++) {
            uint256 index = uint256(keccak256(abi.encodePacked(block.timestamp, i, "2"))) % participants.length;
            address winner = participants[index];
            payable(winner).transfer(share2);
            ticketCounts[winner] = 0;
            delete participants[index];
        }
        for (uint256 i = 0; i < numWinners3; i++) {
            uint256 index = uint256(keccak256(abi.encodePacked(block.timestamp, i, "3"))) % participants.length;
            address winner = participants[index];
            payable(winner).transfer(share3);
            ticketCounts[winner] = 0;
            delete participants[index];
        }
        
        // Send any remaining prize pool to the creator
        if (prizePool > 0) {
            creator.transfer(prizePool);
            prizePool = 0;
        }
    }
    
    function getParticipants() public view returns (address[] memory) {
        return participants;
    }
}
