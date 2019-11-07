class LiftSet {
  constructor(reps, weight, goal){
      this.reps = reps;
      this.weight = weight;
      this.goal = goal;
  }

//   updateLiftSets(button) {
//      let lift_set_id = parseInt(button.parentElement.parentElement.id.split('-')[2], 10);
//      let newReps = parseInt(button.parentElement.parentElement.querySelector('input[name="actual-reps"]').value, 10);
//      let newWeight = parseInt(button.parentElement.parentElement.querySelector('input[name="actual-weight"]').value, 10);
        
//     fetch(`${BASE_URL}liftsets/${lift_set_id}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json"
//         },
//         body: JSON.stringify({
//           "reps": newReps,
//           "weight": newWeight
//         })
//     })
//     .then(function(response){
//         return response.json();
//     })
//     .catch(function(error){
//         alert("Update failed!")
//        console.log(error);
//      })
//     }
}