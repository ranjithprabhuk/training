import React, { useState } from 'react';
import './App.css';
import { DisplayName, InputComponent } from './components';

function App() {
  const [userInfo, setUserInfo] = useState<{ username?: string, passowrd?: string, encryptionKey?: string }>({});

  const handleChange = (value: string, key: string) => {
    const newUserInfo = {...userInfo, [key]: value };
    setUserInfo(newUserInfo);

    console.log('new user info', newUserInfo);
  };

  return (
    <div className="App">
      <DisplayName name='Smart ERP' />
      <DisplayName name='Ranjth' />
      <DisplayName withBorder name='App Knit' />
      <DisplayName name='Flow' />
      <DisplayName withBorder name='Training' />

      <br />
      <br />
      <br />
      <div>
        <InputComponent type='text' onValueChange={(newValue) => handleChange(newValue, 'username')} />
        <InputComponent type='password' onValueChange={(newValue) => handleChange(newValue, 'password')} />
        <InputComponent type='text' value='some value' onValueChange={(newValue) => handleChange(newValue, 'encryptionKey')} />
      </div>
    </div>
  );
}

export default App;
