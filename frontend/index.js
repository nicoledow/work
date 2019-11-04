const BASEURL = 'http://localhost:3000/'

document.addEventListener('DOMContentLoaded', getWorkouts());

function getWorkouts(){
    fetch(`${BASEURL}workoutsessions`)
    .then(response => response.json())
    .then(json => renderWorkouts(json))
}