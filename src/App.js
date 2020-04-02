import React from 'react';
import Main from './components/layouts/main';
import Login from './components/layouts/login';
import LoginHeader from './components/layouts/login-header';
import LoginBody from './components/layouts/login-body';
import LoginFooter from './components/layouts/login-footer';
import Title from './components/atoms/title';
import InputGroup from './components/atoms/input-group';
import Label from './components/atoms/label';
import Input from './components/atoms/input';
import Button from './components/atoms/button';

function App() {
  return (
    <Main>
      <Login>
        <LoginHeader>
          <Title>Please, log in !</Title>
        </LoginHeader>
        <LoginBody>
          <InputGroup>
            <Label>Username</Label>
            <Input placeholder='Type your username' />
          </InputGroup>
          <InputGroup>
            <Label>Password</Label>
            <Input placeholder='Type your password' type='password' />
          </InputGroup>
        </LoginBody>
        <LoginFooter>
          <Button>Login</Button>
        </LoginFooter>
      </Login>
    </Main>
  );
}

export default App;
