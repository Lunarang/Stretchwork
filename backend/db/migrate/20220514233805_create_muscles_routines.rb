class CreateMusclesRoutines < ActiveRecord::Migration[6.1]
  def change
    create_table :muscles_routines do |t|
      t.belongs_to :muscle
      t.belongs_to :routine

      t.timestamps
    end
  end
end
