class Loan {
    constructor(amount, applicant) {
        this.amount = amount;
        this.applicant = applicant;
        this.status = 'Pending'; 
    }
}

class LoanManager {
    constructor() {
        this.loans = [];
    }

    applyLoan(amount, applicant) {
        const loan = new Loan(amount, applicant);
        this.loans.push(loan);
        console.log(`Loan application submitted: ${JSON.stringify(loan)}`);
        return loan;
    }

    approveLoan(loan) {
        if (this.isEligible(loan.applicant)) {
            loan.status = 'Approved';
            console.log(`Loan approved: ${JSON.stringify(loan)}`);
        } else {
            this.rejectLoan(loan);
        }
    }

    rejectLoan(loan) {
        loan.status = 'Rejected';
        console.log(`Loan rejected: ${JSON.stringify(loan)}`);
    }

    isEligible(applicant) {
        // Eligibility criteria
        const minimumIncome = 30000;
        const minimumBalance = 10000; // Example balance criteria

        return applicant.monthlyIncome >= minimumIncome && applicant.balance >= minimumBalance;
    }

    reviewLoans() {
        this.loans.forEach(loan => {
            if (loan.status === 'Pending') {
                this.approveLoan(loan);
            }
        });
    }
}

// Example usage
const loanManager = new LoanManager();

// Applicant details
const applicant1 = { name: 'Alice', monthlyIncome: 35000, balance: 15000 };
const applicant2 = { name: 'Bob', monthlyIncome: 25000, balance: 5000 };

// Applying for loans
const loan1 = loanManager.applyLoan(50000, applicant1);
const loan2 = loanManager.applyLoan(20000, applicant2);

// Review loans
loanManager.reviewLoans();