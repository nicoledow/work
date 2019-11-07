class App {
    //instantiate with workouts list as an attribute
      //is this correct?
    constructor(){
        
    }

    renderNewWorkoutButton() {
        let button = document.createElement('button');
        headerDiv.appendChild(button);
        button.innerText = 'Plan a New Workout';
        
        button.addEventListener('click', renderNewWorkoutForm);
      }
      
      
      getWorkouts(){
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
}