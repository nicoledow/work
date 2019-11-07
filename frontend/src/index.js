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

// renderNewWorkoutButton() {
//   let button = document.createElement('button');
//   headerDiv.appendChild(button);
//   button.innerText = 'Plan a New Workout';
  
//   button.addEventListener('click', renderNewWorkoutForm());
// }


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



// function renderShowButton(workoutObj){
//   let workoutDiv = document.getElementById(workoutObj.id)
//   let button = document.createElement('button')
//   button.innerText = 'See Workout'
//   workoutDiv.appendChild(button)

//   button.addEventListener('click', (event) => {
//     event.preventDefault();
//     button.remove();
//     fetchWorkout(workoutObj.id)
//   })
// }

// function renderStartWorkoutButton(workoutObj) {
//   let workoutDiv = document.getElementById(workoutObj.id);
//   let button = document.createElement('button');
//   button.innerText = 'Begin Workout'
//   workoutDiv.appendChild(button);

//   button.addEventListener('click', (event) => {
//     event.preventDefault();
//     button.remove();
//     beginWorkout(workoutObj.id)
//   })
// }

// function fetchWorkout(id) {
//   fetch(`${BASE_URL}workouts/${id}`)
//   .then(response => response.json())
//   //.then(json => showWorkoutInfo(json))
//   .then(function(object){
//     //console.log(object);
//     const workout = new Workout(object);
//     workout.render();
//   })
// }