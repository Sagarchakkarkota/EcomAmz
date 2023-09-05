import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';

const Layout=()=>{
  return <div>
    <Header/>
    <Outlet/>
    <Footer/>
  </div>
}

function App() {
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>} ></Route>
    </Route>
  )
)

  return (
    <div className='font-bodyFont bg-gray-100'  >
<RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
