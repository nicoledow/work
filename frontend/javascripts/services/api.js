class Api {
  fetchData(id) {
    fetch(`${BASE_URL}workouts/${id}`)
    .then(response => response.json())
    .then(function(object){
      const workout = new Workout(object);
      workout.render(object);
    })
  }

  getWorkout(workout_id) {
    fetch(`${BASE_URL}/workouts/${workout_id}`)
    .then(response => response.json())
    .then(function(json){
      App.renderTable(json);
      App.renderLikeButton(workout_id);
      App.renderFinishWorkoutButton(workout_id);
    })
  }

  getWorkouts(){
    fetch(`${BASE_URL}workouts`)
    .then(response => response.json())
    .then(json => {
      json.forEach(workoutObj => {
        const newWorkout = new Workout(workoutObj.title, workoutObj.date, workoutObj.focus);
        newWorkout.render(workoutObj);
      })
    })
  }

  getLikedWorkouts() {
    fetch(`${BASE_URL}workouts/liked`)
    .then(response => response.json())
    .then(json => {
      workoutContainer.innerHTML = "";
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

    updateWorkout(id) {
      let form = document.getElementById('edit-workout-form');
      
      fetch(`${BASE_URL}workouts/${id}`, {
        method: "PATCH",
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
         let w = new Workout(object)
         workoutContainer.removeChild(document.getElementById(object.id))
         workoutContainer.innerHtml += w.render(object);
      })
      .catch(function(error){
        alert("An error occurred. Please try again.")
        console.log(error.message);
      })
    }

    completeWorkout(workout_id){
      fetch(`${BASE_URL}workouts/${workout_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({"id": workout_id, "completed": true})
      })
      .then(response => response.json())
      .then(function(object){
        let workoutDiv = document.getElementById(workout_id);
        workoutDiv.parentElement.removeChild(workoutDiv);
      })
    }

    deleteWorkout(id) {
      fetch(`${BASE_URL}workouts/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({"id": id})
      })
      .then(response => response.json())
      .then(function(object){
        let workoutDiv = document.getElementById(id);
        workoutDiv.parentElement.removeChild(workoutDiv);
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

    static fetchExerciseNames(list) {
      fetch(`${BASE_URL}exercises`)
      .then(response => response.json())
      .then(function(object){
        console.log(object)
        app.completePRList(object)
        })
      }
    
   
    fetchLiftSets(exercise_id) {
      fetch(`${BASE_URL}exercises/${exercise_id}`)
      .then(response => response.json())
      .then(function(object){
        console.log('in api.fetchliftsets');
        console.log(object);
        LiftSet.renderRecords(object);
      })
    }

    submitNewLiftSet(form) {
      let workout_id = parseInt(form.querySelector('input[name="workout_id"]').value, 10);
      let exercise = form.querySelector('input[name="exercise"]').value;
      let goal = form.querySelector('input[name="goal"]').value;

      fetch(`${BASE_URL}liftsets`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({"workout_id": workout_id, "exercise": exercise, "goal": goal, "reps": 0, "weight": 0})
      })
      .then(function(response){
        return response.json();
      })
      .then(function(object){
        console.log(object);
        const set = new LiftSet(object[0].reps, object[0].weight, object[0].goal)
        set.renderRow(object[0]);
      })
      .catch(function(error){
        alert("An error occurred. Please try again.");
        console.log(error.message);
      })

    }

  static addLike(workout_id){
    fetch(`${BASE_URL}workouts/${workout_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({"id": workout_id, "liked": true})
    })
  }
     
}