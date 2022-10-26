import { Helmet } from "react-helmet";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Courses from "./components/Courses/Courses";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Main from "./Layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Courses></Courses>,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "register",
          element: <Register></Register>,
        },
        {
          path: "course/:id",
          element:<Register></Register>
        }
      ],
    },
  ]);
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Learning Media</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Learning Media" />
      </Helmet>

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
