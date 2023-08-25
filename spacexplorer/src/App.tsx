import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { RootLayout } from './components';
import { Home } from './pages';

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>,
  ])
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
