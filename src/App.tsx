import React from 'react';
import Button, { ButtonType, Buttonsize } from './components/Button/Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button autoFocus >hello</Button>
        <Button onClick={(e) => { e.preventDefault(); alert(123) }} >hello</Button>
        <Button disabled>disabled button</Button>
        <Button btnType={ButtonType.Primary} size={Buttonsize.large}>Primary  large</Button>
        <Button btnType={ButtonType.Danger} size={Buttonsize.Small}>Danger  Small</Button>
        <Button btnType={ButtonType.Link} href="www.baidu.com">百度</Button>
        <Button disabled btnType={ButtonType.Link} href="www.baidu.com">百度</Button>

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
