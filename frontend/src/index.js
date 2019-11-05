const BASE_URL = 'http://localhost:3000/'
const body = document.querySelector('body')

document.addEventListener('DOMContentLoaded', getWorkouts());

function getWorkouts(){
    fetch(`${BASE_URL}workouts`)
    .then(response => response.json())
    .then(json => renderWorkouts(json))
    //.then(json => console.log(json))
}

function renderWorkouts(json){
    json.forEach(workout => {
        const div = document.createElement('div');
        div.className = 'workoutCard';
        div.id = workout.id;
        body.appendChild(div);

        const workoutTitle = document.createElement('h2');
        workoutTitle.innerText = workout.title;
        div.appendChild(workoutTitle);

        const date = document.createElement('h4')
        date.innerText = workout.date;
        div.appendChild(date);

        const focus = document.createElement('h3');
        focus.innerText = `Focus: ${workout.focus}`;
        div.appendChild(focus);

        renderShowButton(workout);
        renderStartWorkoutButton(workout);

    })
}

function renderShowButton(workoutObj){
  //create a button w/ a link to the workout's show page
    //the workout's exercises will be shown there
  let workoutDiv = document.getElementById(workoutObj.id)
  let button = document.createElement('button')
  button.innerText = 'See Workout'
  workoutDiv.appendChild(button)

  button.addEventListener('click', (event) => {
    event.preventDefault()
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
    beginWorkout(workoutObj.id)
  })
}

function fetchWorkout(id) {
  //fetch to /workouts/:id and show info
  fetch(`${BASE_URL}workouts/${id}`)
  .then(response => response.json())
  //.then(json => console.log(json))
  .then(json => showWorkoutInfo(json))
}

function showWorkoutInfo(object) {
  const ul = document.createElement('ul');
  ul.className = 'exerciseList';
  let workoutDiv = document.getElementById(object.id);
  workoutDiv.appendChild(ul);

  object.exercises.forEach(exercise => {
    const li = document.createElement('li')
    li.innerText = exercise.name;
    ul.appendChild(li);
  })
}


function beginWorkout(workout_id) {
  fetch(`${BASE_URL}/workouts/${workout_id}`)
  .then(response => response.json())
  .then(json => console.log(json))
  .then(json => createWorkoutTable(json))
}

//Make a table that shows goal for liftsets, and has inputs to edit and save actual data
function createWorkoutTable(object){
  let workoutDiv = document.getElementById(object.id)

  let table = document.createElement('table');
  workoutDiv.appendChild(table);

  let firstRow = document.createElement('tr')
  table.appendChild(firstRow)
  
  let exerciseHeader = document.createElement('th');
  exerciseHeader.innerText = 'Exercise:';
  firstRow.appendChild(exerciseHeader);

  let goalHeader = document.createElement('th');
  goalHeader.innerText = 'Session Goal:';
  firstRow.appendChild(goalHeader);

  let actualHeader = document.createElement('th');
  actualHeader.innerText = 'Actual:';
  firstRow.appendChild(actualHeader);
  
  completeWorkoutTable(object);
  // ^this should iterate thru exercises and lift sets to complete table/get ready for edits
}

function completeWorkoutTable(object) {
  //need to iterate through exercises and liftsets to complete table rows

}

