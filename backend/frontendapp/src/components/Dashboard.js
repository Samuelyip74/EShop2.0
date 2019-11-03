import React, { Component } from "react";
import ProductCard from "./ProductCard";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    card: {
        // TODO: Calc width divide by 2
        minWidth: 180,
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
  }));

const list = [
    {
      id: '1',
      name: 'Breakfast',
      image: 'https://image.shutterstock.com/z/stock-photo-american-breakfast-with-sunny-side-up-eggs-bacon-toast-pancakes-coffee-and-juice-wood-530324440.jpg',
    },
    {
      id: '2',
      name: 'Lunch',
      image: 'https://www.barcelonahacks.com/wp-content/uploads/2017/11/breakfast-in-barcelona.jpg',
    },
  ]; 

export default function Dashboard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{marginLeft:5,marginRight:5}}>
      <Grid 
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        spacing={1}>
        {list.map(item => (
          <Grid item xs={6} sm={3} key={item.id}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={item.image}
                    title={item.name}
                    />
                    <CardContent style={{display:'flex',}}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                    </Typography>
                    {/* <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography> */}
                    </CardContent>
                </CardActionArea>
                {/* <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

