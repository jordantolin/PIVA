"use client";

// import { useState } from "react";
// import { gql } from "@apollo/client";
// import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import Link from "next/link";
// import { useAccount } from "wagmi";
// import { Address, AddressInput, Balance } from "~~/components/scaffold-eth";
import "~~/hooks/scaffold-eth";
import React from 'react';

const AboutUsPage: React.FC = () => {
    const backgroundStyle = {
        backgroundImage: 'url("https://wallpapercave.com/wp/wp2757874.gif")',
      };
  return (
    <div className="item-centre" style={backgroundStyle}>
    <div className="about-us-container">
      <h1 className="page-title">Welcome to ETH_VAT  Where Innovation Meets Finance! 🚀</h1>
      <p className="intro-text">
        At <strong className="important-text">ETH-VAT</strong>, we're not just providing a service;
        we're ushering in a financial revolution. 🌐💡 Imagine a world where registering, paying, and sending
        electronic invoices is not just efficient but also securely recorded on the Ethereum blockchain through
        our seamless integration with MetaMask. 🤯💼
      </p>
      <h2 className="section-title">Why Blockchain for Your Invoices? 🧐</h2>
      <p className="paragraph">
        In a traditional landscape, invoices are susceptible to errors, disputes, and often vulnerable to fraud.
        Enter the blockchain revolution! 🌐✨ By registering your invoices on the Ethereum blockchain, we're not
        just streamlining processes; we're fortifying them.
      </p>
      <h2 className="section-title">Transparent and Tamper-Proof Transactions 🛡️</h2>
      <p className="paragraph">
        Every transaction, every payment, every record – securely etched into the Ethereum blockchain. 📜✨ The
        result? A tamper-proof ledger that ensures transparency and trust. Say goodbye to disputes, and hello
        to a new era of financial integrity. 💪💎
      </p>
      <h2 className="section-title">Seamless MetaMask Integration 🚀</h2>
      <p className="paragraph">
        Registering and managing your invoices has never been easier! With our user-friendly platform and
        seamless MetaMask integration, you're just a few clicks away from a whole new level of financial
        efficiency. 💻🔗
      </p>
      <h2 className="section-title">Why Choose ETH-VAT? 🌐🚀</h2>
      <ul className="feature-list">
        <li className="feature-item"><strong className="important-text">Security:</strong> Your data is safeguarded by the robust Ethereum blockchain.</li>
        <li className="feature-item"><strong className="important-text">Efficiency:</strong> Streamlined processes mean more time for what matters.</li>
        <li className="feature-item"><strong className="important-text">Innovation:</strong> Join the financial revolution with cutting-edge technology.</li>
      </ul>
      <h2 className="section-title">Be Part of the Future, Today! 🌐🚀</h2>
      <p className="paragraph">
        Ready to embrace the future of finance? Join ETH-VAT and witness the power of blockchain in
        transforming how we handle invoices. Register with MetaMask, experience seamless transactions, and be a
        pioneer in the evolution of financial technology.
      </p>
      <p className="closing-text">
        Here's to a smarter, more secure financial future with ETH-VAT! 🌍💼
      </p>
    </div>
    </div>
  );
};

export default AboutUsPage;