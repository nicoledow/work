const BASE_URL = 'http://localhost:3000/'
const headerDiv = document.getElementById('header-div') 
const body = document.querySelector('body');
const workoutContainer = document.getElementById('workout-container');

window.addEventListener('load', () => {
  //is this necessary? :
  let app = new App()
  app.getWorkouts();
  app.renderNewWorkoutButton();
});


function renderShowButton(workoutObj){
  let workoutDiv = document.getElementById(workoutObj.id)
  let button = document.createElement('button')
  button.innerText = 'See Workout'
  workoutDiv.appendChild(button)

  button.addEventListener('click', (event) => {
    event.preventDefault();
    button.remove();
    fetchWorkout(workoutObj.id)
  })
}

function renderStartWorkoutButton(workoutObj) {
  let workoutDiv = document.getElementById(workoutObj.id);
  let button = document.createElement('button');
  button.innerText = 'Begin Workout'
  workoutDiv.appendChild(button);

  button.addEventListener('click', (event) => {
    event.preventDefault();
    button.remove();
    beginWorkout(workoutObj.id)
  })
}

function fetchWorkout(id) {
  fetch(`${BASE_URL}workouts/${id}`)
  .then(response => response.json())
  //.then(json => showWorkoutInfo(json))
  .then(function(object){
    //console.log(object);
    const workout = new Workout(object);
    workout.render();
  })
}