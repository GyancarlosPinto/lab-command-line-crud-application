const purchaseAPI = require("../src/purchases");

const purchaseData = require("../data/purchases.json");

describe("Purchase API", () => {
    describe("getPurchases()", () => {
        it("correctly gets all purchases in persistent data", () => {
          expect(purchaseAPI.getAllPurchases()).toEqual(purchaseData)
        })
      })
    
      describe("getPurchases()", () => {
        it("correctly gets a single purchase from persistent data", () => {
          const expected = {"name":"Spooky Pumpkin Spice Special Monster Latte","amount":"7.50","donation":"1.50","id":"2mZN"};
          const actual = purchaseAPI.getPurchaseById("2mZN")
          expect(actual).toEqual(expected);
        })
    
        it("correctly gives an error string back when purchase cannot be found", () => {
          const expected = "Error: No purchase with ID exists"
          const actual = purchaseAPI.getPurchaseById("invalid");
    
          expect(actual).toEqual(expected);
        })
      })
})