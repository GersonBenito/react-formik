import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FormularioFormik from '../components/formularios/FormularioFormik';
import FormularioYup from '../components/formularios/FormularioYup';
import HomePage from '../container/HomePage';
import NotFound from '../container/NotFound';


function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/formik' component={FormularioFormik} />
        <Route exact path='/yup' component={FormularioYup} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
