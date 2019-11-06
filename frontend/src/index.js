const BASE_URL = 'http://localhost:3000/'
const headerDiv = document.getElementById('header-div') 
const body = document.querySelector('body');
const workoutContainer = document.getElementById('workout-container');

window.addEventListener('load', () => {
  renderNewWorkoutButton();
  getWorkouts();
});

function renderNewWorkoutButton() {
  let button = document.createElement('button');
  headerDiv.appendChild(button);
  button.innerText = 'Plan a New Workout';
  
  button.addEventListener('click', renderNewWorkoutForm);
}


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

// function renderWorkouts(json){
//     json.forEach(workout => {
        // const div = document.createElement('div');
        // div.className = 'workoutCard';
        // div.id = workout.id;
        // workoutContainer.appendChild(div);

        // const workoutTitle = document.createElement('h2');
        // workoutTitle.innerText = workout.title;
        // div.appendChild(workoutTitle);

        // const date = document.createElement('h4')
        // date.innerText = workout.date;
        // div.appendChild(date);

        // const focus = document.createElement('h3');
        // focus.innerText = `Focus: ${workout.focus}`;
        // div.appendChild(focus);

        // renderShowButton(workout);
        // renderStartWorkoutButton(workout);

        //goal:
        //forEach -- const workout = new Workout(json)
        // workout.render();
        //(replace code above with this stuff)

//     })
// }

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
    console.log(object);
    //const workout = new Workout(object);
    //workout.render();
  })
}

//replace this with render() object function:
// function showWorkoutInfo(object) {
//   const ul = document.createElement('ul');
//   ul.className = 'exerciseList';
//   let workoutDiv = document.getElementById(object.id);
//   workoutDiv.appendChild(ul);

//   object.exercises.forEach(exercise => {
//     const li = document.createElement('li')
//     li.innerText = exercise.name;
//     ul.appendChild(li);
//   })
// }




