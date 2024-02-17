// SPDX-License-Identifier: GPL-3.0	
pragma solidity >=0.8.0 <0.9.0;

// Utile per il debug. Rimuovere prima del rilascio su una rete live.
import "hardhat/console.sol";
// Interfaccia per il token ERC20
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract YourContract {
    // Definizione della struttura dati per le informazioni relative a una fattura
    struct InvoiceData {
        uint256 id; // Identificativo della fattura
        address seller; // Indirizzo del venditore
        address buyer; // Indirizzo dell'acquirente
        uint amount; // Importo della fattura
        bool paid; // Flag che indica se la fattura è stata pagata
    }

    // Mappatura degli ID delle fatture alle relative informazioni
    mapping(uint256 => InvoiceData) public invoices;

    uint256 public id;

    address public usdcToken;
    
    // Evento emesso quando viene creata una nuova fattura
    event InvoiceCreated(address indexed seller, address indexed buyer, uint amount);


    constructor() {
        usdcToken = 0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d;
    }


    // Funzione per creare una nuova fattura
    function createInvoice(address seller, address buyer, uint amount) public returns (uint256){

        id += 1;
        // Creazione di una nuova fattura
        InvoiceData memory newInvoice = InvoiceData({
            id: id, // Identificativo della fattura
            seller: seller, // Indirizzo del venditore
            buyer: buyer, // Indirizzo dell'acquirente
            amount: amount, // Importo della fattura
            paid: false // Flag che indica se la fattura è stata pagata
        });

        // Salva la fattura nel mapping
        invoices[newInvoice.id] = newInvoice;

        // Emisione dell'evento InvoiceCreated
        emit InvoiceCreated(seller, buyer, amount);

        return newInvoice.id;
    }

    // Funzione per pagare una fattura
    function payInvoice(uint256 invoiceId) public {
        // Recupera la fattura dal mapping
        InvoiceData storage invoice = invoices[invoiceId];

        // Verifica che la fattura non sia già stata pagata
        require(!invoice.paid, "The invoice has already been paid");

        // Trasferisce l'importo della fattura dal pagatore al venditore
        IERC20(usdcToken).transferFrom(invoice.buyer, invoice.seller, invoice.amount);

        // Imposta il flag di pagamento della fattura su true
        invoice.paid = true;
    }
}
