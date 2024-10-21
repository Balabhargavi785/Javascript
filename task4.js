const bankAccount = {
    accountNumber: '0987654321',
    accountHolderName: 'Bala Bhargavi',
    balance: 100000.00,
    
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
    },
    
    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Insufficient funds');
        } else {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.balance}`);
        }
    },

    getBalance() {
        return this.balance;
    }
};
bankAccount.deposit(5000); 
bankAccount.withdraw(20000);
console.log(`Current balance: $${bankAccount.getBalance()}`);  