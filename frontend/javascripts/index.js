const BASE_URL = 'http://localhost:3000/'
const headerDiv = document.getElementById('header-div') 
const body = document.querySelector('body');
const workoutContainer = document.getElementById('workout-container');
const api = new Api;
const app = new App;

document.addEventListener('DOMContentLoaded', () => {
  api.getWorkouts();
  app.renderNewWorkoutButton();
});