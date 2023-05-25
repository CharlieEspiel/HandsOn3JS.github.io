

function getAverage(){
  let student = document.getElementById('studName').value;
  var grades = [
    parseInt(document.getElementById('filipino').value),
    parseInt(document.getElementById('english').value),
    parseInt(document.getElementById('mathematics').value),
    parseInt(document.getElementById('science').value),
    parseInt(document.getElementById('aralingPanlipunan').value),
    parseInt(document.getElementById('mapeh').value),
    parseInt(document.getElementById('values').value),
    parseInt(document.getElementById('tle').value)
  ];

  let sum = 0;
  for (let grade of grades){
    sum += grade;
  }
  let average = sum / grades.length;
  
  if(average >= 75){
    getPassedGrade(average, student);
  }else{
    getFailedGrade(average, student);
  }
}

function displayStudentName(){
    const studentName = document.getElementById("studName").value;
    return studentName;
}

function getFailedGrade(num, student){
   Swal.fire({
    icon: 'error',
    title: 'Average: ' + num.toFixed(2),
    text: student + ' is FAILED!'
  }).then((result) => {
    if (result.isConfirmed) {
      location.reload();
    }
  });
}

function getPassedGrade(num, student){
  Swal.fire({
    icon: 'success',
    title: 'Average: ' + num.toFixed(2),
    text: student + ' is PASSED!'
  }).then((result) => {
    if (result.isConfirmed) {
      location.reload();
    }
  });
}

function validateGrade(input, remarksId) {
    var value = parseInt(input.value);
    const getRemark = document.getElementById(remarksId);
    if (isNaN(value) || value < 50 || value > 100) {
      input.setCustomValidity("Please enter a number between 50 and 100.");
      getRemark.innerHTML = "";
    } else {
      input.setCustomValidity("");
      if(value < 68){
        getRemark.innerHTML = '<span class="badge fail">Failed</span>';
      }else if(value > 67 && value < 75){
        getRemark.innerHTML = '<span class="badge remedial">Remedial</span>';
      }else if(value > 74 && value < 101){
        getRemark.innerHTML = '<span class="badge pass">Passed</span>';
      }
    }
  }