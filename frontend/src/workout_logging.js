// function beginWorkout(workout_id) {
//     fetch(`${BASE_URL}/workouts/${workout_id}`)
//     .then(response => response.json())
//     //.then(json => console.log(json))
//     .then(json => createWorkoutTable(json))
//   }
  
  
  // function createWorkoutTable(object){
  //   let workoutDiv = document.getElementById(object.id)
  
  //   let table = document.createElement('table');
  //   workoutDiv.appendChild(table);
  
  //   let firstRow = document.createElement('tr')
  //   table.appendChild(firstRow)
    
  //   let exerciseHeader = document.createElement('th');
  //   exerciseHeader.innerText = 'Exercise:';
  //   firstRow.appendChild(exerciseHeader);
  
  //   let goalHeader = document.createElement('th');
  //   goalHeader.innerText = 'Session Goal:';
  //   firstRow.appendChild(goalHeader);
  
  //   let actualReps = document.createElement('th');
  //   actualReps.innerText = 'Actual Reps:';
  //   firstRow.appendChild(actualReps);
  
  //   let actualWeight = document.createElement('th');
  //   actualWeight.innerText = 'Actual Weight:';
  //   firstRow.appendChild(actualWeight);
  
  //   let saveColumn = document.createElement('th')
  //   firstRow.appendChild(saveColumn);
    
  //   completeWorkoutTable(object, table);
  // }
  
  // function completeWorkoutTable(object, table) {
  //   object.lift_sets.forEach(set => {
  //     const newTableRow = document.createElement('tr');
  //     newTableRow.id = `lift-set-${set.id}`
  //     table.appendChild(newTableRow);
  
  //     const exerciseCell = document.createElement('td');
  //     exerciseCell.innerText = `${set.exercise.name}`;
  //     newTableRow.appendChild(exerciseCell);
      
  //     const goalCell = document.createElement('td');
  //     goalCell.innerText = `${set.goal}`;
  //     newTableRow.appendChild(goalCell);
  
  //     generateLiftInputCells(object, newTableRow);
  //   })
  //}
  
  
  // function generateLiftInputCells(object, row) {
  
  //   const actualRepsCell = document.createElement('td');
  //   const actualRepsInput = document.createElement('input');
  //   actualRepsInput.setAttribute("type", "text");
  //   actualRepsInput.setAttribute("name", "actual-reps");
  //   row.appendChild(actualRepsCell);
  //   actualRepsCell.appendChild(actualRepsInput);
    
  //   const actualWeightCell = document.createElement('td');
  //   const actualWeightInput = document.createElement('input');
  //   actualWeightInput.setAttribute("type", "text");
  //   actualWeightInput.setAttribute("name", "actual-weight");
  //   row.appendChild(actualWeightCell);
  //   actualWeightCell.appendChild(actualWeightInput);
  
  //   const saveCell = document.createElement('td');
  //   row.appendChild(saveCell);
  
  //   let button = document.createElement('input');
  //   saveCell.appendChild(button)
  //   button.setAttribute("type", "submit");
  //   button.setAttribute("value", "Save");
  //   button.addEventListener('click', function(event){
  //     event.preventDefault();
  //     updateLiftSets(button);
  //   });
  // }
  
  
  // function updateLiftSets(button) {
  //   let lift_set_id = parseInt(button.parentElement.parentElement.id.split('-')[2], 10);
  //   let newReps = parseInt(button.parentElement.parentElement.querySelector('input[name="actual-reps"]').value, 10);
  //   let newWeight = parseInt(button.parentElement.parentElement.querySelector('input[name="actual-weight"]').value, 10);
  
  //   fetch(`${BASE_URL}liftsets/${lift_set_id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify({
  //       "reps": newReps,
  //       "weight": newWeight
  //     })
  //   })
  //   .then(function(response){
  //     return response.json();
  //   })
  //   .catch(function(error){
  //     alert("Update failed!")
  //     console.log(error);
  //   })
  // }