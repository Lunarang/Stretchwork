# Stretchwork

Stretchwork is a Single Page Application (SPA) that allows the user to create custom stretch routines from a database of muscles and associated stretches. The frontend is built with HTML, CSS, and JavaScript, and it communicates with a backend API built with Ruby on Rails.

All interactions between the client and the server are handled asynchronously (AJAX) and use JSON as the communication format. The application uses Object Oriented JavaScript (classes) to encapsulate related data and behavior.

## Install

### Clone the repository

```shell
git clone git@github.com:Lunarang/Stretchwork.git
cd stretchwork
cd backend
```

### Check your Ruby version

```shell
ruby -v
```

The ouput should start with something like `ruby 2.6.1`

If not, install the right ruby version using [rbenv](https://github.com/rbenv/rbenv) (it could take a while):

```shell
rbenv install 2.6.1
```

### Install dependencies

Using [Bundler](https://github.com/bundler/bundler) and [Yarn](https://github.com/yarnpkg/yarn):

```shell
bundle && yarn
```

### Initialize the database

```shell
rails db:create db:migrate db:seed
```

## Serve

```shell
rails s
```

Then navigate to the frontend directory to open 'index.html' to start using the app!

```shell
cd ..
cd frontend
```

## Architecture and Models

Stretchwork follows basic MVC architecture and RESTful controller conventions.
Models and associations are as follows:

* Routine - has_and_belongs_to_many :muscles
    has_many :stretches, through: :muscles
* Muscle - has_many :stretches
    has_and_belongs_to_many :routines
* Stretch - belongs_to :muscle
