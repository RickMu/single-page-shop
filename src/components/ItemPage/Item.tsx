import { createStyles,
  Grid, Theme, WithStyles, withStyles, CssBaseline, Button } from "@material-ui/core";
import React from "react";
import ImageFrame from "./ImageFrame/ImageFrame";
import ProductChoiceBox from "./ChoiceComponents/ProductChoiceSelection";
import KeyValuePair from "../../common/extensions/KeyValuePair";
import TextLayoutA from "./TextLayout/TextLayoutA";
import IProductDetails from "../../common/ui/models/ProductDetails";
import { constructLinkedListArray } from "../../common/extensions/utils/linkedlist";
import Image from "../../common/ui/models/Image";
import CountAdjustBox from "./ChoiceComponents/ProductCountSelection";
import IDictionary from "../../common/extensions/Dictionary";
import IProduct from "../../common/ui/models/Product";
import { IProductChoices, ChoiceType, IProductCountChoices, IProductTypeChoices } from "../../common/ui/models/ProductChoice";

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
    paddingLeft: 100,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0
    }
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
  product: IProduct;
}


class ItemView extends React.PureComponent<ItemProps> {

  constructor(props: ItemProps) {
    super(props);

    this.state = props.product.productChoices.reduce((prevValue, currentValue: IProductChoices) => {
      return {
        ...prevValue,
        [currentValue.name]: currentValue.defaultValue
      }
    }, {})

  }

  public render() {
    const { classes } = this.props;
    const { images, productChoices, productDetails } = this.props.product;

    return (
      <React.Fragment>
        <CssBaseline/>
        <div>
          <Grid container={true} justify="space-around">
            <Grid spacing={24}  alignItems="flex-start" justify="space-evenly" container={true} className={classes.grid}>
              <Grid xs={12} md={6} item={true} container={true} spacing={8}>
                <ImageFrame linkedImages={this.getImages(images)}/>
              </Grid>
              <Grid xs={12} md={6} item={true}>
                <div className={classes.contentBlock}>
                  <TextLayoutA productDetails={productDetails}/>
                  <div className={classes.block}>
                    {this.renderProductChoices(productChoices, classes)}
                  </div>
                  <div className={classes.block}>
                    <Button variant="outlined" color="secondary" className={classes.purchaseButton} onClick={()=> console.log(this.state)}>
                      Add To Cart
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

  private renderProductChoices(productChoices: IProductChoices[], classes: any) {
    return productChoices.map((value: IProductChoices) => {

      switch(value.type) {

        case ChoiceType.Category:
          const categoryChoice = (value as IProductTypeChoices);
          return (
            <ProductChoiceBox productChoice={categoryChoice} currentValue={this.state[categoryChoice.name]} callback={this.onValueSelected}/>
          );
        
        case ChoiceType.Count: 
          const countChoice = (value as IProductCountChoices);

          return (
            <CountAdjustBox name={countChoice.name} label={value.description} range={countChoice.range}
              currentValue={this.state[countChoice.name]} callback={this.onValueSelected}/>
          );
        
        default: 
          return <div/>;
      }
    });
  }

  private onValueSelected = (pair: KeyValuePair<string, string>) => {
    this.setState({
      [pair.key]: pair.value
    })
  }
}

export default withStyles(styles)(ItemView);