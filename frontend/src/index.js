const BASEURL = 'http://localhost:3000/'
const body = document.querySelector('body')

document.addEventListener('DOMContentLoaded', getWorkouts());

function getWorkouts(){
    fetch(`${BASEURL}workouts`)
    //is this step necessary? Isn't Rails already rendering JSON?
    .then(response => response.json())
    .then(json => renderWorkouts(json))
}

function renderWorkouts(json){
    json.forEach(workout => {
        const div = document.createElement('div')
        div.className = 'workoutCard'
        div.id = workout.id
        body.appendChild(div)
    })
}