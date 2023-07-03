import './App.scss';
import HomePage from './views/HomePage';
import SiteNav from './layout/SiteNav';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <SiteNav />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
