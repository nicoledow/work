const BASE_URL = 'http://localhost:3000/'
const headerDiv = document.getElementById('header-div') 
const body = document.querySelector('body');
const workoutContainer = document.getElementById('workout-container');
const api = new Api;

document.addEventListener('DOMContentLoaded', () => {
  api.getWorkouts();
  renderNewWorkoutButton();
});


const renderNewWorkoutForm = function() {
  let newDiv = document.createElement('div');
  newDiv.id = 'new-workout-div'
  headerDiv.appendChild(newDiv);

  let newForm = document.createElement('form');
  newDiv.appendChild(newForm);

  let titleInput = document.createElement('input');
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("name", "title");
  titleInput.setAttribute("value", "Workout Title");
  newForm.appendChild(titleInput);

  let dateInput = document.createElement('input');
  dateInput.setAttribute("type", "text");
  dateInput.setAttribute("name", "date");
  dateInput.setAttribute("value", "Workout Date");
  newForm.appendChild(dateInput);

  let focusInput = document.createElement('input');
  focusInput.setAttribute("type", "text");
  focusInput.setAttribute("name", "focus");
  focusInput.setAttribute("value", "Workout Focus");
  newForm.appendChild(focusInput);

  let submitButton = document.createElement('input');
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "Create");
  newForm.appendChild(submitButton);

  newForm.addEventListener('submit', function(event) {
      event.preventDefault();
      api.submitNewWorkout(newForm);
      LiftSet.generateLiftSetForm();
  })
}

function renderNewWorkoutButton() {
  let button = document.createElement('button');
  headerDiv.appendChild(button);
  button.id = 'new-workout-btn'
  button.innerText = 'Plan a New Workout';
  
 button.addEventListener('click', renderNewWorkoutForm);
}



function generateLiftInputCells(object, row) {
  const actualRepsCell = document.createElement('td');
  const actualRepsInput = document.createElement('input');
  actualRepsInput.setAttribute("type", "text");
  actualRepsInput.setAttribute("name", "actual-reps");
  row.appendChild(actualRepsCell);
  actualRepsCell.appendChild(actualRepsInput);
  
  const actualWeightCell = document.createElement('td');
  const actualWeightInput = document.createElement('input');
  actualWeightInput.setAttribute("type", "text");
  actualWeightInput.setAttribute("name", "actual-weight");
  row.appendChild(actualWeightCell);
  actualWeightCell.appendChild(actualWeightInput);

  const saveCell = document.createElement('td');
  row.appendChild(saveCell);

  let button = document.createElement('input');
  saveCell.appendChild(button)
  button.setAttribute("type", "submit");
  button.setAttribute("value", "Save");
  button.addEventListener('click', function(event){
    event.preventDefault();
    app.updateLiftSets(button);
  });
}    

