import React from 'react';
import './App.css';
import UserForm from './components/UserForm';

const App = () => {
  return (
    <div>
      <div className="col-lg-8 mx-auto text-center mt-5">
        <h1><b>Let's generate your Resume!</b></h1>
        <p className="lead">Please provide accurate and clear description wherever necessary.</p>
        <hr />
      </div>
      <UserForm />
    </div>
  );
};

export default App;