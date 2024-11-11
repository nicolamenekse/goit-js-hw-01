function getShippingMessage(country, price, deliveryFee) {
    `Shipping to ${country} will cost ${price + deliveryFee} credits`
}

getShippingMessage("Turkey", 100, 5)
getShippingMessage("Italy", 500, 25)
getShippingMessage("France", 110, 8)