// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Lottery {
    address public manager;
    address payable[] public players;
    uint public totalPrize;
    uint public minBet;
    uint public maxPlayers;
    uint public endTime;
    bool public isLocked;

    constructor(uint _minBet, uint _maxPlayers, uint _endTime, address _owner) {
        manager = _owner;
        minBet = _minBet;
        maxPlayers = _maxPlayers;
        endTime = block.timestamp + _endTime;
        isLocked = false;
    }

    modifier onlyManager() {
        require(
            msg.sender == manager,
            "Only manager can perform this operation"
        );
        _;
    }

    modifier checkLocked() {
        require(!isLocked, "Contract is locked");
        _;
    }

    function buyTicket() public payable checkLocked {
        require(msg.value == minBet, "Minimum bet is required");
        require(
            players.length < maxPlayers,
            "Maximum number of players reached"
        );

        players.push(payable(msg.sender));
        totalPrize += msg.value;
    }

    function getPlayers() public view returns (address payable[] memory) {
        return players;
    }

    function lockContract() public onlyManager {
        require(
            block.timestamp >= endTime,
            "Contract cannot be locked before end time"
        );

        isLocked = true;
    }

    function chooseWinner() public onlyManager checkLocked {
        require(players.length > 0, "No players participated");

        uint winnerIndex = uint(
            keccak256(
                abi.encodePacked(
                    block.timestamp,
                    blockhash(block.number - 1), // Use previous block's hash
                    players.length
                )
            )
        ) % players.length;
        players[winnerIndex].transfer(totalPrize);
        totalPrize = 0;
        isLocked = true;
    }

    function withdrawFunds() public onlyManager {
        payable(manager).transfer(address(this).balance);
    }

    function setMinBet(uint _minBet) public onlyManager checkLocked {
        require(_minBet > 0, "Minimum bet cannot be zero");

        minBet = _minBet;
    }

    function setMaxPlayers(uint _maxPlayers) public onlyManager checkLocked {
        require(_maxPlayers > 0, "Maximum players cannot be zero");

        maxPlayers = _maxPlayers;
    }

    function setEndTime(uint _endTime) public onlyManager checkLocked {
        endTime = block.timestamp + _endTime;
    }
}
