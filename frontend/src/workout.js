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

        this.renderShowButton(object);
        this.renderStartWorkoutButton(object);
    }

    renderShowButton(workoutObj){
        let workoutDiv = document.getElementById(workoutObj.id)
        let button = document.createElement('button')
        button.innerText = 'See Workout'
        workoutDiv.appendChild(button)
      
        button.addEventListener('click', (event) => {
          event.preventDefault();
          button.remove();
          data(workoutObj.id)
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
          workoutobj.begin(workoutObj.id)
        })
      }

      data(id) {
        fetch(`${BASE_URL}workouts/${id}`)
        .then(response => response.json())
        //.then(json => showWorkoutInfo(json))
        .then(function(object){
          //console.log(object);
          const workout = new Workout(object);
          workout.render();
        })
      }

      generateLiftSetForm() {
        let div = document.getElementById('new-workout-div');
        let liftSetForm = document.createElement('form');
        div.appendChild(liftSetForm);
      
        let exerciseInput = document.createElement('input');
        exerciseInput.setAttribute("type", "text");
        exerciseInput.setAttribute("name", "exercise");
        exerciseInput.setAttribute("value", "Exercise");
        liftSetForm.appendChild(exerciseInput);
      }

      begin(workout_id) {
        fetch(`${BASE_URL}/workouts/${workout_id}`)
        .then(response => response.json())
        //.then(json => console.log(json))
        .then(json => createWorkoutTable(json))
      }
}