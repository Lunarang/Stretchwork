class AddMuscleIndexToStretches < ActiveRecord::Migration[6.1]
  def change
    add_index :stretches, :muscle
  end
end
