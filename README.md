## ReactJS Starter Kit

ReactJS Starter Kit provides you easy way of getting into work with ReactJS
instead of struggling with setting up directory structures,
It also comes up some basic usable ReactJS packages like
`redux`, `react-redux`, `axios`, `loadable` etc.

Contribute to provide better application structural design
to make app more scalable and efficient for developers.

### Directory Structure

This app has been bootstrapped using **create-react-app**
So, all of working envirnoment lies in `src` folder

And here is the structure of the app how it has been designed:

#### routes.js

- routes.js file is the main file where you will define your application routes


#### services/*

- In this directory you can define all of your service(*ReactJS statefull components which will handle the basic process before you go to the application render layer*) and in the services `render()` you can either write your resulting JSX or you can separate it

#### views/*

- This directory contains all the `layouts`, `stateless components` and View(JSX) of your application.

#### src/redux/*

- All of your redux base work should be handled from this directory like `Reducers` etc.
- **store.js** file `exports` basic settup of redux `store` and you can use this in all of your application




### The best practice 

is to put all of your React Lifecycles, API Based Handling and other data compiletion in the `statefull components` which should be presented in `services/*` directory and use these componest with `loadable` in `routes.js` file where all of your routes are listed and use the `View Components`and pass the compiled data to the `View Components` which should be `stateless` and presented in `views/*` directory. While all of reusable `components` which will be `stateless` as well should be placed in `views/_stateless/*` directory. And all reusable function like helper functions should be written in `utils` directory.



**Cheers :)**
