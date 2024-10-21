
function checkScholarshipEligibility(gpa) {
    if (gpa >= 7.5) {
        return "Congratulations! You are eligible for the scholarship.";
    } else {
        return "Unfortunately, you are not eligible for the scholarship.";
    }
}


const studentGPA = 7.8 ; 
const gpa = parseFloat(studentGPA); 

if (!isNaN(gpa)) { 
    const eligibilityMessage = checkScholarshipEligibility(gpa);
    console.log(eligibilityMessage); 
} else {
    console.log("Please enter a valid GPA.");
}