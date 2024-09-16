import React, { useState } from "react";
import {
  unstable_HistoryRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import About from "../pages/About/About";
import HomePage from "../pages/HomePage/HomePage";
import Hotels from "../pages/Hotels/Hotels";
import ButtonStyle from "../../Styles/ButtonStyle/ButtonStyle";
import NotFound from "../pages/NotFound/NotFound"
import Logo from "../../images/logo.svg";
import styles from "./styles.module.css";
import { history } from "../../sagas/store";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Router history={history}>
      <AppBar position="static">
        <Toolbar className={styles.headerBackground}>
          <Typography style={{ flexGrow: 1 }}>
            <img src={Logo} alt="Logo" className={styles.Logo} />
          </Typography>

          {isMobile ? (
            <div>
              <IconButton
                sx={ButtonStyle}
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose} component={Link} to="/">
                  Home
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/about">
                  About
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/hotels">
                  Hotels
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <div>
              <Button
                variant="contained"
                sx={{ ...ButtonStyle, mr: { xs: 1, sm: 3 } }}
                component={Link}
                to="/"
              >
                Home
              </Button>
              <Button
                variant="contained"
                sx={{ ...ButtonStyle, mr: { xs: 1, sm: 3 } }}
                component={Link}
                to="/about"
              >
                About
              </Button>
              <Button
                variant="contained"
                sx={ButtonStyle}
                component={Link}
                to="/hotels"
              >
                Hotels
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <Container className={styles.Main}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default Header;
