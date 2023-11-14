import React, { useState } from 'react';
import './App.css';
// import FormulaireTrajet from './Trajet/Formulaire/FormulaireTrajet';
// import TrajetPage from './page/TrajetPage';
import LoginForm from './Trajet/Formulaire/LoginForm';
import { BrowserRouter as Router } from 'react-router-dom';




function App() {
  const [submittedData, setSubmittedData] = useState(null);


  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <>
      <Router>
        <div>
          {/* {submittedData ? (
          <TrajetPage submittedData={submittedData} />
        ) : (
          <FormulaireTrajet onFormSubmit={handleFormSubmit} />
        )} */}
          <LoginForm />


        </div>
      </Router>
    </>
  )
}

export default App
