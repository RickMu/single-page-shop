import React from "react";
import { Typography, createStyles, Theme, withStyles, Button, WithStyles } from "@material-ui/core";
import IProductDetails from "../../common/ui/models/ProductDetails";

const styles = (theme: Theme) => createStyles({
  contentContainer: {
    width: "100%",
    textAlign: "left"
  },
  block: {
    padding: theme.spacing.unit * 2
  }
});


interface ITextLayoutAProps extends WithStyles<typeof styles> {
  productDetails: IProductDetails;
}

class TextLayoutA extends React.PureComponent<ITextLayoutAProps> {

  public render() {
    const { classes, productDetails } = this.props;

    return (
      <React.Fragment>
        <div className={classes.block}>
          <Typography variant="h3" component="h2">
            {productDetails.productHeadingTitle}
          </Typography>
          <Typography component="p" color={"textPrimary"}>
            {productDetails.productHeadingDescription}
          </Typography>
        </div>
        <div className={classes.block}>
          <Typography variant="h6" component="h2">
            {productDetails.productPrice}
          </Typography>
        </div>
        <div className={classes.block}>
          <Typography component="p">
            {productDetails.productDescription}
          </Typography>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(TextLayoutA);