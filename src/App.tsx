import React from 'react';
import { TsForm } from './TsForm';

const App = () => {
  return (
     <div style={{ textAlign: "center" }}>
    <TsForm onSubmit={({fullName, email}) => {
      console.log(fullName, email)
    }} />
      </div>
  );
};

export default App;