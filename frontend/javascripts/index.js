const BASE_URL = 'http://localhost:3000/'
const headerDiv = document.getElementById('header-div') 
const body = document.querySelector('body');
const workoutContainer = document.getElementById('workout-container');
const container = body.querySelector('.container');
const api = new Api;
const app = new App;

document.addEventListener('DOMContentLoaded', () => {
  api.getWorkouts();
  //app.renderNewWorkoutButton();
});

const newWorkoutButton = document.getElementById('new-workout-btn')
newWorkoutButton.addEventListener('click', () => {
  app.renderNewWorkoutForm();
})

const prButton = document.getElementById('PR-btn');
prButton.addEventListener('click', () => {
  App.renderPRSearch();
})