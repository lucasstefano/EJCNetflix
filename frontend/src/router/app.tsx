import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InitialPage from '../pages/initial';
import Home from '../pages/home-design';
import HomeDev from '../pages/home-dev';
import EditPage from '../pages/editpage';
import EditForms from '../pages/EditInputs';


export default function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/Desenvolvimento" element={<HomeDev />} />
        <Route path="/Design" element={<Home />} />
        <Route path="/Edit" element={<EditPage />} />
        <Route path="/update/:id" element={<EditForms />} />
        
      </Routes>
    </Router>
  );
}