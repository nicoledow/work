class LiftSet {
  constructor(reps, weight, goal){
    this.reps = reps;
    this.weight = weight;
    this.goal = goal;
  }

  renderRow(object) {
    console.log(object);
    const table = document.getElementById(`${object.workout_id}-table`);
    let row = document.createElement('tr');
    row.id = `lift-set-${object.id}`
    table.appendChild(row);

    let exerciseCell = document.createElement('td');
    row.appendChild(exerciseCell);
    exerciseCell.innerText = object.exercise.name;

    let goalCell = document.createElement('td');
    row.appendChild(goalCell);
    goalCell.innerText = object.goal;

    let repsCell = document.createElement('td');
    row.appendChild(repsCell);
    let repsInput = document.createElement('input');
    repsInput.setAttribute("type", "text");
    repsInput.setAttribute("name", "actual-reps");
    repsInput.setAttribute("value", `${parseInt(object.reps, 10)}`);
    repsCell.appendChild(repsInput);

    let weightCell = document.createElement('td');
    row.appendChild(weightCell);
    let weightInput = document.createElement('input');
    weightInput.setAttribute("type", "text");
    weightInput.setAttribute("name", "actual-weight");
    weightInput.setAttribute("value", `${parseInt(object.weight, 10)}`)
    weightCell.appendChild(weightInput);

    let saveButton = document.createElement('td');
    row.appendChild(saveButton);
    saveButton.innerHTML = '<input type="submit" value="Save">';

    //need to add event listener to saveButton
  }

}