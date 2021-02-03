import React from 'react';
import { makeStyles } from "@material-ui/core/styles"

import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";

import {
  Drawer, List, ListItem,
  ListItemIcon, ListItemText,
  Container, Typography,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from '@material-ui/icons/Info';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import FeedbackIcon from '@material-ui/icons/Feedback';
import Header from './Component/Header';

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none',
    color: "white"
  }
}))

function App() {
  const classes = useStyles();
  return (
    
    <Router>
      <Header/>
      <div style={{ display: 'flex', 
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' 
                  }}>
        <Drawer
          style={{ width: '200px', height: '50px'}}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper }}
        >
          
          <List style={{backgroundColor: "#750048", 
                        paddingTop: "65px",
                        height: "650px"
                        }}>
            <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon style={{ color: "white"}}/>
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
            </Link>
            <Link to="/about" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon style={{ color: "white"}} />
                </ListItemIcon>
                <ListItemText primary={"About"} />
              </ListItem>
            </Link>
            <Link to="/contact" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <ContactSupportIcon style={{ color: "white"}} />
                </ListItemIcon>
                <ListItemText primary={"Contact Us"} />
              </ListItem>
            </Link>
            <Link to="/feedback" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <FeedbackIcon style={{ color: "white"}}/>
                </ListItemIcon>
                <ListItemText primary={"Feedback"} />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        
        <Switch>
          <Route exact path="/">
            <Container>
              <Typography variant="h3" gutterBottom>
                Home
              </Typography>
              <Typography variant="body1" gutterBottom>
                Welcome! Find your product here!
              </Typography>
            </Container>
          </Route>
          <Route exact path="/about">
            <Container>
              <Typography variant="h3" gutterBottom>
                About
              </Typography>
              <Typography variant="body1" gutterBottom>
                lorem ipsum
              </Typography>
            </Container>
          </Route>
          <Route exact path="/contact">
            <Container>
              <Typography variant="h3" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body1" gutterBottom>
                Email: informasi.pusat123@gmail.com
              </Typography>
            </Container>
          </Route>
          <Route exact path="/feedback">
            <Container>
              <Typography variant="h3" gutterBottom>
                Feedback
              </Typography>
              <Typography variant="body1" gutterBottom>
                I like this product
              </Typography>
              
            </Container>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
