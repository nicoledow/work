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
  //.then(json => console.log(json))
  .then(json => createWorkoutTable(json))
}


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

  let actualReps = document.createElement('th');
  actualReps.innerText = 'Actual Reps:';
  firstRow.appendChild(actualReps);

  let actualWeight = document.createElement('th');
  actualWeight.innerText = 'Actual Weight:';
  firstRow.appendChild(actualWeight);

  let saveColumn = document.createElement('th')
  firstRow.appendChild(saveColumn);
  
  completeWorkoutTable(object, table);
}

function completeWorkoutTable(object, table) {
  object.lift_sets.forEach(set => {
    const newTableRow = document.createElement('tr');
    newTableRow.id = `lift-set-${set.id}`
    table.appendChild(newTableRow);

    const exerciseCell = document.createElement('td');
    exerciseCell.innerText = `${set.exercise.name}`;
    newTableRow.appendChild(exerciseCell);
    
    const goalCell = document.createElement('td');
    goalCell.innerText = `${set.goal}`;
    newTableRow.appendChild(goalCell);

    generateLiftInputCells(object, newTableRow);
  })
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
    updateLiftSets(button);
  });
}

//should update the set in the database with actual # of reps and weight
//UPDATE FUNCTION CURRENTLY NOT WORKING!?!
function updateLiftSets(button) {
  let lift_set_id = parseInt(button.parentElement.parentElement.id.split('-')[2], 10);
  let newReps = parseInt(button.parentElement.parentElement.querySelector('input[name="actual-reps"]').value, 10);
  let newWeight = parseInt(button.parentElement.parentElement.querySelector('input[name="actual-weight"]').value, 10);

  console.log(lift_set_id);
  console.log(newReps);
  console.log(newWeight);

  fetch(`${BASE_URL}liftsets/${lift_set_id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      "reps": newReps,
      "weight": newWeight
    })
  })
  .then(function(response){
    return response.json();
  })
  .then(function(object){
    console.log(object);
  })
  .catch(function(error){
    alert("Update failed!")
    console.log(error);
  })
}

