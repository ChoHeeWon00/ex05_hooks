import logo from './logo.svg';
import './App.css';
import ReducerCon from './containers/ReducerCon';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegPage from './pages/RegPage';
import IndexPage from './pages/IndexPage';
import ListPage from './pages/ListPage';
import TestPage from './pages/TestPage';
function App() {
  return (<>
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegPage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/context" element={<TestPage />} />
    </Routes>
  </>
  );
}





export default App;
