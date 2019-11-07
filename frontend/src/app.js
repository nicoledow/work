class App {

    renderNewWorkoutButton() {
        let button = document.createElement('button');
        headerDiv.appendChild(button);
        button.innerText = 'Plan a New Workout';
        
        button.addEventListener('click', renderNewWorkoutForm());
      }

      submitNewWorkout(form) {
        fetch(`${BASE_URL}workouts/new`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "title": form.querySelector('input[name="title"]').value,
                "date": form.querySelector('input[name="date"]').value,
                "focus": form.querySelector('input[name="focus"]').value
            })
        })
        .then(response => response.json())
        //implements object orientation:
        .then(function(object){
            console.log(object);
            //const workout = new Workout(object);
            //list.innerHTML += workout.render();
        })
      }
}























    // renderNewWorkoutButton() {
    //     let button = document.createElement('button');
    //     headerDiv.appendChild(button);
    //     button.innerText = 'Plan a New Workout';
        
    //     button.addEventListener('click', renderNewWorkoutForm);
    //   }
      
      
    //   getWorkouts(){
    //       fetch(`${BASE_URL}workouts`)
    //       .then(response => response.json())
    //       //.then(json => console.log(json))
    //       .then(json => {
    //         json.forEach(workoutObj => {
    //           const newWorkout = new Workout(workoutObj.title, workoutObj.date, workoutObj.focus);
    //           newWorkout.render(workoutObj);
    //         })
    //       })
    //   }

    //   fetchWorkout(id) {
    //     fetch(`${BASE_URL}workouts/${id}`)
    //     .then(response => response.json())
    //     //.then(json => showWorkoutInfo(json))
    //     .then(function(object){
    //       //console.log(object);
    //       const workout = new Workout(object);
    //       workout.render();
    //     })
    //   }
