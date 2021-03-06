const BASE_URL = 'http://localhost:3000/'
const headerDiv = document.getElementById('header-div') 
const body = document.querySelector('body');
const workoutContainer = document.getElementById('workout-container');
const container = body.querySelector('.container');
const api = new Api;
const app = new App;

document.addEventListener('DOMContentLoaded', () => {
  api.getWorkouts();
});

const newWorkoutButton = document.getElementById('new-workout-btn')
newWorkoutButton.addEventListener('click', () => {
  app.renderNewWorkoutForm();
})

document.getElementById('PR-btn').addEventListener('click', () => {
  App.renderPRs();
})

document.getElementById('home-btn').addEventListener('click', () => {
  location.reload();
})

document.getElementById('liked-workouts-btn').addEventListener('click', () => {
  api.getLikedWorkouts();
})