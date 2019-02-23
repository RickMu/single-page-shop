import React from "react";
import { Grid, ButtonBase, Theme, createStyles, withStyles, WithStyles } from "@material-ui/core";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import Image from "../../common/ui/models/Image";
import { constructLinkedList, constructLinkedListArray } from "../../common/utils/linkedlist";
import LinkedNode from "../../common/LinkedNode";

interface IFrameState {
  selectedImage: LinkedNode<Image>;
}

interface IFrameProps extends WithStyles<typeof styles> {
  linkedImages: Array<LinkedNode<Image>>;
}

class ImageFrame extends React.Component<IFrameProps, IFrameState> {

  constructor(props: IFrameProps) {
    super(props);
    this.state = {
      selectedImage: props.linkedImages[0]
    };
  }

  public render(): React.ReactNode {
    const {classes, linkedImages} = this.props;

    return (
      <React.Fragment>
        <Grid item={true} container={true} xs={12} md={2} direction={"column"}>
          {this.renderSideImages(linkedImages)}
        </Grid>
        <Grid item={true} xs={12} md={10} container={true} justify="space-around" alignItems="center">
          <ButtonBase className={classes.arrowLeft} onClick={ () => this.handleArrowClick(false)}>
            <ChevronLeft/>
          </ButtonBase>
            <img src={require(`../../images/clothes${this.state.selectedImage.item.url}.jpg`)}
            className={classes.displayImage}/>
          <ButtonBase className={classes.arrowLeft} onClick={ () => this.handleArrowClick(true) }>
            <ChevronRight/>
          </ButtonBase>
        </Grid>
      </React.Fragment>
    );
  }

  private handleArrowClick(right: boolean) {
    let next;

    if (right) {
      next = this.state.selectedImage.next;
    } else {
      next = this.state.selectedImage.prev;
    }
    if (next) {
      this.setState({selectedImage: next});
    }
  }

  private handleOnClick = (image: LinkedNode<Image>) => {
    this.setState({selectedImage: image});
  }

  private renderSideImages(images: Array<LinkedNode<Image>>) {
    return images.map((value: LinkedNode<Image>, key: number) => {

      const { classes } = this.props;

      return (
        <Grid item={true} className={classes.sideImageGrid} key={key}>
          <ButtonBase className={classes.sideImageButton} onClick={() => this.handleOnClick(value)}>
            <img className={classes.sideImage} src={require(`../../images/clothes${value.item.url}.jpg`)} />
          </ButtonBase>
        </Grid>
      );
    });
  }
}

const styles = (theme: Theme) => createStyles({
  sideImageGrid: {
    marginBottom: 20,
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  sideImageButton: {
    width: "100%",
    border: "solid",
    borderColor: "#9ecaed",
    boxShadow: "0 0 10px #9ecaed"
  },
  sideImage: {
    display: "block",
    width: "100%"
  },
  arrowLeft: {
    display: "inline-block",
    width: "5%"
  },
  arrowRight: {
    display: "inline-block",
    width: "5%"
  },
  displayImage: {
    display: "inline",
    height: "100%",
    width: "90%"
  }
});

export default withStyles(styles)(ImageFrame);