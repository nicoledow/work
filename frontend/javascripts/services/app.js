class App {
    renderNewWorkoutButton() {
        let button = document.createElement('button');
        headerDiv.appendChild(button);
        button.id = 'new-workout-btn'
        button.innerText = 'Plan a New Workout';
        
       button.addEventListener('click', app.renderNewWorkoutForm);
      }

      renderNewWorkoutForm() {
        let newDiv = document.createElement('div');
        newDiv.id = 'new-workout-div'
        headerDiv.appendChild(newDiv);
      
        let newForm = document.createElement('form');
        newDiv.appendChild(newForm);
      
        let titleInput = document.createElement('input');
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("name", "title");
        titleInput.setAttribute("value", "Workout Title");
        newForm.appendChild(titleInput);
      
        let dateInput = document.createElement('input');
        dateInput.setAttribute("type", "text");
        dateInput.setAttribute("name", "date");
        dateInput.setAttribute("value", "Workout Date");
        newForm.appendChild(dateInput);
      
        let focusInput = document.createElement('input');
        focusInput.setAttribute("type", "text");
        focusInput.setAttribute("name", "focus");
        focusInput.setAttribute("value", "Workout Focus");
        newForm.appendChild(focusInput);
      
        let submitButton = document.createElement('input');
        submitButton.setAttribute("type", "submit");
        submitButton.setAttribute("value", "Create");
        newForm.appendChild(submitButton);
      
        newForm.addEventListener('submit', function(event) {
            event.preventDefault();
            api.submitNewWorkout(newForm);
            LiftSet.generateLiftSetForm();
        })
      }

      generateLiftInputCells(object, row) {
        const actualRepsCell = document.createElement('td');
        const actualRepsInput = document.createElement('input');
        actualRepsInput.setAttribute("type", "text");
        actualRepsInput.setAttribute("name", "actual-reps");
        row.appendChild(actualRepsCell);
        actualRepsCell.appendChild(actualRepsInput);
        
        const actualWeightCell = document.createElement('td');
        const actualWeightInput = document.createElement('input');
        actualWeightInput.setAttribute("type", "text");
        actualWeightInput.setAttribute("name", "actual-weight");
        row.appendChild(actualWeightCell);
        actualWeightCell.appendChild(actualWeightInput);
      
        const saveCell = document.createElement('td');
        row.appendChild(saveCell);
      
        let button = document.createElement('input');
        saveCell.appendChild(button)
        button.setAttribute("type", "submit");
        button.setAttribute("value", "Save");
        button.addEventListener('click', function(event){
          event.preventDefault();
          app.updateLiftSets(button);
        });
      }
        
          //called with  workoutDiv(to be reference for workout_id)
    generateLiftForm(workoutDiv) {
        const setForm = document.createElement('form');
        workoutDiv.appendChild(setForm);
        
        const exerciseInput = document.createElement('input');
        exerciseInput.setAttribute("type", "text");
        exerciseInput.setAttribute("name", "exercise");
        setForm.appendChild(exerciseInput);
        
        const workoutIdInput = document.createElement('input');
        workoutIdInput.setAttribute("type", "hidden");
        workoutIdInput.setAttribute("name", "workout_id");
        workoutIdInput.setAttribute("value", `${workoutDiv.id}`);
        setForm.appendChild(workoutIdInput);
        
        const goalInput = document.createElement('input');
        goalInput.setAttribute("type", "text");
        goalInput.setAttribute("name", "goal");
        setForm.appendChild(goalInput);
        
        const repsInput = document.createElement('input');
        repsInput.setAttribute("type", "text");
        repsInput.setAttribute("name", "reps");
        setForm.appendChild(repsInput);
        
        const weightInput = document.createElement('input');
        weightInput.setAttribute("type", "text");
        weightInput.setAttribute("name", "weight");
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

    renderStartWorkoutButton(workoutObj) {
        let workoutDiv = document.getElementById(workoutObj.id);
        let button = document.createElement('button');
        button.innerText = 'Begin Workout'
        workoutDiv.appendChild(button);
      
        button.addEventListener('click', (event) => {
          event.preventDefault();
          button.remove();
          api.getWorkout(workoutObj.id);
        })
      }

      static renderTable(object){
        const workoutDiv = document.getElementById(object.id);
       
        let table = document.createElement('table');
        workoutDiv.appendChild(table);

        let addSetButton = document.createElement('button');
        table.appendChild(addSetButton);
        addSetButton.innerText = 'Add a Set';
        addSetButton.addEventListener('click', () => {
          //let newSet = new LiftSet(0, 0, '');
          event.preventDefault();
          addSetButton.parentElement.removeChild(addSetButton.parentElement.querySelector('button'));
          let newSet = new LiftSet(0, 0, '');
          app.generateLiftForm(workoutDiv);
        })
      
        let firstRow = document.createElement('tr')
        table.appendChild(firstRow)
        
        let exerciseHeader = document.createElement('th');
        exerciseHeader.innerText = 'Exercise:';
        firstRow.appendChild(exerciseHeader);
      
        let goalHeader = document.createElement('th');
        goalHeader.innerText = 'Session Goal:';
        firstRow.appendChild(goalHeader);
      
        let actualReps = document.createElement('th');
        actualReps.innerText = 'Actual Reps:';
        firstRow.appendChild(actualReps);
      
        let actualWeight = document.createElement('th');
        actualWeight.innerText = 'Actual Weight:';
        firstRow.appendChild(actualWeight);
      
        let saveColumn = document.createElement('th')
        firstRow.appendChild(saveColumn);

        this.completeWorkoutTable(object, table);
      }

    static completeWorkoutTable(object, table) {
        object.lift_sets.forEach(set => {
          const newTableRow = document.createElement('tr');
          newTableRow.id = `lift-set-${set.id}`
          table.appendChild(newTableRow);
      
          const exerciseCell = document.createElement('td');
          exerciseCell.innerText = `${set.exercise.name}`;
          newTableRow.appendChild(exerciseCell);
          
          const goalCell = document.createElement('td');
          goalCell.innerText = `${set.goal}`;
          newTableRow.appendChild(goalCell);
      
          app.generateLiftInputCells(object, newTableRow);
        })
    }
        
}