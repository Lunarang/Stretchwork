class Muscle < ApplicationRecord
    has_many :stretches

    validates :name, presence: true, uniqueness: true
end
