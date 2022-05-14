class CreateRoutines < ActiveRecord::Migration[6.1]
  def change
    create_table :routines do |t|
      t.string :name
      t.references :muscle, null: false, index: true, foreign_key: true

      t.timestamps
    end
  end
end
