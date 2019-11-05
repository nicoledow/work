const BASE_URL = 'http://localhost:3000/'
const body = document.querySelector('body')

document.addEventListener('DOMContentLoaded', getWorkouts());

function getWorkouts(){
    fetch(`${BASE_URL}workouts`)
    //is this step necessary? Isn't Rails already rendering JSON?
    .then(response => response.json())
    .then(json => renderWorkouts(json))
    //.then(json => console.log(json))
}

function renderWorkouts(json){
    json.forEach(workout => {
        const div = document.createElement('div')
        div.className = 'workoutCard'
        div.id = workout.id
        body.appendChild(div)

        const workoutTitle = document.createElement('h2')
        workoutTitle.innerText = workout.title
        div.appendChild(workoutTitle)

        const date = document.createElement('h4')
        date.innerText = workout.date
        div.appendChild(date)

        const focus = document.createElement('h3')
        focus.innerText = `Focus: ${workout.focus}`
        div.appendChild(focus)

        renderShowButton(workout)

    })
}

function renderShowButton(workout){
  //create a button w/ a link to the workout's show page
    //the workout's exercises will be shown there
  let workoutDiv = document.getElementById(workout.id)
  let button = document.createElement('button')
  button.innerHTML = 'See Workout'
  workoutDiv.appendChild(button)

  button.addEventListener('click', (event) => {
    event.preventDefault()
    fetchWorkout(workout.id)
  })
}

function fetchWorkout(id) {
  //fetch to /workouts/:id and show info
  fetch(`${BASE_URL}workouts/${id}`)
  .then(response => response.json())
  .then(json => console.log(json))
  //.then(json => loadExercises(json))
}

function loadExercises(object) {
  let workoutDiv = document.getElementById(object.id)
  const ul = document.createElement('ul')
  ul.className = 'exerciseList'
  workoutDiv.appendChild(ul);

  object.lift_sets.forEach(set => {
    let li = document.createElement('li');
    ul.appendChild(li);
    
  })
}

