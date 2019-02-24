import React from "react";
import { List, ListItem, ListItemText, createStyles, Theme, WithStyles, withStyles, Grid, Divider } from "@material-ui/core";
import ArrowForward from "@material-ui/icons/ArrowForward";
import CartIcon from "./CartIcon";
import CartItemView from "./CartItemView";


const style = (theme: Theme) => createStyles({
  list: {
    width: 400
  },
  headerBlock: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingBottom: 20,
  },
  inline: {
    display: "inline",
  },
  cartIcon: {
    width: "100%",
    display: "flex",
    justifyContent: "center", 
  },
  thickDivider: {
    display: "block",
    width: "100%",
    borderBottom: "10px solid grey",
  },
  thinDivider: {
    display: "block",
    width: "100%",
    borderBottom: "2px solid grey",
  },
  cartItemsContainer: {
    minHeight: 300
  },

});

interface ICartItemsProp extends WithStyles<typeof style>{

};

class CartItems extends React.PureComponent<ICartItemsProp> {

  public render() {

    const {classes} = this.props;

    return (
      <Grid container style={{width: 480, padding: 48}} spacing={24}>
        <Grid item xs={12} md={12}> 
          <div className={classes.headerBlock}>
            <div>
              <ArrowForward style={{fontSize: 40}}/>
            </div>
            <div className={classes.cartIcon}>
              <CartIcon/>
            </div>  
          </div>
          <div className={classes.thickDivider}/>
        </Grid>
        <Grid item xs={12} md={12}>
          <div className={classes.cartItemsContainer}>
            <CartItemView/>
          </div>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(style)(CartItems);