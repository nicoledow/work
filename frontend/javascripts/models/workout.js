class Workout {
    constructor(title, date, focus){
        this.title = title;
        this.date = date;
        this.focus = focus;
    }

    render(object) {
        let div = document.createElement('div');
        div.className = 'card';
        div.id = object.id;
        workoutContainer.appendChild(div);
        
        let workoutTitle = document.createElement('h2');
        workoutTitle.innerText = object.title;
        div.appendChild(workoutTitle);
                        
        let date = document.createElement('h4')
        date.innerText = object.date;
        div.appendChild(date);
        
        let focus = document.createElement('h3');
        focus.innerText = `Focus: ${object.focus}`;
        div.appendChild(focus);

        //this.renderShowButton(object);
        this.renderStartWorkoutButton(object);
    }

      renderStartWorkoutButton(workoutObj) {
        let workoutDiv = document.getElementById(workoutObj.id);
        let button = document.createElement('button');
        button.innerText = 'Begin Workout'
        workoutDiv.appendChild(button);
      
        button.addEventListener('click', (event) => {
          event.preventDefault();
          button.remove();
          Workout.begin(workoutObj.id);
        })
      }

      fetchData(id) {
        fetch(`${BASE_URL}workouts/${id}`)
        .then(response => response.json())
        .then(function(object){
          //console.log(object);
          const workout = new Workout(object);
          workout.render(object);
        })
      }

      static begin(workout_id) {
        fetch(`${BASE_URL}/workouts/${workout_id}`)
        .then(response => response.json())
        //.then(json => console.log(json))
        .then(json => Workout.renderTable(json))
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
          newSet.generateForm(workoutDiv)
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

        Workout.completeWorkoutTable(object, table);
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
      
          generateLiftInputCells(object, newTableRow);
        })
    }

    static getWorkoutDiv(object) {
      if(document.getElementById(object.id)){
          const workoutDiv = document.getElementById(object.id);
          return workoutDiv;
        } else {
          const workoutDiv = document.createElement('div');
          workoutDiv.id = object.id;
          return workoutDiv;
        }
    }
}
