import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import RegisterReactBootstrap from './components/RegisterReactBootstrap';
import Main from './layout/Main';
import LoginBootstrap from './components/LoginBootstrap';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path: '/register',
        element: <RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path: '/login',
        element: <LoginBootstrap></LoginBootstrap>
      }
    ]
  }
])
function App() {
  return (
    <div>     
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
