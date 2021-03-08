import React from "react";
import "./style.css";
// import ContactForm from './ContactForm';
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
  ctnForm: {
    // minHeight: '60vh',
    marginLeft: '30px',
    backgroundColor: 'brown',

  },
  infoBox: {
    backgroundColor: '#00000000',
    marginLeft: '30px',
    display: 'center',
  },

}));

export default function ContactCard() {
  const classes = useStyles();
 
  return (

    <Grid item={true} xs={12} className={classes.root} container
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/coffee.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      overflow: 'hidden',
    }}
    >
      <Box className={classes.infoBox}>
        <Card component="form" className={classes.cntForm} style={{ backgroundColor: 'black', border: '4px double white' }}>
          <h3 style={{ color: "limegreen", display: "center", marginLeft: "10px" }} variant="outlined" size="large" fullWidth="true">CONTACT INFO</h3> 
          <h5 style={{ color: "white" }}>Email: sls2code@gmail.com </h5>
          <h5 style={{ color: "white" }}>Phone: (865) 696-1106</h5>
      {/* <ContactForm /> */}
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
              href={`https://github.com/slsmi285?tab=stars`} target='_blank'>
              <GitHubIcon />
            </Button>
          </CardActions>
      </Box>
    </Grid>
  );
};