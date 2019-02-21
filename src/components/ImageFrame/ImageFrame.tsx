import React from "react";
import { Grid, ButtonBase, Theme, createStyles, withStyles, WithStyles } from "@material-ui/core";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import Image from "../../common/ui/models/Image";

interface IFrameState {
  selectedImage: number;
}

interface IFrameProps extends WithStyles<typeof styles> {
  images: Image[];
}

class ImageFrame extends React.Component<IFrameProps, IFrameState> {

  constructor(props: IFrameProps) {
    super(props);
    this.state = {
      selectedImage: 1
    }
  }

  public render(): React.ReactNode {
    const {classes, images} = this.props;
    const displayImage = images[this.state.selectedImage];
    const sideImages = images.filter((value: Image, index: number) => index != this.state.selectedImage);

    return (
      <React.Fragment>
        <Grid item={true} container={true} xs={12} md={2} direction={"column"}>
          {this.renderSideImages(sideImages)}
        </Grid>
        <Grid item={true} xs={12} md={10} container={true} justify="space-around" alignItems="center">
          <ButtonBase className={classes.arrowLeft}>
            <ChevronLeft/>
          </ButtonBase>
            <img src={require("../../logo.svg")} className={classes.displayImage}/>
          <ButtonBase className={classes.arrowLeft}>
            <ChevronRight/>
          </ButtonBase>
        </Grid>
      </React.Fragment>
    )
  }

  private renderSideImages(images: Image[]) {
    return images.map((value:Image, key:number) => {

      const { classes } = this.props;
      const image = require("../../logo.svg");

      return (
        <Grid item={true} className={classes.sideImageGrid} key={key}>
          <ButtonBase className={classes.sideImageButton}>
            <img className={classes.sideImage} src={image} />
          </ButtonBase>
        </Grid>
      )
    })
  }
}


const styles = (theme: Theme) => createStyles({
  sideImageGrid: {
    marginBottom: 20,
    height: 100,
    [theme.breakpoints.down('sm')]: {
      display: "none"
    }
  },
  sideImageButton: {
    width: "100%",
    border: "solid",
    borderColor: "#9ecaed",
    boxShadow: "0 0 10px #9ecaed",
  },
  sideImage: {
    display: "block",
    width: "100%"
  },
  arrowLeft: {
    display: "inline-block",
    width:"5%"
  },
  arrowRight: {
    display: "inline-block",
    width:"5%"
  },
  displayImage: {
    display: "inline",
    height: "100%",
    width:"90%"
  }
});

export default withStyles(styles)(ImageFrame);