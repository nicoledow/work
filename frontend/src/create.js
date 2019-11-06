const renderNewWorkoutForm = function() {
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
        submitNewWorkout(newForm);
        generateLiftSetForm();
    })
}

function submitNewWorkout(form) {
  fetch(`${BASE_URL}workouts/new`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify({
          "title": form.querySelector('input[name="title"]').value,
          "date": form.querySelector('input[name="date"]').value,
          "focus": form.querySelector('input[name="focus"]').value
      })
  })
  .then(response => response.json())
  .then(function(object){
      console.log(object);
  })
}

function generateLiftSetForm() {
  let div = document.getElementById('new-workout-div');
  let liftSetForm = document.createElement('form');
  div.appendChild(liftSetForm);

  let exerciseInput = document.createElement('input');
  exerciseInput.setAttribute("type", "text");
  exerciseInput.setAttribute("name", "exercise");
  exerciseInput.setAttribute("value", "Exercise");
  liftSetForm.appendChild(exerciseInput);
}