import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "styles/App.css";

// Views
import Home from "views/Home";
import Neighborhood from "views/Neighborhood";
import Breweries from "views/Breweries";
import About from "views/About";

// App Navigation
import NavDrawer from "components/navigation/NavDrawer";

// Ant Design Imports
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";
const { Header, Content, Sider } = Layout;

class App extends React.Component {
  state = {
    collapsed: true,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { collapsed } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <Layout style={{ minHeight: "100vh" }}>
            <Sider collapsed={collapsed} collapsedWidth="0">
              <NavDrawer />
            </Sider>
            <Layout className="site-layout">
              <Header className="app-header" style={{ padding: 0 }}>
                {React.createElement(
                  this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "app-header__toggle",
                    onClick: this.toggle,
                  }
                )}
              </Header>

              <Content>
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/neighborhood">
                    <Neighborhood />
                  </Route>
                  <Route path="/breweries">
                    <Breweries />
                  </Route>
                  {/* <Route path="/:id/:breweryName" children={<About />}></Route> */}
                  <Route path="/:id/:breweryName" component={About} />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
