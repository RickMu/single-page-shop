import React from "react";
import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core";
import classes from "*.module.scss";

const styles = (theme: Theme) => createStyles({
 itemContainer: {
   width: "100%",
 }
});

interface ICartItemViewProps extends WithStyles<typeof styles>{
  
}

class CartItemView extends React.PureComponent<ICartItemViewProps> {
  public render() {
    const { classes } = this.props;
    //TODO - Add CartItem View. Now payment is more urgent
    return (
      <div className={classes.itemContainer}>
        
      </div>
    )
  }
}

export default withStyles(styles)(CartItemView);