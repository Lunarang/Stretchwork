class Routine < ApplicationRecord
    has_and_belongs_to_many :muscles
    has_many :stretches, through: :muscles

    validates :name, presence: true, uniqueness: true
end
