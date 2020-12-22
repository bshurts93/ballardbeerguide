import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

// Views
import Test from "./views/test";
import Home from "./views/home";

// App Navigation
import NavDrawer from "./components/navigation/NavDrawer";

// Ant Design Imports
import { Layout, Menu, Breadcrumb } from "antd";

import "antd/dist/antd.css";
const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <Layout style={{ minHeight: "100vh" }}>
            <Sider
              collapsible
              collapsed={collapsed}
              onCollapse={this.onCollapse}
            >
              <NavDrawer />
            </Sider>
            <Content>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/test">
                  <Test />
                </Route>
              </Switch>
            </Content>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
