class Stretch < ApplicationRecord
    belongs_to :muscle

    validates :name, presence: true, uniqueness: true
    validates :instructions, presence: true
end
