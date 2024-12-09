// import React from 'react'
// import ReactDOM from 'react-dom/client'

// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './index.css'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <h1>Это наша стартовая страница</h1>
//   },
//   {
//     path: '/new',
//     element: <h1>Это наша страница с чем-то новеньким</h1>
//   }
// ])

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <ul>
//       <li>
//         <a href="/">Старт</a>
//       </li>
//       <li>
//         <a href="/new">Хочу на страницу с чем-то новеньким</a>
//       </li>
//     </ul>
//     <hr />
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )

// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// fetch("api/rent_services/")

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if ('serviceWorker' in navigator) {
  registerSW();
}