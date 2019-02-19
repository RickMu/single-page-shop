import { createStyles, Grid, Theme, Typography, WithStyles, withStyles } from "@material-ui/core";
import React from "react";
import MediaCard from "./card";
import ItemView from "./Item/Item";

const styles = (theme: Theme) => createStyles({
  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)"
    },
  },
});

interface MainviewProps extends WithStyles<typeof styles> {

}

class Mainview extends React.PureComponent<MainviewProps> {

  public render() {
    const { classes } = this.props;
    return (
      <div>
        <ItemView/>
      </div>
    );
  }
}

export default withStyles(styles)(Mainview);
