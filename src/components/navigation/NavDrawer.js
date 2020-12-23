import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;

class NavDrawer extends React.Component {
  render() {
    return (
      <Menu defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<PieChartOutlined />}>
          <Link to="/neighborhood">Neighborhood</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<PieChartOutlined />}>
          <Link to="/breweries">Breweries</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavDrawer;
