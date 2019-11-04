const BASEURL = 'http://localhost:3000/'

document.addEventListener('DOMContentLoaded', getWorkouts());

function getWorkouts(){
    fetch(`${BASEURL}workoutsessions`)
    //is this step necessary? Isn't Rails already rendering JSON?
    .then(response => response.json())
    .then(json => renderWorkouts(json))
}

function renderWorkouts(json){
    json.forEach(workout => {
        const div = document.createElement('div')
        div.className = 'workoutCard'
        div.id = workout.id
        document.appendChild(div)

        const h2 = document.createElement('h2')
        h2.innerText = `${workout.title}`
        div.appendChild(h2)

        const h3 = document.createElement('h3')
        h3.innerText = 'Focus:'
        div.appendChild(h3)

        const p1 = document.createElement('p')
        p1.innerText = `${workout.focus}`
        h3.appendChild(p1)

    })
}