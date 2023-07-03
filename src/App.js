import './App.scss';
import HomePage from './views/HomePage';
import SiteNav from './layout/SiteNav';
import { Route, Routes } from 'react-router-dom';
import Error from './views/Error';

function App() {
  return (
    <div className="App">
      <SiteNav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
