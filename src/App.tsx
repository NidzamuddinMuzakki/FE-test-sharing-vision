import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
 
  CreateProduct,
  
  EditProduct,
  
  HomeLayout,
  
  Article,
  PreviewArticle
  
} from "./pages";
const router = createBrowserRouter([
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Article />,
      },
      // {
      //   path: "/landing-v2",
      //   element: <LandingV2 />,
      // },
      
      {
        path: "/article/create-article",
        element: <CreateProduct />,
      },
      {
        path: "/article/:id",
        element: <EditProduct />,
      },
      
      {
        path: "/preview",
        element: <PreviewArticle />,
      },
      
     
    ],
    
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
