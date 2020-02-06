import React from 'react';
import GlobalStyle from './Global'
import Header from './Layouts/Header'
import {Button, CancelButton} from './elements'


function App() {
  return (
    <div>

      <GlobalStyle/>
      <Button size="small">HELL O</Button>
      <Button type="cancel">HELL O</Button>
      <CancelButton size="small">F* Off</CancelButton>
      <Button>HELL O</Button>
      <CancelButton>F* Off</CancelButton>
    </div>
  );
}



export default App;
 