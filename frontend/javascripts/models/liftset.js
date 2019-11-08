class LiftSet {
  constructor(reps, weight, goal){
    this.reps = reps;
    this.weight = weight;
    this.goal = goal;
  }

  render(object) {
    const workoutDiv = document.getElementById(object[0].workout_id);
    console.log(object);

    let newRow = document.createElement('tr');
    workoutDiv.appendChild(newRow);
    
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

}