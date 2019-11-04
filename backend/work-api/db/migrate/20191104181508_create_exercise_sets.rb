class CreateExerciseSets < ActiveRecord::Migration[6.0]
  def change
    create_table :exercise_sets do |t|
      t.integer :exercise_id
      t.integer :reps
      t.integer :weight
      t.integer :workout_session_id

      t.timestamps
    end
  end
end
