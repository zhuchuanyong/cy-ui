import React from "react";
import Button, { ButtonType, Buttonsize } from "./components/Button/Button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/MenuItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={0}>
          <MenuItem>中国</MenuItem>
          <MenuItem>山东</MenuItem>
          <MenuItem>滕州</MenuItem>
        </Menu>
        <Button autoFocus>hello</Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            alert(123);
          }}
        >
          hello
        </Button>
        <Button disabled>disabled button</Button>
        <Button btnType={ButtonType.Primary} size={Buttonsize.large}>
          Primary large
        </Button>
        <Button btnType={ButtonType.Danger} size={Buttonsize.Small}>
          Danger Small
        </Button>
        <Button btnType={ButtonType.Link} href="www.baidu.com">
          百度
        </Button>
        <Button disabled btnType={ButtonType.Link} href="www.baidu.com">
          百度
        </Button>

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
