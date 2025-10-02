console.log("Result Checker")
function checkResult() {
    let studentName, assignment1, assignment2, finalExam;
    studentName = document.getElementById("s_name").value;
    assignment1 = Number(document.getElementById("1st_A").value);
    assignment2 = Number(document.getElementById("2nd_A").value);
    finalExam = Number(document.getElementById("F_exam").value);
    
    let sum, assignmentAverage;
    sum = assignment1 + assignment2;
    assignmentAverage = sum / 2;
    const finalGrade = ((assignmentAverage * 0.4) + (finalExam * 0.6));
    const hasPassed = finalGrade >= 70;
    const isExcellent = hasPassed && finalExam >= 90;
    const hasFailed = finalGrade < 70;

    if(hasPassed){
    console.log("Student Name:", studentName);
    console.log("Assignment Average: ", assignmentAverage);
    console.log("Final Grade:", finalGrade);
    console.log("Passed:", hasPassed);
    console.log("Excellent Performance:", isExcellent);
    document.getElementById("result").innerHTML = "Passed";
    }
    else{
        console.log("Student Name:", studentName);
    console.log("Assignment Average: ", assignmentAverage);
    console.log("Final Grade:", finalGrade);
        console.log("Failed:", hasFailed);
        document.getElementById("result").innerHTML = "Failed";
    }
}