![stretchwork](https://codebaby.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1654394938251%2FYYltiWVlS.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75)

Stretchwork is a Single Page Application (SPA) that allows the user to create custom stretch routines from a database of muscles and associated stretches. The frontend is built with HTML, CSS, and JavaScript, and it communicates with a backend API built with Ruby on Rails.

All interactions between the client and the server are handled asynchronously (AJAX) and use JSON as the communication format. The application uses Object Oriented JavaScript (classes) to encapsulate related data and behavior.

Stretchwork allows the user to:

* Create and name stretch routines
* Manage a log of routines
* Select multiple muscle groups per routine
* Automatically populate stretches associated with each muscle group

</br>
<b>Curious about this project?</b>  

:eyes: Watch the video [demo](https://vimeo.com/manage/videos/717173421)  
:books: Read about the process on my [blog](https://codebaby.hashnode.dev/my-first-javascript-project-stretchwork)  

## Install :sparkles:

### Prerequesites
Before you begin, ensure you have met the following requirements:

* You have installed `ruby 2.6.1` or higher.
* You have a Linux or WSL environment.
* You have Ruby on Rails installed.

### Clone the repository

```shell
git clone git@github.com:Lunarang/Stretchwork.git
cd stretchwork
cd backend
```

### Install api dependencies

Using [Bundler](https://github.com/bundler/bundler):

```shell
bundle install
```

### Initialize the database

```shell
rails db:create db:migrate db:seed
```

## Serve :sparkles:

```shell
rails s
```

Then navigate to the frontend directory to open 'index.html' to start using the app!

```shell
cd ..
cd frontend
```

## Architecture and Models :sparkles:

Stretchwork follows basic MVC architecture and RESTful controller conventions.
Models and associations are as follows:

* <b>Routine</b> `has_and_belongs_to_many` muscles, `has_many` stretches through: muscles
* <b>Muscle</b> `has_many` stretches, `has_and_belongs_to_many` routines
* <b>Stretch</b> `belongs_to` muscle

## Contributions :sparkles:

This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/lunarang/Stretchwork/CODE_OF_CONDUCT.md).
To contribute to Stretchwork, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## License :sparkles:

The repository is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct :sparkles:

Everyone interacting in this project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/lunarang/Stretchwork/CODE_OF_CONDUCT.md).
