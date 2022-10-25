import {Helmet} from "react-helmet";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Main from "./Layouts/Main";

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      children:[
        {
          path:"/",
          
        }
      ]
    }
  ])
  return (
    <div className="App">
       <Helmet>
                <meta charSet="utf-8" />
                <title>Learning Media</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Learning Media" />
            </Helmet>
            
            <RouterProvider router={router }></RouterProvider>
    </div>
  );
}

export default App;
