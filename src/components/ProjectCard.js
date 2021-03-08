import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import drinkcover from '../static/assets/drinkcover.jpg';
import train from '../static/assets/train.jpg';
import web from '../static/assets/web.jpg';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      margin: '10px',
    },
    media: {
      height: 140,
    },
  });

export default function ProjectCard() {
    const classes = useStyles();
    return (

  
        <>
                <Card className={classes.root}> 
                    <CardActionArea>
                        <CardMedia 
                        className={classes.media}
                        image={drinkcover}
                        />
                        <CardContent >
                            <Typography gutterBottom variant="h5" component="h2">
                                Cosmic Cocktails
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Search a cocktail recipe by its name, or search for something new by entering a letter or ingredient.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <div>
                        <CardActions >
                            <Button target="_blank" href='https://cryptic-tundra-79116.herokuapp.com/'>Demo</Button>
                            <Button target="_blank" href='https://github.com/slsmi285/Project2_CosmicCocktails'>Code</Button>
                        </CardActions>
                    </div>
                </Card>
                
                <Card className={classes.root}> 
                    <CardActionArea>
                        <CardMedia 
                        className={classes.media}
                        image={web}
                        />
                        <CardContent >
                            <Typography gutterBottom variant="h5" component="h2">
                                C-19 Tracker
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Using React and MongoDB, the user can check on Covid-19 Status and protocols of any State.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <div>
                        <CardActions >
                            <Button target="_blank" href='https://murmuring-hollows-32917.herokuapp.com/'>Demo</Button>
                            <Button target="_blank" href='www.github.com/slsmi285/c19-tracker'>Code</Button>
                        </CardActions>
                    </div>
                </Card>
                <Card className={classes.root}> 
                    <CardActionArea>
                        <CardMedia 
                        className={classes.media}
                        image={train}
                        />
                        <CardContent >
                            <Typography gutterBottom variant="h5" component="h2">
                                Train Station Scheduler
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            This app is about relational database, enter a fictionary train schedule, the app will calculate arrival/departure.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <div>
                        <CardActions >
                            <Button target="_blank" href='https://slsmi285.github.io/Train-Station-Scheduler/'>Demo</Button>
                            <Button target="_blank" href='https://github.com/slsmi285/Train-Station-Scheduler'>Code</Button>
                        </CardActions>
                    </div>
                </Card>
        </>
    );
}

