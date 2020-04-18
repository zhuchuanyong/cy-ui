import React, { useState } from "react";
import Button from "./components/Button/Button";
// import Transition from "./components/Transition/Transition";
import MenuItem from "./components/Menu/MenuItem";
import Menu from "./components/Menu/Menu";
import SubMenu from "./components/Menu/SubMenu";
import Icon from "./components/Icon";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="coffee" theme="danger" size="10x"></Icon>
        <Menu mode="vertical" defaultOpenSubMenus={["2"]} defaultIndex="0">
          <MenuItem>中国</MenuItem>
          <MenuItem disabled>山东</MenuItem>
          <SubMenu title="山东">
            <MenuItem>济南</MenuItem>
            <MenuItem>青岛</MenuItem>
          </SubMenu>
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
        <Button
          onClick={() => {
            setShow(!show);
          }}
          btnType="primary"
          size="lg"
        >
          Primary large
        </Button>
        <Button btnType="danger" size="sm">
          Danger Small
        </Button>
        <Button btnType="link" href="www.baidu.com">
          百度
        </Button>
        <Button disabled btnType="link" href="www.baidu.com">
          百度
        </Button>
        {/* <Transition in={show} timeout={300} animation="zoom-in-left"> */}
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
        {/* </Transition> */}
      </header>
    </div>
  );
}

export default App;
