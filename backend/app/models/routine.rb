class Routine < ApplicationRecord
    has_many :muscles
    has_many :stretches, through: :muscles

    validates :name, presence: true, uniqueness: true
    validates :muscles, presence: true
end
