class LiftSet {
  constructor(reps, weight, goal){
      this.reps = reps;
      this.weight = weight;
      this.goal = goal;
  }

  addSetHTMLToDiv(object) {
    const workoutDiv = document.getElementById(object[0].workout_id);
     console.log('in liftset.addSetHTMLToDiv func');
     console.log(object);
   //let form = workoutDiv.querySelector('form');
   
   let newRow = document.createElement('tr');
   workoutDiv.appendChild(newRow);
   //form.appendChild(newRow);

   let newExerciseCell = document.createElement('td');
   newExerciseCell.innerText = `${object[0].exercise.name}`;
   newRow.appendChild(newExerciseCell);

   let newGoalCell = document.createElement('td');
   newGoalCell.innerText = `${object[0].goal}`;
   newRow.appendChild(newGoalCell);

   let newRepsCell = document.createElement('td');
   let newRepsInput = document.createElement('input');
   newRepsInput.setAttribute("type", "text");
   newRepsInput.setAttribute("name", "actual-reps");
   newRepsInput.setAttribute("value", `${object[0].reps}`);
   newRepsCell.appendChild(newRepsInput);
   newRow.appendChild(newRepsCell);

   let newWeightCell = document.createElement('td');
   let newWeightInput = document.createElement('input');
   newWeightInput.setAttribute("type", "text");
   newWeightInput.setAttribute("name", "actual-weight");
   newWeightInput.setAttribute("value", `${object[0].weight}`);
   newWeightCell.appendChild(newWeightInput);
   newRow.appendChild(newWeightCell);
  }

  //called with  workoutDiv(to be reference for workout_id)
  generateForm(workoutDiv) {
    const setForm = document.createElement('form');
    workoutDiv.appendChild(setForm);

    const exerciseInput = document.createElement('input');
    exerciseInput.setAttribute("type", "text");
    exerciseInput.setAttribute("name", "exercise");
    exerciseInput.setAttribute("value", "Exercise");
    setForm.appendChild(exerciseInput);

    const workoutIdInput = document.createElement('input');
    workoutIdInput.setAttribute("type", "hidden");
    workoutIdInput.setAttribute("name", "workout_id");
    workoutIdInput.setAttribute("value", `${workoutDiv.id}`);
    setForm.appendChild(workoutIdInput);

    const goalInput = document.createElement('input');
    goalInput.setAttribute("type", "text");
    goalInput.setAttribute("name", "goal");
    goalInput.setAttribute("value", "Goal");
    setForm.appendChild(goalInput);

    const repsInput = document.createElement('input');
    repsInput.setAttribute("type", "text");
    repsInput.setAttribute("name", "reps");
    goalInput.setAttribute("value", "Reps");
    setForm.appendChild(repsInput);

    const weightInput = document.createElement('input');
    weightInput.setAttribute("type", "text");
    weightInput.setAttribute("name", "weight");
    weightInput.setAttribute("value", "Weight");
    setForm.appendChild(weightInput);

    const setSubmitButton = document.createElement('input');
    setSubmitButton.setAttribute("type", "submit")
    setSubmitButton.setAttribute("value", "Add");
    setForm.appendChild(setSubmitButton);
    
    setSubmitButton.addEventListener('click', function(event){
      event.preventDefault();
      api.submitNewLiftSet(setForm);
    })
  }

}