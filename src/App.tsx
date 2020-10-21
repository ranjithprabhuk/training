import React, { useState, useEffect, useRef,  useContext,  } from 'react';
import './App.css';
import { Counter, DisplayName, InputComponent, UserInfo } from './components';
import { Simple } from './components/Simple/Simple';

function App() {
  // const [userInfo, setUserInfo] = useState<{ username?: string, passowrd?: string, encryptionKey?: string }>({});

  // const handleChange = (value: string, key: string) => {
  //   const newUserInfo = {...userInfo, [key]: value };
  //   setUserInfo(newUserInfo);

  //   console.log('new user info', newUserInfo);
  // };

  const [isDisplayed, setIsDisplayed] = useState<boolean>(true);

  return (
    <div className="App">
      React Application Updated 
      {/* <div>
        <Counter />
      </div>
      <div>
        <button type="button" onClick={() => setIsDisplayed(x => !x)}>
          Toggle
        </button>
      </div>
      <div id="user-info">
        {isDisplayed && <UserInfo lastLogin={'some date'}  />}
        <div>
        <UserInfo lastLogin={'some date'}  />
        <UserInfo lastLogin={'some date'}  />
        <UserInfo lastLogin={'some date'}  />
        <UserInfo lastLogin={'some date'}  />
        </div>
      </div> */}
      <div>
        <Simple name='training' />
        <Simple name='Smart' age={21} />

      </div>

    </div>
  );
}

export default App;
