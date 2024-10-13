function processPayment(amount, cardNumber, expirationDate){
    try{
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error("Invalid payment amount.");
        }

        const cardNumberRegex = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
        if (!cardNumber || !cardNumberRegex.test(cardNumber)) {
            throw new Error("Invalid card number.");
        }

        const currentDate = new Date();
        const currMonth = currentDate.getMonth()+1;
        const currYear = currentDate.getFullYear()%100;

        const cardMonth = parseInt(expirationDate.slice(0,2),10);
        const cardYear = parseInt(expirationDate.slice(-2),10);

        if (!expirationDate) {
            throw new Error("Invalid expiration date.");
        }
        if (cardYear < currYear || (cardYear === currYear && cardMonth < currMonth)) {
            throw new Error("Invalid expiration date. The card is expired.");
        }

        console.log(`Processing payment of $${amount} with card number ending in ${cardNumber.slice(-4)}...`);
        console.log("Payment processed successfully!");
    } catch (error) {
        console.error("Payment failed:", error.message);
    }

}

try{
    processPayment(50.25, "1234-5678-9012-3456", "12/25");
    processPayment(-10, "invalidCardNumber", "05/22");
    processPayment(100.75, "9876-5432-1098-7654", "01/20");
}catch(error){
    console.error(error.message);
}