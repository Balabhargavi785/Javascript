function calculateSellingPrice(costPrice) {
    const discount = costPrice * 0.20;
    const sellingPrice = costPrice - discount;
    console.log(`The selling price of this product after 20% discount is: $${sellingPrice.toFixed(2)}`);
}
calculateSellingPrice(400);