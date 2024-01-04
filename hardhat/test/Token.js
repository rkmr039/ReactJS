const {expect} = require("chai");
const { loadFixture } = require("ethereum-waffle");
const {ethers} = require("hardhat");

describe("Token", () => {

    async function tokenFixtureFactory() {
        const [owner, addr1, addr2] = await ethers.getSigners();

        const Token = await ethers.getContractFactory("Token");

        const hht = await Token.deploy();
        await hht.deployed();

        return {Token, owner, addr1, addr2, hht}
    };
    it("Deployment should assign total supply of token to owner", async () => {
        const {hht, owner} = await loadFixture(tokenFixtureFactory);

        const ownerBalance = await hht.getBalance(owner.address);
        expect(await hht.totalSupply()).to.equal(ownerBalance); 
    });

    it("Should transfer token between acounts", async () => {
        const {hht, owner, addr1, addr2} = await loadFixture(tokenFixtureFactory);
        console.log(await hht.getBalance(owner.address));
        await hht.transfer(addr1.address,10);
        console.log(await hht.getBalance(addr1.address));
        expect(await hht.getBalance(addr1.address)).to.equal(10);
        await hht.connect(addr1).transfer(addr2.address, 5);
        expect(await hht.getBalance(addr1.address)).to.equal(5);

    });
});