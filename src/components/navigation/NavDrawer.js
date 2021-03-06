import { Drawer, Menu } from "antd";
import { PieChartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function NavDrawer(props) {
  return (
    <Drawer
      title="Basic Drawer"
      placement="left"
      closable
      onClose={props.collapseDrawer}
      visible={props.collapsed}
      bodyStyle={{ padding: 0 }}
    >
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
    </Drawer>
  );
}

export default NavDrawer;
