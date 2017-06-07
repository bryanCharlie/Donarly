# SpareChange

## folder structure

Implemented path aliases. For example a path like `require(‘../../images/avatar.png')` is now shortened to `require(images/avatar.png)` no matter the folder you are currently in. Aliases for all folders exist.

## lib/http.js

Contains function to get, set, and delete a user from Asyncstorage. Also has http functions like GET, PUT, POST, etc.

## config folder

If you look in the .babelrc, base.js from this folder is aliased as a global variable called config. Anything added here will act like a global configuration property. This is where we put things like API_ENDPOINTS. `"config": "./src/config/base"` `import config from 'config'`

## reducers/auth.js

Contains the redux login functions. To log a user in, call the redux action `loginUser(user)` with an object that has the username and password. For example `loginUser({ username: 'Mkay', password: 'password123' })`. To log a user out you call `logOutUser()`.

## how logging in and out works

We store a key-value pair in Asyncstorage. The value is a JSON object with a users username and access token. If you look in `base.js` the key is `charity_user`. When a user logs in we store the object, when they sign out we delete the object, when they return to the app after they already signed in, instead of signing in again we just fetch the object from Asyncstorage.

