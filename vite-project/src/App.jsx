import './App.css'
import { useRoutes } from 'react-router-dom';
import HomePage from './pages/homePage.jsx';
//import ProductPage from './ProductPage'; 
//import ViewBlogsPag from './pages';

function App() {
  let element = useRoutes([
    {
      path: '/HomePage',
      element: <HomePage />
    }
    // {
    //   path: '/product_page',
    //   element: <product_page />
    // },
    // {
    //   path: '/shopping_cart',
    //   element: <ViewBlogsPage />
    // },
  ])

  return element;
}

export default App
