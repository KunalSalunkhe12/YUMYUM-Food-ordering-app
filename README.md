# YumYum - Food Ordering App 🍕🍟

YumYum is a ReactJS project that serves as a food ordering app. It utilizes Swiggy's public APIs to fetch data and incorporates React Router DOM for seamless navigation. The project extensively leverages hooks and prop drilling for efficient data management.

## Demo

**Live** : https://yumyum-good-food-made-easy.netlify.app/

## Features 🧑‍💻

- Infinite Scrolling | Pagination
- Custom Hooks
- Shimmer UI made from scratch
- Search Feature
- Cart Feature using useContext + useReducer
- Lazy Loading | Code Splitting

## Tech Stack ⚙️

- React JS
- Parcel
- React Router Dom
- Tailwind CSS

## Todo 📝

- Make it mobile responsive
- Implement debouncing for the search feature

## Note

I am using simple node.js web server that fetches data from a third-party (Swiggy) API and exposes it to a client (YumYum) app.This is done to avoid the CORS error while accessing the Swiggy API.

**Server Respository** : https://github.com/KunalSalunkhe12/YUMYUM-server
