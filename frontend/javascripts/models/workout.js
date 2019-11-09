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
   
    app.renderEditWorkoutButton(object);
    app.renderStartWorkoutButton(object);
  }



}