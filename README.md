# React-Router

## ¿Qué es?

_Es un paquete de React que nos permite crear rutas en nuestra aplicación web para tener SPA(Single Page Application) en vez de MPA(Multiple Page Application)_

_Es decir páginas que no recarguen el navegador y solo cambie la URL y el contenido_

### Instalación npm

```bash
npm install react-router-dom
```

## React router en páginas web

1. Definimos un router:

```JavaScript
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
    errorElement: <ErrorPage />,
    children:[
      {
        path:'/contact',
        element: <Contact />
      },
      {
        path:'/about',
        element: <About />
        },
        {
          path:'/products',
          element: <Products />
        }
    ]
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
 );
```
