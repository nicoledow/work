class CreateWorkoutSessions < ActiveRecord::Migration[6.0]
  def change
    create_table :workout_sessions do |t|
      t.string :title
      t.string :focus
      t.string :date

      t.timestamps
    end
  end
end
