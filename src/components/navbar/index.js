import React from "react";
import PropTypes from "prop-types";
import Menu, { SubMenu, Item as MenuItem, Divider } from "rc-menu";
import "rc-menu/assets/index.css";
import "./../../css/navbar.css";
import { Link } from "react-router-dom";
import BankingMenu from "./BankingMenu";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

function handleClick(info) {
  console.log(`clicked ${info.key}`);
  console.log(info);
}
const collapseNode = () => ({ height: 0 });
const expandNode = (node) => ({ height: node.scrollHeight });

const inlineMotion = {
  motionName: "rc-menu-collapse",
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
      title={<span className="submenu-title-wrapper">Banking</span>}
    >
      <MenuItem key="4-1-1">
        <BankingMenu />
      </MenuItem>
    </SubMenu>
    <Divider />
    <SubMenu
      key="4-2"
      title={<span className="submenu-title-wrapper">SSC</span>}
    >
      <MenuItem key="4-2-1">
      <Link to="/topic-test" className="anchortagStyleRemove">
            <div>
              <img
                src={require("./../../assests/nav/topicTest.png")}
                alt="topic"
              />
              <span className="">Topic Test</span>
            </div>
          </Link>
      </MenuItem>
      <MenuItem key="4-2-2">
      <Link to="/topic-test" className="anchortagStyleRemove">
            <div>
              <img
                src={require("./../../assests/nav/topicTest.png")}
                alt="topic"
              />
              <span className="">Topic Test</span>
            </div>
          </Link>
      </MenuItem>
      <MenuItem key="4-2-3">
      <Link to="/topic-test" className="anchortagStyleRemove">
            <div>
              <img
                src={require("./../../assests/nav/topicTest.png")}
                alt="topic"
              />
              <span className="">Topic Test</span>
            </div>
          </Link>
      </MenuItem>
      <MenuItem key="4-2-4">
      <Link to="/topic-test" className="anchortagStyleRemove">
            <div>
              <img
                src={require("./../../assests/nav/topicTest.png")}
                alt="topic"
              />
              <span className="">Topic Test</span>
            </div>
          </Link>
      </MenuItem>
      <MenuItem key="4-2-5">
      <Link to="/topic-test" className="anchortagStyleRemove">
            <div>
              <img
                src={require("./../../assests/nav/topicTest.png")}
                alt="topic"
              />
              <span className="">Topic Test</span>
            </div>
          </Link>
      </MenuItem>
      <MenuItem key="4-2-6">
      <Link to="/topic-test" className="anchortagStyleRemove">
            <div>
              <img
                src={require("./../../assests/nav/topicTest.png")}
                alt="topic"
              />
              <span className="">Topic Test</span>
            </div>
          </Link>
      </MenuItem>
    </SubMenu>
    <Divider />
    <SubMenu
      key="4-3"
      title={<span className="submenu-title-wrapper">Railway</span>}
    >
      <MenuItem key="4-3-1">
      <Link to="/topic-test" className="anchortagStyleRemove">
            <div>
              <img
                src={require("./../../assests/nav/topicTest.png")}
                alt="topic"
              />
              <span className="">Topic Test</span>
            </div>
          </Link>
      </MenuItem>
      <MenuItem key="4-3-2">
      <Link to="/topic-test" className="anchortagStyleRemove">
            <div>
              <img
                src={require("./../../assests/nav/topicTest.png")}
                alt="topic"
              />
              <span className="">Topic Test</span>
            </div>
          </Link>
      </MenuItem>
      <MenuItem key="4-3-3">
      <Link to="/topic-test" className="anchortagStyleRemove">
            <div>
              <img
                src={require("./../../assests/nav/topicTest.png")}
                alt="topic"
              />
              <span className="">Topic Test</span>
            </div>
          </Link>
      </MenuItem>
      <MenuItem key="4-3-4">
      <Link to="/topic-test" className="anchortagStyleRemove">
            <div>
              <img
                src={require("./../../assests/nav/topicTest.png")}
                alt="topic"
              />
              <span className="">Topic Test</span>
            </div>
          </Link>
      </MenuItem>
      <MenuItem key="4-3-5">
      <Link to="/topic-test" className="anchortagStyleRemove">
            <div>
              <img
                src={require("./../../assests/nav/topicTest.png")}
                alt="topic"
              />
              <span className="">Topic Test</span>
            </div>
          </Link>
      </MenuItem>
    </SubMenu>
    <Divider />
    <SubMenu
      key="4-4"
      title={<span className="submenu-title-wrapper">Insurance</span>}
    >
      <MenuItem key="4-4-1">
      <Link to="/topic-test" className="anchortagStyleRemove">
            <div>
              <img
                src={require("./../../assests/nav/topicTest.png")}
                alt="topic"
              />
              <span className="">Topic Test</span>
            </div>
          </Link>
      </MenuItem>
      <MenuItem key="4-4-2">
      <Link to="/topic-test" className="anchortagStyleRemove">
            <div>
              <img
                src={require("./../../assests/nav/topicTest.png")}
                alt="topic"
              />
              <span className="">Topic Test</span>
            </div>
          </Link>
      </MenuItem>
      <MenuItem key="4-4-3"><Link to="/topic-test" className="anchortagStyleRemove">
            <div>
              <img
                src={require("./../../assests/nav/topicTest.png")}
                alt="topic"
              />
              <span className="">Topic Test</span>
            </div>
          </Link></MenuItem>
      <MenuItem key="4-4-4">
      <Link to="/topic-test" className="anchortagStyleRemove">
            <div>
              <img
                src={require("./../../assests/nav/topicTest.png")}
                alt="topic"
              />
              <span className="">Topic Test</span>
            </div>
          </Link>
      </MenuItem>
      <MenuItem key="4-4-5">
      <Link to="/topic-test" className="anchortagStyleRemove">
            <div>
              <img
                src={require("./../../assests/nav/topicTest.png")}
                alt="topic"
              />
              <span className="">Topic Test</span>
            </div>
          </Link>
      </MenuItem>
    </SubMenu>
  </SubMenu>
);

function onOpenChange(value) {
  console.log("onOpenChange", value);
}

const children1 = [
  <MenuItem key="1">
    <img src={require("./../../assests/logoGuidely.png")} alt="logo" />
  </MenuItem>,
  nestSubMenu,
  <MenuItem key="2">
    {" "}
    <input
      type="text"
      placeholder="Search for Test, Courses, Materials"
      className="navSearch hidedisplaymq"
    />
  </MenuItem>,
  <MenuItem key="3">
    <div className="downloadAppButton hidedisplaymq">Download Our App</div>
  </MenuItem>,
  <MenuItem key="5">
    <div className="hidedisplaymq">Live Test</div>

    <div className="hidedisplaymq"></div>
  </MenuItem>,
  <MenuItem key="6">
    <div className="hidedisplaymq">Video Courses</div>
  </MenuItem>,
  <MenuItem key="7">
    <div className="hidedisplaymq">Quiz</div>
  </MenuItem>,
  <SubMenu
    title={<span className="submenu-title-wrapper hidedisplaymq">Resources</span>}
    key="8"
  >
    <MenuItem key="8-1">Ebooks</MenuItem>
    <MenuItem key="8-2">Publications</MenuItem>
    <MenuItem key="8-3">Free PDFs</MenuItem>
  </SubMenu>,
  <MenuItem key="9">
    <div className="hidedisplaymq">Pricing</div>
  </MenuItem>,
  <MenuItem key="10">
    <div className="downloadAppButton hidedisplaymq">Login</div>
  </MenuItem>,
  <MenuItem key="11">
    <div className="downloadAppButton bgcolorTry hidedisplaymq">
      Try for Free
    </div>
  </MenuItem>,
];

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
          selectedKeys={["3"]}
          mode={this.props.mode}
          openAnimation={this.props.openAnimation}
          defaultOpenKeys={this.props.defaultOpenKeys}
          // overflowedIndicator={overflowedIndicator}
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
      <TemporaryDrawer />
    </div>
  );
}

export default Demo;




const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <div class="containerHamberger" onClick={toggleDrawer(anchor, true)}>
  <div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>
</div>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            <div>
            <div className="DrawerContent">Live Test</div>
            <div className="DrawerContent">Video Courses</div>
            <div className="DrawerContent">Quiz</div>
            <div className="DrawerContent">Resources</div>
            <div className="DrawerContent">Pricing</div>
            <div className="downloadAppButton" style={{width:"max-content",marginLeft:"20px"}}>Login</div>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
