# Donarly

## how to overcome the red-screen of death
#### aka "The development server returned response error code:500"

in your console: npm run start:reset

## folder structure

Implemented path aliases. For example a path like `require(‘../../images/avatar.png')` is now shortened to `require(images/avatar.png)` no matter the folder you are currently in. Aliases for all folders exist.

## lib/http.js

Contains function to get, set, and delete a user from Asyncstorage. Also has http functions like GET, PUT, POST, etc.

## config folder

If you look in the .babelrc, base.js from this folder is aliased as a global variable called config. Anything added here will act like a global configuration property. This is where we put things like API_ENDPOINTS. `"config": "./src/config/base"` `import config from 'config'`

## reducers/auth.js

Contains the redux login functions. To log a user in, call the redux action `loginUser(user)` with an object that has the username and password. For example `loginUser({ username: 'Mkay', password: 'password123' })`. To log a user out you call `logOutUser()`.

## how logging in and out works

We store a key-value pair in Asyncstorage. The value is a JSON object with a user's username and access token. If you look in `base.js` the key is `charity_user`. When a user logs in, we store the object; when they sign out, we delete the object; when they return to the app after they already signed in--instead of signing in again--we just fetch the object from Asyncstorage.

## Miscellaneous Guidelines
* We will be using semicolons
* Every Tab is equal to 4 spaces
* ESLint will be our linter for “eslint.rc” file
* Comment if code is specific IOS and android
* Comment blocks of code that you write with your name
* Github branch naming convention will be done by feature
* Within components we don’t write “export default const …” only “export”
* Development dependencies should be install “npm install --save-dev”
* Document what was done for each task


## Useful Links
1. [Cool React Native  Modules](http://www.awesome-react-native.com/)
2. [Our Flask API](https://flask-json-api.herokuapp.com/)
3. [readme.md cheat sheet](https://github.com/tchapi/markdown-cheatsheet/blob/master/README.md)
4. [React-Native-Elements (for our icons)](https://github.com/KevM/React-Native-Elements)
5. [All Icons FA, Foundation, etc..](https://github.com/oblador/react-native-vector-icons)
6. [TabNavigator Docs](https://reactnavigation.org/docs/navigators/tab)
7. [TabNavigator Example code](https://github.com/react-community/react-navigation/blob/master/docs/api/navigators/TabNavigator.md)
