const fs = require("fs");

const purchases = require("../data/purchases.json");
const { nanoid } = require("nanoid");

// Get one purchase out at the provided Id
function getPurchaseById(id) {
    const result = purchases.findIndex(purchase => purchase.id === id);
    if (result >= 0) {
        return purchases[result]
    }
    return `Error: No purchase with ID exists`;
}

// Get all purchases
function getAllPurchases() {
    return purchases;
}

// Create a purchase with details
function createPurchase(purchaseDetails) {
    purchaseDetails.id = nanoid(4);
    purchases.push(purchaseDetails);
    return purchaseDetails;
}

// Update an existing purchase with the details provided
function updatePurchase(id, purchaseDetails) {
    const result = purchases.findIndex(purchase => purchase.id === id);
    if(purchases[result]) {
        purchases[result] = {
        ...purchases[result],
        ...purchaseDetails
      };
      return purchases[result];
    }
  
    return `Error: purchase with ID ${id} not found`;
}

// Delete an existing purchase
function deletePurchase(id) {
    const result = purchases.findIndex(purchase => purchase.id === id);
    if(purchases[result]) {
      const deleted = purchases.splice(result, 1);
      return deleted;
    }
  
    return `Error: event with ID ${id} not found`;
  }

// Saves the purchases to purchases.json file for persistence
function savePurchase() {
    const stringifiedPurchases = JSON.stringify(purchases);
    fs.writeFileSync("./data/purchases.json", stringifiedPurchases); 
}

module.exports = {
    getPurchaseById,
    getAllPurchases,
    createPurchase,
    updatePurchase,
    deletePurchase,
    savePurchase
}