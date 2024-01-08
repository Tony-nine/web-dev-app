// App.js
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate  } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import DrugstoreCatalog from './pages/DrugstoreCatalog';
import MedicinesCatalog from './pages/MedicinesCatalog';

const App = () => {
  
  return (
    <Router>
      <Routes>
      <Route
          path="/"
          element={
            // Redirect to the Main Page when the root URL is visited
            <Navigate to="/main" replace />
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      
        <Route exact path='/main' element={<PrivateRoute/>}>
            <Route exact path='/main' element={<MainPage/>}/>
        </Route>
        <Route exact path='/drugstores' element={<PrivateRoute/>}>
            <Route exact path='/drugstores' element={<DrugstoreCatalog/>}/>
        </Route>
        <Route exact path='/drugstores' element={<PrivateRoute/>}>
            <Route path="/drugstores/:id" element={<MedicinesCatalog />} />
        </Route>
        {/*<Route path="/main" element={<MainPage />}/>*/}
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;

