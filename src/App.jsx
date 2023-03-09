import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

//styles
import { ThemeProvider } from "styled-components";
import { GlobalStyled, Theme } from "./styles/globals";

//pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Video from "./pages/video/Video";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/video",
    element: <Video />,
  },
]);

export default function App() {

  

  return (
    <>
      <GlobalStyled />
      <ThemeProvider theme={Theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
