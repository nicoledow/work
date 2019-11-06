const renderNewWorkoutForm = function() {
    let newDiv = document.createElement('div');
    headerDiv.appendChild(newDiv);

    let newForm = document.createElement('form');
    newForm.setAttribute("method", "post");
    newForm.setAttribute("action", `${BASE_URL}/workouts/new`)
    newDiv.appendChild(newForm);

    let titleInput = document.createElement('input');
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "title");
    newForm.appendChild(titleInput);

    let dateInput = document.createElement('input');
    dateInput.setAttribute("type", "text");
    dateInput.setAttribute("name", "date");
    newForm.appendChild(dateInput);

    let focusInput = document.createElement('input');
    focusInput.setAttribute("type", "text");
    focusInput.setAttribute("name", "focus");
    newForm.appendChild(focusInput)

    let submitButton = document.createElement('input');
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Create");
    newForm.appendChild(submitButton);

    //newForm.addEventListener('submit', renderNewLiftSetForm());
}