# Models & Associations

## Muscle: has_many :stretches
    [x] name: string
    Validations
        [x] must have unique name

## Stretch: belongs_to :muscle
    [x] name: string
    [x] instructions: text
    In migration include...
        [x] t.belongs_to :muscle, index: true, foreign_key: true
    Validations
        [x] must have unique name
        [x] must have instructions

## Routine: has_many :muscles, has_many :stretches, through: :muscles
    NOTE: this has_many_through association is only created a nested shortcut to each muscle's stretch collection. 
    It is NOT treating muscles as a join table. Muscles also do not belong_to routines because I don't feel they need to be aware of what routines they exist within.

    [x] name: string
    In migration include...
        [x] t.references :muscle, null: false, foreign_key: true
    Validations
        [x] must have unique name
        [x] must have at least 1 muscle (selection of at least 1 stretch will be validated within the new routine form)