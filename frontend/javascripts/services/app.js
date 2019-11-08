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

    addSetHTMLToDiv(object) {
        const workoutDiv = document.getElementById(object[0].workout_id);
        console.log('in liftset.addSetHTMLToDiv func');
        console.log(object);

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
    generateLiftForm(workoutDiv) {
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