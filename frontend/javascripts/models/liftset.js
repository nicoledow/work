class LiftSet {
  constructor(reps, weight, goal){
      this.reps = reps;
      this.weight = weight;
      this.goal = goal;
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
    
    setForm.addEventListener('submit', () => {
      event.preventDefault();
      api.submitNewLiftSet(setForm);
    })
  }

}