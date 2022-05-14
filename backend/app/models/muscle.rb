class Muscle < ApplicationRecord
    has_many :stretches
    has_and_belongs_to_many :routines

    validates :name, presence: true, uniqueness: true
end
