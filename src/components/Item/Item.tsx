import { ButtonBase, createStyles, Grid, Paper, Theme, Typography, WithStyles, withStyles, CssBaseline, FormControl, InputLabel, NativeSelect, Input, FormHelperText, Button } from "@material-ui/core";
import React from "react";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ImageFrame from "../ImageFrame/ImageFrame";
import ProductChoiceBox from "../TextComponents/ProductChoicebox";
import KeyValuePair from "../../common/KeyValuePair";
import TextLayoutA from "../TextLayout/TextLayoutA";
import IProductDetails from "../../common/ui/models/ProductDetails";

const styles = (theme:Theme) => createStyles({
  root: {
  flexGrow: 1,
  backgroundColor: theme.palette.grey['100'],
  overflow: 'hidden',
  backgroundSize: 'cover',
  backgroundPosition: '0 400px',
  height: "100%",
  },
  grid: {
    width: 1200,
    marginTop: 100,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)',
      marginTop: 10
    },
  },
  image: {
    display: "block",
    width: "100%"
  },
  inline: {
    display: "inline",
    width: "90%",
    height:"100%"
  },
  contentContainer: {
    width:"100%",
    textAlign: "left",
  },
  block: {
    padding: theme.spacing.unit * 2,
  },
  formControl: {
    minWidth: 120,
  },
  sidelistContainer: {
    marginBottom: 20,
    height: 100,
    [theme.breakpoints.down('sm')]: {
      display: "none"
    }
  },
  buttonImage: {
    width: "100%",
    border: "solid",
    borderColor: "#9ecaed",
    boxShadow: "0 0 10px #9ecaed",
  },
  icon: {
    margin: theme.spacing.unit*2
  },
  arrowLeft: {
    display: "inline-block",
    height: '100%',
    width:"5%"
  },
  arrowRight: {
    display: "inline-block",
    height: "100%",
    width:"5%"
  }
})

interface ItemProps extends WithStyles<typeof styles>{
  productDetails: IProductDetails
}

class ItemView extends React.PureComponent<ItemProps> {

  public render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline/>
        <div>
          <Grid container={true} justify="space-around">
            <Grid spacing={24}  alignItems="flex-start" justify="center" container={true} className={classes.grid}>
              <Grid xs={12} md={7} item={true} container={true} spacing={8}>
                <ImageFrame images={[{url:"../../logo.svg"}, {url:"../../logo.svg"}]}/> 
              </Grid>
              <Grid xs={12} md={5} item={true}>
                <div className={classes.contentContainer}>
                  <TextLayoutA productDetails={this.props.productDetails}/>
                  <div className={classes.block}>
                    <ProductChoiceBox choiceName="color" choices={["blue", "green", "red"]} callback={this.onValueSelected} boxStyle={{width: 100}}/>
                    <ProductChoiceBox choiceName="color" choices={["blue", "green", "red"]} callback={this.onValueSelected} boxStyle={{width: 100}}/>
                  </div> 
                  <div className={classes.block}>
                    <Button size="large" variant="contained" color="secondary">
                      Claim Coupon
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    )
  }

  private onValueSelected = (pair: KeyValuePair<string,string>) => {
    console.log(pair);
  }
}

export default withStyles(styles)(ItemView);