import { expect } from "chai";
import { ethers } from "hardhat";
import { YourContract } from "../typechain-types";

describe("YourContract", function () {
  let yourContract: YourContract;

  before(async () => {
    const [owner] = await ethers.getSigners();
    const YourContractFactory = await ethers.getContractFactory("YourContract");
    yourContract = await YourContractFactory.deploy();
  });

  describe("Invoice Creation", function () {
    it("Should create a new invoice with correct details", async function () {
      const [seller, buyer] = await ethers.getSigners();
      const amount = ethers.utils.parseEther("1");
      const tx = await yourContract.createInvoice(buyer.address, amount);
      await tx.wait(); // Wait for transaction to be mined

      const event = (await tx.wait()).events.find((e: any) => e.event === "InvoiceCreated");
      const invoiceId = event.args.id;

      const invoice = await yourContract.invoices(invoiceId);
      expect(invoice.seller).to.equal(seller.address);
      expect(invoice.buyer).to.equal(buyer.address);
      expect(invoice.amount).to.equal(amount);
      expect(invoice.paid).to.equal(false);
    });

    it("Should not allow non-buyer to pay the invoice", async function () {
      const [, nonBuyer] = await ethers.getSigners();
      const amount = ethers.utils.parseEther("1");
      const tx = await yourContract.createInvoice(nonBuyer.address, amount);
      await tx.wait(); // Wait for transaction to be mined

      const event = (await tx.wait()).events.find((e: any) => e.event === "InvoiceCreated");
      const invoiceId = event.args.id;

      await expect(yourContract.connect(nonBuyer).payInvoice(invoiceId)).to.be.revertedWith("Only the buyer can pay the invoice");
    });

    it("Should not allow payment of already paid invoice", async function () {
      const [seller, buyer] = await ethers.getSigners();
      const amount = ethers.utils.parseEther("1");
      const tx = await yourContract.createInvoice(buyer.address, amount);
      await tx.wait(); // Wait for transaction to be mined

      const event = (await tx.wait()).events.find((e: any) => e.event === "InvoiceCreated");
      const invoiceId = event.args.id;

      await yourContract.connect(buyer).payInvoice(invoiceId); // Pay the invoice once
      await expect(yourContract.connect(buyer).payInvoice(invoiceId)).to.be.revertedWith("The invoice has already been paid");
    });
  });
});

