// SPDX-License-Identifier: UNLICENCED
pragma solidity >= 0.5.0 < 0.9.0;

contract Token {
    string public name="Hardhat Token";
    string public symbol ="HHT";
    uint public totalSupply = 100;
    address owner;

    mapping(address=>uint) balances;

    constructor() {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address _to, uint _amount) external {
          require(balances[msg.sender] >= _amount, "Not sufficient balance...!");
          balances[msg.sender] -= _amount;
          balances[_to] += _amount;
    }

    function getBalance(address _acc) external view returns(uint) {
        return balances[_acc];
    }

}