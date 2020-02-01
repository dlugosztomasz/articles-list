To run the app:
1. Download the repo
2. to install the project: npm install command
3. to run tests: npm run test
5. to run the server: node server.js
6. to run project: npm run dev
7. open localhost:3000

About the project:
During configuring the project I:
- configred webpack for development purposes to support js, jsx, less. I added source map as well. Project is updated with hot module.
- installed and configured babel as well.
- configured project to support absolute paths.
- installed and configured jest for tests
- installed basic dependencies like classNames, moment, react, redux, prop-types
- configured eslint

I created structure for the project:
- redux state is handled in state folder
- component folder contains few simple components (like checkbox, arrows, message) which can be used in the whole app
- api folder contains requests to server
- config folder contains configuration for the project and some mappers
- utils folder contains utils for date and requests
- modules folder contains main modules for the app, there are two modules in this case

App module is some kind of the container for the rest modules. There could be things like headers, footers and routing logic as well.
In this case I render only ArticleView module which renders few smaller containers: DataSources, Sourting and Articles.
Sourting and DataView containers has been connected to redux state. Thanks to that Articles container has information about sourting type
and data sources. State for this could be handled in ArticlesView as well but keeping in mind that someone would add next module like ArticlesView
in the future and use state from ArtliclesView, I decided to connect redux.
Components were written with hooks.

For Sorting and DataSources containers, checkbox components, tests were written. 

App was tested in newest version of Chrome and FF.

App was designed for different types of devices and was tested for IPhone X, IPhone6, GalaxyS5 and IPad.

What can be done better?
- url for server is stored in config file in '/src/config/index.js', it should be stored in env
- webpack could be configured for prod environment
- global css file could be created (now all less files are imported in files where we want to use it)
