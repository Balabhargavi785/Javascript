class Loan {
    constructor(amount, interestRate, term) {
        this.amount = amount;
        this.interestRate = interestRate; 
        this.term = term; 
        this.emisPaid = 0; // Number of EMIs paid
        this.totalPaid = 0; // Total amount paid so far
    }

    // Method to calculate monthly payment (EMI)
    calculateMonthlyPayment() {
        const monthlyRate = this.interestRate / 100 / 12; // Monthly interest rate
        const denominator = Math.pow(1 + monthlyRate, this.term) - 1;
        const emi = (this.amount * monthlyRate * Math.pow(1 + monthlyRate, this.term)) / denominator;
        return emi;
    }

    // Method to check loan status
    checkLoanStatus() {
        const emi = this.calculateMonthlyPayment();
        const totalAmountPaid = this.emisPaid * emi;
        const totalAmountWithInterest = this.amount + (this.amount * this.interestRate / 100);
        const remainingAmount = totalAmountWithInterest - totalAmountPaid;

        return {
            totalPaid: totalAmountPaid.toFixed(2),
            remainingAmount: remainingAmount.toFixed(2),
            totalEMIsPaid: this.emisPaid,
            emi: emi.toFixed(2)
        };
    }

    // Method to simulate payment of an EMI
    payEmi() {
        this.emisPaid++;
        const emi = this.calculateMonthlyPayment();
        this.totalPaid += emi;
    }
}


const loan = new Loan(10000, 5, 24); // Loan amount of 10,000, 5% interest, 24 months term

console.log("Monthly Payment (EMI):", loan.calculateMonthlyPayment().toFixed(2)); // Calculate EMI

// Simulating some payments
loan.payEmi();
loan.payEmi();

console.log(loan.checkLoanStatus()); // Check loan status