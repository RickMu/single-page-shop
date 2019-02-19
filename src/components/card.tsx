import React from "react";
import { createStyles, Theme, WithStyles, Card, CardMedia, CardContent, Typography, withStyles } from "@material-ui/core";



const styles = (theme: Theme) => createStyles ({
  card: {
    maxWidth: 345,
    margin: theme.spacing.unit * 3,
    alignItems: 'center',
    justifyItems: 'center'
  },
  media: {
    height: 300,
    paddingTop: "50%",
  },
  inline: {
    display: 'inline-block',
    marginLeft: theme.spacing.unit * 4,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  }
})

interface MediaCardProps extends WithStyles<typeof styles> {
  imageSrc?: string
  name: string
  price: string
}

class MediaCard extends React.PureComponent<MediaCardProps> {
  public render() {
    const { classes, imageSrc } = this.props;
    return (
      <Card className={classes.card}>
         {
          imageSrc && 
          <CardMedia 
          className = {classes.media}
          image = {require("../static/products/876661122392077_1.jpg")}
          />
         }
        <CardContent>
          <Typography variant="h5" className={classes.inline}>
            {this.props.name}
          </Typography>
          <Typography variant="h5" className={classes.inline}>
            {this.props.price} 
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(MediaCard);