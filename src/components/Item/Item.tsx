import { ButtonBase,
  createStyles,
  Grid, Paper,
  Theme, Typography,
  WithStyles, withStyles, CssBaseline, FormControl, InputLabel,
  NativeSelect, Input, FormHelperText, Button } from "@material-ui/core";
import React from "react";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ImageFrame from "../ImageFrame/ImageFrame";
import ProductChoiceBox from "../ChoiceComponents/ProductChoiceSelection";
import KeyValuePair from "../../common/KeyValuePair";
import TextLayoutA from "../TextLayout/TextLayoutA";
import IProductDetails from "../../common/ui/models/ProductDetails";
import { constructLinkedListArray } from "../../common/utils/linkedlist";
import Image from "../../common/ui/models/Image";
import IProductChoice from "../../common/ui/models/ProductChoices";
import CountAdjustBox from "../ChoiceComponents/ProductCountSelection";
import IDictionary from "../../common/Dictionary";

const styles = (theme: Theme) => createStyles({
  grid: {
    width: 1200,
    marginTop: 100,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)",
      marginTop: 10
    }
  },
  inline: {
    display: "inline",
    margin: theme.spacing.unit * 1
  },
  contentBlock: {
    width: "100%",
    textAlign: "left",
    paddingLeft: 100
  },
  block: {
    padding: theme.spacing.unit * 2
  },
  purchaseButton: {
    width: "100%",
    padding: theme.spacing.unit * 2
  }
});

interface ItemProps extends WithStyles<typeof styles> {
  productDetails: IProductDetails;
  productChoices: IProductChoice[];
  images: Image[];
}

interface ItemState {
  attributes: IDictionary<string>
}

class ItemView extends React.PureComponent<ItemProps> {

  constructor(props: ItemProps) {
    super(props);

    const partialState = props.productChoices.reduce((prevValue, currentValue: IProductChoice) => {
      return {
        ...prevValue,
        [currentValue.name]: ""
      }
    }, {})

    this.state = {
      ...partialState,
      "itemCount": "0"
    }
  }

  public render() {
    const { classes, images, productChoices, productDetails } = this.props;

    return (
      <React.Fragment>
        <CssBaseline/>
        <div>
          <Grid container={true} justify="space-around">
            <Grid spacing={40}  alignItems="flex-start" justify="space-evenly" container={true} className={classes.grid}>
              <Grid xs={12} md={6} item={true} container={true} spacing={8}>
                <ImageFrame linkedImages={this.getImages(images)}/>
              </Grid>
              <Grid xs={12} md={6} item={true}>
                <div className={classes.contentBlock}>
                  <TextLayoutA productDetails={productDetails}/>
                  <div className={classes.block}>
                    {this.renderProductChoices(productChoices, classes)}
                    <CountAdjustBox name="itemCount" label="items" currentValue={this.state["itemCount"]} callback={this.onValueSelected}/>
                  </div>
                  <div className={classes.block}>
                    <Button variant="outlined" color="secondary" className={classes.purchaseButton}>
                      {this.state["itemCount"] === "0" ? "Add To Cart" : `Total Items: ${this.state["itemCount"]}` }
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }

  private getImages = (images: Image[]) => {
    return constructLinkedListArray(images);
  }

  private renderProductChoices(productChoices: IProductChoice[], classes: any) {
    return productChoices.map((value: IProductChoice, index: number) => {

      return (<div className={classes.inline}>
        <ProductChoiceBox productChoice={value}
          callback={this.onValueSelected}/>
      </div>);
    });
  }

  private onValueSelected = (pair: KeyValuePair<string, string>) => {
    this.setState({
      [pair.key]: pair.value
    })
  }
}

export default withStyles(styles)(ItemView);