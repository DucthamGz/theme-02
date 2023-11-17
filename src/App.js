import React from'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
//componentes
import NotFound from './components/NotFound';
import FormData from './pages/FormData';
import BuinessPage from './pages/Buiness-page';
import Confirm from './pages/Confirm';
import UploadImages from './pages/UploadImages';
import FinalComponent from './components/Final';
import Waitting from './components/Waitting';
import NextStep from './pages/Next_step';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/contact-account' element={<FormData />} />
          <Route path='/contact-account/second-step' element={<NextStep />} />
          <Route path='/contact-account/confirm' element={<Confirm />} />
          <Route path='/contact-account/waitting' element={<Waitting/>} />
          {/* <Route path='/contact-account/upload-image' element={<UploadImages />} /> */}
          <Route path='/contact-account/final' element={<FinalComponent />} />




          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;