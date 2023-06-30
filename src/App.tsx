import React from "react";
import "./App.css";
import SignUp from "./Component/Auth/SignUp";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Component/ErrorPage";
import Login from "./Component/Auth/Login";
import { SnackbarProvider } from "notistack";
import HomeList from "./Component/Hompeage/HomeList";
import ChatPage from "./Component/ChatPage/ChatPage";
import ChatMsg from "./Component/ChatMsg/ChatMsg";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/chats/1",
      element: <ChatMsg/>,
      errorElement: <ErrorPage />,
    },{
      path:'/app',
      element: <HomeList/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "login",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "signup",
      element: <SignUp />,
      errorElement: <ErrorPage />,
    },

  ]);
  return (
    <SnackbarProvider maxSnack={3}>
      <RouterProvider router={router} />
    </SnackbarProvider>
  );
}

export default App;
