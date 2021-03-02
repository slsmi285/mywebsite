import React from "react";
import "./style.css";
import ContactForm from './ContactForm';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Button, Box, Grid } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';




const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(3),
      width: '100%',
      backgroundColor: 'black',
    },
  },

}));

export default function ContactCard() {
  const classes = useStyles();
 
  return (

    <Grid xs={12} className={classes.root} container>
      <Box>
        <Card component="form" className={classes.cntForm}>
          <h3 style={{ color: "limegreen", display: "center" }} variant="outlined" size="large" fullWidth="true">CONTACT ME</h3> 
      <ContactForm />
        </Card>
          <CardActions>
            <Button 
              style={{ display: 'flex' }}
              fullWidth="true"
              size="medium"
              color="primary"
              href={`https://www.linkedin.com/in/sandrasmithdev1548`} target='_blank'>
              <LinkedInIcon />
            </Button>
            <Button 
              style={{ display: 'flex' }}
              fullWidth="true"
              size="medium"
              color="primary"
              href={`https://github.com/slsmi285`} target='_blank'>
              <GitHubIcon />
            </Button>
          </CardActions>
      </Box>
    </Grid>
  );
};