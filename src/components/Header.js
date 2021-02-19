import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from "@material-ui/core/Button"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { Link as Scroll } from 'react-scroll';
import ScrollTotop from './ScrollTotop';
import Skills from './Skills';
import "./style.css";
import Content from "./Content.js";
import Contact from './Contact';



const Header = props => {

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root} id="header">
            <div className={classes.app}>
                <AppBar className={classes.appbar} elevation={0}>
                    <Toolbar className={classes.appbarWrapper}>

                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)} >
                            <ContactMailIcon />
                        </IconButton>
                        <Typography varian="h6" noWrap>
                            Sandra Smith Portfolio
                            </Typography>
                        <Drawer
                            className={classes.drawer}
                            variant="persistent"
                            anchor="left"
                            open={open}
                            classes={{
                                paper: classes.drawerPaper,
                            }}>
                            <div className={classes.drawerHeader}>
                                <IconButton style={{ fontSize: '3rem', color: 'white', fontShadow: '-1px 1px black' }} onClick={handleDrawerClose}>
                                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                                </IconButton>
                            </div>
                            <Divider />
                            <Contact />
                        </Drawer>
                        <main
                            className={clsx(classes.content, {
                                [classes.contentShift]: open,
                            })}>

                        </main>
                        <Typography className={classes.rootTwo}>
                            <Popup modal
                                trigger={<button className={classes.btnHeader}>
                                    <h3>About Me</h3></button>}>
                                {close => <Content close={close} />}
                            </Popup>

                            {<Button className={classes.btnHeader}>
                                <a style={{ textDecoration: "none", color: "limegreen", textShadow: "-1px 1px black" }} href="/resume.pdf" target="_blank" ><h3>RESUME</h3></a>
                            </Button>}

                            <IconButton>

                                <ScrollTotop />

                            </IconButton>
                        </Typography>
                    </Toolbar>

                </AppBar>
            </div>
            <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapseHeight={50}>
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Sandra Smith <br />
                        Web<span className={classes.colorText}>Developer</span>

                        <div className={classes.skillBlock}>
                            <Skills />
                        </div>


                    </h1>

                    <Scroll to="place-to-visit" smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.goDown} />
                        </IconButton>
                    </Scroll>

                </div>
            </Collapse>

        </div >
    )


};

export default Header;