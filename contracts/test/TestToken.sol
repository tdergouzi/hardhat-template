// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestToken is ERC20 {
    constructor(
        string memory name_,
        string memory symbol_,
        uint256 totalSupply
    ) ERC20(name_, symbol_) {
        _mint(msg.sender, totalSupply);
    }

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}
