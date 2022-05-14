class AddNameToStretches < ActiveRecord::Migration[6.1]
  def change
    add_column :stretches, :name, :string
  end
end
