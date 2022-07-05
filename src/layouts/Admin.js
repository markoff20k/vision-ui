/*!

=========================================================
* Vision UI PRO Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-dashboard-pro-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  ChakraProvider,
  Portal,
  useDisclosure,
  ColorModeScript,
} from "@chakra-ui/react";
import "assets/css/vud-dashboard-styles.css";
import Configurator from "components/Configurator/Configurator";
import FixedPlugin from "components/FixedPlugin/FixedPlugin";
import Footer from "components/Footer/Footer.js";
// Custom components
import MainPanel from "components/Layout/MainPanel";
import PanelContainer from "components/Layout/PanelContainer";
import PanelContent from "components/Layout/PanelContent";
// Layout components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import { SidebarContext } from "contexts/SidebarContext";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css"; // ES6
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "routes.js";
// Custom Chakra theme
import theme from "theme/themeAdmin.js";
export default function Dashboard(props) {
  const { ...rest } = props;
  // states and functions
  const [sidebarVariant, setSidebarVariant] = useState("transparent");
  const [fixed, setFixed] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(275);
  // ref for main panel div
  const mainPanel = React.createRef();
  // functions for changing the states from components
  const getRoute = () => {
    return window.location.pathname !== "/admin/full-screen-maps";
  };
  const getActiveRoute = (routes) => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].items);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (routes[i].category) {
        let categoryActiveRoute = getActiveRoute(routes[i].items);
        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveNavbar = getActiveNavbar(routes[i].items);
        if (collapseActiveNavbar !== activeNavbar) {
          return collapseActiveNavbar;
        }
      } else if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbar(routes[i].items);
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].secondaryNavbar;
        }
      }
    }
    return activeNavbar;
  };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      if (prop.collapse) {
        return getRoutes(prop.items);
      }
      if (prop.category) {
        return getRoutes(prop.items);
      } else {
        return null;
      }
    });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  document.documentElement.dir = "ltr";
  document.documentElement.layout = "admin";
  // Chakra Color Mode
  return (
    <>
      <ChakraProvider theme={theme} resetCss={false} overflowX='hidden'>
        <SidebarContext.Provider
          value={{
            sidebarWidth,
            setSidebarWidth,
            toggleSidebar,
            setToggleSidebar,
          }}>
          <Sidebar
            routes={routes}
            logoText={"VISION UI PRO"}
            display='flex'
            sidebarVariant={sidebarVariant}
            {...rest}
          />
          <MainPanel
            ref={mainPanel}
            w={{
              base: "100%",
              xl: `calc(100% - ${sidebarWidth}px)`,
            }}>
            <Portal>
              <AdminNavbar
                onOpen={onOpen}
                logoText={"VISION UI PRO"}
                brandText={getActiveRoute(routes)}
                secondary={getActiveNavbar(routes)}
                fixed={fixed}
                {...rest}
              />
            </Portal>

            {getRoute() ? (
              <PanelContent>
                <PanelContainer>
                  <Switch>
                    {getRoutes(routes)}
                    <Redirect from='/admin' to='/admin/dashboard/default' />
                  </Switch>
                </PanelContainer>
              </PanelContent>
            ) : null}
            <Footer />
            <Portal>
              <FixedPlugin fixed={fixed} onOpen={onOpen} />
            </Portal>
            <Configurator
              secondary={getActiveNavbar(routes)}
              isOpen={isOpen}
              onClose={onClose}
              isChecked={fixed}
              onSwitch={(value) => {
                setFixed(value);
              }}
              onOpaque={() => setSidebarVariant("opaque")}
              onTransparent={() => setSidebarVariant("transparent")}
            />
          </MainPanel>
        </SidebarContext.Provider>
      </ChakraProvider>
    </>
  );
}
