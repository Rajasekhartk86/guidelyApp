import React from 'react';
import PropTypes from 'prop-types';
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';
import 'rc-menu/assets/index.css';
import "./../../css/navbar.css";
import { Link } from 'react-router-dom';
import BankingMenu from './BankingMenu';
// import '../assets/index.less';

function handleClick(info) {
  console.log(`clicked ${info.key}`);
  console.log(info);
}

const collapseNode = () => ({ height: 0 });
const expandNode = node => ({ height: node.scrollHeight });

const inlineMotion = {
  motionName: 'rc-menu-collapse',
  onAppearStart: collapseNode,
  onAppearActive: expandNode,
  onEnterStart: collapseNode,
  onEnterActive: expandNode,
  onLeaveStart: expandNode,
  onLeaveActive: collapseNode,
};

const nestSubMenu = (
  <SubMenu
    title={<span className="submenu-title-wrapper">Test Series</span>}
    key="4"
    popupOffset={[10, 15]}
  >
    <SubMenu
      key="4-1"
      title={<span className="submenu-title-wrapper">sub menu 1</span>}
    >
     <MenuItem key="4-1-1"><BankingMenu /></MenuItem>
      </SubMenu>
    <Divider />
    <SubMenu
      key="4-2"
      title={<span className="submenu-title-wrapper">SSC</span>}
    >
      <MenuItem key="4-2-1">inn</MenuItem>
      <MenuItem key="4-2-2">inn</MenuItem>
      <MenuItem key="4-2-3">inn</MenuItem>
      <MenuItem key="4-2-4">inn</MenuItem>
      <MenuItem key="4-2-5">inn</MenuItem>
      <MenuItem key="4-2-6">inn</MenuItem>
    </SubMenu>
    <Divider />
    <SubMenu
      key="4-3"
      title={<span className="submenu-title-wrapper">SSC</span>}
    >
      <MenuItem key="4-3-1">jhjre</MenuItem>
    </SubMenu>
    <Divider />
    <SubMenu
      key="4-4"
      title={<span className="submenu-title-wrapper">SSC</span>}
    >
      <MenuItem key="4-4-1">jhjre</MenuItem>
    </SubMenu>
  </SubMenu>
);

function onOpenChange(value) {
  console.log('onOpenChange', value);
}

const children1 = [
  <MenuItem key="1"><img src={require("./../../assests/logoGuidely.png")} alt="logo" /></MenuItem>,
  nestSubMenu,
  <MenuItem key="2"> <input
              type="text"
              placeholder="Search for Test, Courses, Materials"
              className="navSearch hidedisplaymq"
            /></MenuItem>,
  <MenuItem key="3">
    <div className="downloadAppButton hidedisplaymq">
Download Our App
         </div>
  </MenuItem>,
  <MenuItem key="5">
    <div className="hidedisplaymq">Live Test</div>
         
          <div className="hidedisplaymq"></div>
  </MenuItem>,
  <MenuItem key="6"><div className="hidedisplaymq">Video Courses</div></MenuItem>,
  <MenuItem key="7"><div className="hidedisplaymq">Quiz</div></MenuItem>,
  <SubMenu
    title={<span className="submenu-title-wrapper">Resources</span>}
    key="8"
  >
    <MenuItem key="8-1">0-1</MenuItem>
    <MenuItem key="8-2">0-2</MenuItem>
  </SubMenu>,
  <MenuItem key="9"><div className="hidedisplaymq">Pricing</div></MenuItem>,
  <MenuItem key="10"><div className="downloadAppButton hidedisplaymq">Login</div></MenuItem>,
  <MenuItem key="11"><div className="downloadAppButton bgcolorTry hidedisplaymq">
  Try for Free
</div></MenuItem>,
];

const customizeIndicator = <span>Add More Items</span>;

class CommonMenu extends React.Component {
  state = {
    children: children1,
    overflowedIndicator: undefined,
  };

  render() {
    const { triggerSubMenuAction } = this.props;
    const { children, overflowedIndicator } = this.state;
    return (
      <div>
        <Menu
          onClick={handleClick}
          triggerSubMenuAction={triggerSubMenuAction}
          onOpenChange={onOpenChange}
          selectedKeys={['3']}
          mode={this.props.mode}
          openAnimation={this.props.openAnimation}
          defaultOpenKeys={this.props.defaultOpenKeys}
          overflowedIndicator={overflowedIndicator}
          motion={this.props.motion}
        >
          {children}
        </Menu>
      </div>
    );
  }
}

CommonMenu.propTypes = {
  mode: PropTypes.string,
  openAnimation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  motion: PropTypes.object,
  triggerSubMenuAction: PropTypes.string,
  defaultOpenKeys: PropTypes.arrayOf(PropTypes.string),
  updateChildrenAndOverflowedIndicator: PropTypes.bool,
};

function Demo() {
  const horizontalMenu = (
    <CommonMenu
      mode="horizontal"
      // use openTransition for antd
      openAnimation="slide-up"
    />
  );
  return (
    <div>
      <div>
        <div>{horizontalMenu}</div>
      </div>
    </div>
  );
}

export default Demo;