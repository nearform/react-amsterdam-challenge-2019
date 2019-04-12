# google-maps-pointer-detector

Sample project made for the challenge in React Amsterdam 2019 of Nearform.

The objective of the challenge was to do a simple project using a set of hooks they have created to manipulate browser API's called `react-browser-hooks`.

You can read more about React Browser Hooks in this [blog post](https://www.nearform.com/blog/say-hello-to-react-browser-hooks/).

## Project summary

> Get the user location, show a map with a marker where the user is located right now and then just by moving the mouse the user can navigate the surroundings of the map.

**This project is intended to be used in Desktop, mobile won't work!**

![Apr-12-2019 12-06-18](https://user-images.githubusercontent.com/3399429/56029784-75996c80-5d1b-11e9-97a2-36fe663fada6.gif)

The goal of the project was to combine two of the hooks from the library:

- `useGeolocation`: that will request the location position for the user and give the latitude and longitude of the user.
- `useMousePosition`: gives the position `x` and `y` of the user's pointer.

Then I combine those two with the Goggle maps API which allows me to render a map with the marker of the user and also move it via props. For the integration of Google maps and React, I used `react-google-maps`.

Other hooks being used:

- useState: to trackt the center of the screen
- useEffect: to avoid re-rendering the whole App when the user doesn't move the pointer.

## Live Demo

https://emasuriano.github.io/react-amsterdam-challenge-2019

## How to run it locally?

- `yarn`
- Add an `.env` file with the google API credential with the name of `REACT_APP_GOOGLE_MAPS_API`
- `yarn start`
