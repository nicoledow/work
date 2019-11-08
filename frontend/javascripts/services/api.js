class Api {
  fetchData(id) {
    fetch(`${BASE_URL}workouts/${id}`)
    .then(response => response.json())
    .then(function(object){
      //console.log(object);
      const workout = new Workout(object);
      workout.render(object);
    })
  }

  getWorkout(workout_id) {
    fetch(`${BASE_URL}/workouts/${workout_id}`)
    .then(response => response.json())
    //.then(json => console.log(json))
    .then(json => App.renderTable(json))
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
      .then(function(object){
          const workout = new Workout(object);
          workoutContainer.innerHtml += workout.render(object);
      })
    }

    updateLiftSets(button) {
      let lift_set_id = parseInt(button.parentElement.parentElement.id.split('-')[2], 10);
      let newReps = parseInt(button.parentElement.parentElement.querySelector('input[name="actual-reps"]').value, 10);
      let newWeight = parseInt(button.parentElement.parentElement.querySelector('input[name="actual-weight"]').value, 10);
         
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
     .catch(function(error){
         alert("Update failed!")
        console.log(error);
      })
     }

     submitNewLiftSet(form) {
       alert('hit api.submitNewLiftSet function');
       let workout_id = parseInt(form.querySelector('input[name="workout_id"]').value, 10);
       let exercise = form.querySelector('input[name="exercise"]').value;
       let goal = form.querySelector('input[name="goal"]').value;
       let reps = parseInt(form.querySelector('input[name="reps"]').value, 10);
       let weight = parseInt(form.querySelector('input[name="weight"]').value, 10);

       fetch(`${BASE_URL}liftsets`, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           "Accept": "application/json"
         },
         body: JSON.stringify({"workout_id": workout_id, "exercise": exercise, "goal": goal, "reps": reps, "weight": weight})
       })
       .then(function(response){
         return response.json();
       })
       .then(function(object){
         console.log(object);
         //const set = new LiftSet(object[0].reps, object[0].weight, object[0].goal)
         app.addSetHTMLToDiv(object, form.parentElement)
       })
       .catch(function(error){
         alert("An error occurred. Please try again.");
         console.log(error.message);
       })
     }

}