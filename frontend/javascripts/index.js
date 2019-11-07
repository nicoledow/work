const BASE_URL = 'http://localhost:3000/'
const headerDiv = document.getElementById('header-div') 
const body = document.querySelector('body');
const workoutContainer = document.getElementById('workout-container');
const api = new Api;

window.addEventListener('load', () => {
  api.getWorkouts();
  renderNewWorkoutButton();
});


function renderNewWorkoutForm() {
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
      submitNewWorkout(newForm);
      generateLiftSetForm();
  })
}

function renderNewWorkoutButton() {
  let button = document.createElement('button');
  headerDiv.appendChild(button);
  button.innerText = 'Plan a New Workout';
  
  button.addEventListener('click', renderNewWorkoutForm());
}