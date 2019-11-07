const BASE_URL = 'http://localhost:3000/'
const headerDiv = document.getElementById('header-div') 
const body = document.querySelector('body');
const workoutContainer = document.getElementById('workout-container');
const app = new App;

window.addEventListener('load', () => {
  //is this necessary? :
  getWorkouts();
  app.renderNewWorkoutButton();
});


function getWorkouts(){
    fetch(`${BASE_URL}workouts`)
    .then(response => response.json())
    //.then(json => console.log(json))
    .then(json => {
      json.forEach(workoutObj => {
        const newWorkout = new Workout(workoutObj.title, workoutObj.date, workoutObj.focus);
        newWorkout.render(workoutObj);
      })
    })
}

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
