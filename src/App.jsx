import { RouterProvider } from 'react-router';
import { routes } from './Routes/Routes/Routes';
// import './App.css';

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
