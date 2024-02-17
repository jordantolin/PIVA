// SPDX-License-Identifier: GPL-3.0	
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

contract YourContract {
    // Definizione della struttura dati per le informazioni relative a una fattura
    struct InvoiceData {
		uint256 id; // Identificativo della fattura
        address seller; // Indirizzo del venditore
        address buyer; // Indirizzo dell'acquirente
        uint amount; // Importo della fattura
        bool paid; // Flag che indica se la fattura è stata pagata
    }
    
    // Evento emesso quando viene creata una nuova fattura
    event InvoiceCreated(address indexed seller, address indexed buyer, uint amount);

// Funzione per creare una nuova fattura
function createInvoice(address buyer, uint amount) public returns (uint256){
	// Creazione di una nuova fattura
	InvoiceData memory newInvoice = InvoiceData({
		id: block.timestamp, // Identificativo della fattura
		seller: msg.sender, // Indirizzo del venditore
		buyer: buyer, // Indirizzo dell'acquirente
		amount: amount, // Importo della fattura
		paid: false // Flag che indica se la fattura è stata pagata
	});
	// Emisione dell'evento InvoiceCreated
	emit InvoiceCreated(msg.sender, buyer, amount);
	return newInvoice.id;}
}	