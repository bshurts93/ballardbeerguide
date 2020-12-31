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
import { MenuOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";
const { Header, Content } = Layout;

class App extends React.Component {
  state = {
    collapsed: true,
    drawerOpen: false,
  };

  toggleDrawer = () => {
    console.log("toggle from header");

    this.setState({
      drawerOpen: !this.state.drawerOpen,
    });
    console.log(this.state.drawerOpen);
  };

  test = () => {
    this.setState({ drawerOpen: true });
    console.log(this.state.drawerOpen);
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavDrawer
            collapseDrawer={this.toggleDrawer}
            collapsed={this.state.drawerOpen}
          />
          <Layout className="site-layout">
            <Header style={{ padding: 0 }}>
              <MenuOutlined
                onClick={this.toggleDrawer}
                style={{ paddingLeft: 20, color: "#fff" }}
              />
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
                <Route path="/:id/:breweryName" component={About} />
              </Switch>
            </Content>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
