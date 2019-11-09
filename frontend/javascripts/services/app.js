class App {

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
          api.updateLiftSets(button);
          alert('Data saved!');
        });
      }
        
          //called with  workoutDiv(to be reference for workout_id)
    generateLiftForm(workoutDiv) {
        const setForm = document.createElement('form');
        //dont think I need to reference workoutTable until data is actually submitted:
        //const workoutTable = document.getElementById(`${workoutDiv.id}-table`);
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
        
        // const repsInput = document.createElement('input');
        // repsInput.setAttribute("type", "text");
        // repsInput.setAttribute("name", "reps");
        // setForm.appendChild(repsInput);
        
        // const weightInput = document.createElement('input');
        // weightInput.setAttribute("type", "text");
        // weightInput.setAttribute("name", "weight");
        // setForm.appendChild(weightInput);
        
        const setSubmitButton = document.createElement('input');
        setSubmitButton.setAttribute("type", "submit")
        setSubmitButton.setAttribute("value", "Add");
        setForm.appendChild(setSubmitButton);
            
        setSubmitButton.addEventListener('click', function(event){
            event.preventDefault();
            api.submitNewLiftSet(setForm);
        })
    }

    static renderStartWorkoutButton(workoutObj) {
        let workoutDiv = document.getElementById(workoutObj.id);
        let button = document.createElement('button');
        button.innerText = 'Begin Workout'
        workoutDiv.appendChild(button);
      
        button.addEventListener('click', (event) => {
          event.preventDefault();
          workoutDiv.querySelectorAll('button').forEach(b => {
            b.remove();
          })
          api.getWorkout(workoutObj.id);
        })
      }

      static renderEditWorkoutButton(workoutObject) {
        let button = document.createElement('button');
        button.innerText = 'Edit Workout'
        button.addEventListener('click', function(){
          App.renderEditForm(workoutObject.id);
        })
        document.getElementById(workoutObject.id).appendChild(button);
      }

      static renderDeleteWorkoutButton(workoutObject) {
        let button = document.createElement('button');
        let workoutDiv = document.getElementById(workoutObject.id);
        workoutDiv.appendChild(button);
        button.innerText = 'Delete Workout';
        button.addEventListener('click', function(){
          api.deleteWorkout(workoutObject.id);
        })
      }

      static renderTable(object){
        const workoutDiv = document.getElementById(object.id);
       
        let table = document.createElement('table');
        table.id = `${workoutDiv.id}-table`;
        workoutDiv.appendChild(table);

        let addSetButton = document.createElement('button');
        table.appendChild(addSetButton);
        addSetButton.innerText = 'Add a Set';
        addSetButton.addEventListener('click', () => {
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

    static renderFinishWorkoutButton(workout_id) {
      let button = document.createElement('button');
      button.innerText = "Finished!";
      document.getElementById(workout_id).appendChild(button);

      button.addEventListener('click', function(event){
        event.preventDefault();
        //button.parentElement.removeChild(button.parentElement.querySelectorAll('button'));
        api.completeWorkout(workout_id);
      })
    }

    static renderEditForm(workout_id){
      let form = document.createElement('form');
      form.id = 'edit-workout-form';
      document.getElementById(workout_id).appendChild(form);

      let titleInput = document.createElement('input');
      titleInput.setAttribute("type", "text");
      titleInput.setAttribute("name", "title");
      titleInput.setAttribute("value", "Workout Title");
      form.appendChild(titleInput);

      let dateInput = document.createElement('input');
      dateInput.setAttribute("type", "text");
      dateInput.setAttribute("name", "date");
      dateInput.setAttribute("value", "Workout Date");
      form.appendChild(dateInput);

      let focusInput = document.createElement('input');
      focusInput.setAttribute("type", "text");
      focusInput.setAttribute("name", "focus");
      focusInput.setAttribute("value", "Workout Focus");
      form.appendChild(focusInput);

      let workoutIdField = document.createElement('input');
      workoutIdField.setAttribute("type", "hidden");
      workoutIdField.setAttribute("value", workout_id);
      form.appendChild(workoutIdField);

      let submit = document.createElement('input');
      submit.setAttribute("type", "submit");
      form.appendChild(submit);

      form.addEventListener('submit', function(event){
        event.preventDefault();
        api.updateWorkout(workout_id);
      })
    }

  static renderPRSearch() {
    if (document.getElementById('workout-container')){
    container.removeChild(workoutContainer);
    }

    if (document.getElementById('liftset-table')){
      body.removeChild(document.getElementById('liftset-table'));
      body.querySelector('h1').remove();
    }
 
    let form = document.createElement('form');
    form.id = 'pr-search-form';
    body.appendChild(form);

    form.innerHTML += '<input type="text" id="exercise" onkeyup="api.narrowExercises()" placeholder="Search for an exercise">'
    let ul = document.createElement('ul')
    ul.id = 'exercise-list'
    body.appendChild(ul);
    Api.fetchExerciseNames(ul);
 }

  completeSearchList(exercisesObj) {
    console.log('in app.completeSearchList')
    console.log(exercisesObj)
    console.log(exercisesObj[0])
    console.log(exercisesObj[0].name);
    console.log(exercisesObj.length)
    let list = document.getElementById('exercise-list');
    
    for (let i = 0; i < exercisesObj.length; i++){
      let li = document.createElement('li')
      li.id = exercisesObj[i].id;
      li.innerHTML = exercisesObj[i].name;
      list.appendChild(li);

      const button = document.createElement('button')
      button.innerText = 'Records';
      li.appendChild(button);

      button.addEventListener('click', function(){
        api.fetchLiftSets(exercisesObj[i].id)
      })
    }
  }
        
}