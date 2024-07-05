import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StartPage from "./pages/StartPage"
import RegistrationForm from "./pages/login/RegistrationForm";

const App = () => {

  return (
    <BrowserRouter basename={'/aviton/'}>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
