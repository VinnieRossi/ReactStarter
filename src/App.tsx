import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/Landing/LandingPage';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
