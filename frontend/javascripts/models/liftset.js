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
    repsInput.setAttribute("placeholder", `${parseInt(object.reps, 10)}`);
    repsCell.appendChild(repsInput);

    let weightCell = document.createElement('td');
    row.appendChild(weightCell);
    let weightInput = document.createElement('input');
    weightInput.setAttribute("type", "text");
    weightInput.setAttribute("name", "actual-weight");
    weightInput.setAttribute("placeholder", `${parseInt(object.weight, 10)}`)
    weightCell.appendChild(weightInput);

    let saveButton = document.createElement('td');
    saveButton.className = 'btn-block btn-info';
    row.appendChild(saveButton);
    saveButton.innerHTML = '<input type="submit" value="Save">';

    saveButton.addEventListener('click', function(event){
      event.preventDefault();
      api.updateLiftSets(saveButton);
    });
  }

  static renderRecords(liftsets_object){
    let exerciseHeader = document.createElement('h1');
    exerciseHeader.id = 'exercise-title';
    exerciseHeader.innerText = liftsets_object[0].exercise.name
    body.appendChild(exerciseHeader);
    console.log('in liftset.renderrecords')
    console.log(liftsets_object)
    console.log(liftsets_object[0].exercise.name);
    body.removeChild(document.getElementById('exercise-list'));
    const table = document.createElement('table');
    table.id = 'liftset-table'
    body.appendChild(table);

    let firstRow = document.createElement('tr');
    table.appendChild(firstRow);

    let repsHeader = document.createElement('th');
    repsHeader.innerText = 'Reps:'
    firstRow.appendChild(repsHeader) 

    let weightHeader = document.createElement('th');
    weightHeader.innerText = 'Weight:';
    firstRow.appendChild(weightHeader);

    let dateHeader = document.createElement('th');
    dateHeader.innerText = 'Date'
    firstRow.appendChild(dateHeader);

    for(let i = 0; i < liftsets_object.length; i++){
      const row = document.createElement('tr');
      table.appendChild(row);

      const repsCell = document.createElement('td');
      repsCell.innerText = liftsets_object[i].reps;
      row.appendChild(repsCell);

      const weightCell = document.createElement('td');
      weightCell.innerText = liftsets_object[i].weight;
      row.appendChild(weightCell);
    }
  }

}