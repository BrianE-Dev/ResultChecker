console.log("Result Checker")
function checkResult() {
    let studentName, assignment1, assignment2, finalExam;
    studentName = document.getElementById("s_name").value;
    assignment1 = parseInt(document.getElementById("1st_A").value);
    assignment2 = parseInt(document.getElementById("2nd_A").value);
    finalExam = parseInt(document.getElementById("F_exam").value);
    
    let sum, assignmentAverage;
    sum = assignment1 + assignment2;
    assignmentAverage = sum / 2;
    const finalGrade = (assignmentAverage + (finalExam * 0.6));
    const hasPassed = finalGrade >= 60;
    const isExcellent = hasPassed && finalExam >= 90;
    const hasFailed = finalGrade < 60;

    if(hasPassed){
    console.log("Student Name:", studentName);
    console.log("Assignment Average: ", assignmentAverage);
    console.log("Final Grade:", finalGrade);
    console.log("Passed:", hasPassed);
    console.log("Excellent Performance:", isExcellent);
    document.getElementById("result").innerHTML = 
                    `
                    <div class="finalResult">
                    <div class="status">
                            <p>RESULT:</p>
                            <h5>Student Name: ${studentName}</h5><br>
                            <h5>Final Grade: ${finalGrade}</h5><br>
                            <h5>Result: Passed!</h5>
                    </div>
                    </div>
                    `;
    }
    else{
        console.log("Student Name:", studentName);
    console.log("Assignment Average: ", assignmentAverage);
    console.log("Final Grade:", finalGrade);
        console.log("Failed:", hasFailed);
        document.getElementById("result").innerHTML = 
                        `
                        <div class="finalResult">
                        <div class="status">
                            <h4>RESULT:</h4>
                            <h5>Student Name: ${studentName}</h5><br>
                            <h5>Final Grade: ${finalGrade}</h5><br>
                            <h5>Result: Failed! Repeat this class</h5>
                        </div>
                        </div>
                        `;
    }

}

document.addEventListener("DOMContentLoaded", () => {
 
  function validateInput(input, max) {
    input.addEventListener("input", function () {
     
      if (this.value.length > 2) {
        this.value = this.value.slice(0, 2);
      }
     
      if (parseInt(this.value) > max) {
        this.value = max;
      }
    });
  }
  validateInput(document.getElementById("1st_A"), 40);
  validateInput(document.getElementById("2nd_A"), 40);
  validateInput(document.getElementById("F_exam"), 60);
});



