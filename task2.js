function calculateSalary(monthlyPayScale, deductions) {
    const fixedSalary = 50000;
    const finalSalary = fixedSalary - deductions;
    console.log(`Monthly Salary: ${finalSalary}`);
}
calculateSalary(50000, 15000);