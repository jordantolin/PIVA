<h1> 🏗 ETH-VAT - Blockchain Invoice and Payment App 📑 </h1>
<h2>Introduction 🚀</h2>
<p>ETH-VAT is a decentralized application (DApp) built on the Arbitrum Sepolia blockchain using Solidity smart contracts. The purpose of this DApp is to provide a secure and transparent platform for creating invoices and processing payments using blockchain technology. The smart contract managing the core functionality is deployed on the Arbitrum Sepolia network.</p>
<h2>Features ✨</h2>
<ul>
  <li><strong>Invoice Creation:</strong> Users can create invoices specifying details such as recipient, amount, due date, etc. 📄</li>
  <li><strong>Payment Processing:</strong> Once an invoice is created, payments can be made directly through the smart contract, ensuring transparency and immutability. 💰</li>
  <li><strong>Blockchain Security:</strong> All transactions are recorded on the Ethereum blockchain, specifically on the Arbitrum Sepolia network, providing tamper-proof audit trails. 🔒</li>
  <li><strong>Owner Withdrawal:</strong> The contract owner can withdraw accumulated funds from the contract. 💸</li>
</ul>
<h2>Getting Started 🚀</h2>
<p>To get started with using this DApp, follow these steps:</p>
<ol>
  <li>Clone the repository: <code>git clone -b backend https://github.com/jordantolin/PIVA</code></li>
  <li>Install dependencies using yarn: <code>yarn install</code></li>
  <li>Compile the smart contracts: <code>npx hardhat compile</code></li>
  <li>Deploy the contracts to the Arbitrum Sepolia network: <code>npx hardhat run scripts/deploy.js --network arbitrumSepolia</code></li>
  <li>Interact with the deployed contracts using a web interface or command-line tools.</li>
</ol>
<h2>Usage 🛠️</h2>
<ul>
  <li><strong>Creating Invoices:</strong> Use the <code>setGreeting</code> function in the smart contract to create a new invoice, specifying the details as parameters. 🖋️</li>
  <li><strong>Making Payments:</strong> Send ETH along with the transaction to pay an invoice. Premium features are activated for transactions with non-zero value. 💳</li>
  <li><strong>Withdrawing Funds:</strong> Only the contract owner can withdraw accumulated funds using the <code>withdraw</code> function. 💸</li>
</ul>
<h2>Contributing 🤝</h2>
<p>Contributions to this project are welcome. To contribute:</p>
<ol>
  <li>Fork the repository. 🍴</li>
  <li>Create a new branch: <code>git checkout -b feature/my-feature</code></li>
  <li>Make your changes and commit them: <code>git commit -am 'Add new feature'</code></li>
  <li>Push to the branch: <code>git push origin feature/my-feature</code></li>
  <li>Submit a pull request. 🔃</li>
</ol>
<h2>License 📝</h2>
<p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>
<h2>Contact 📧</h2>
<p>For questions or support, please contact the project maintainer at <a href="mailto:email@example.com">tsetse13@duck.it</a>.</p>
<p>Download the repository from the "Backend" branch as our modifications are there. Our goal was to create an app for invoicing on the blockchain connected to the tax agency to prevent tax evasion.</p>
