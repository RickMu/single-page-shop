import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core";
import React from "react";
import ItemView from "./Item/Item";
import Topbar from "./Appbar/Topbar";

const styles = (theme: Theme) => createStyles({
  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)"
    }
  }
});

interface MainviewProps extends WithStyles<typeof styles> {

}

class Mainview extends React.PureComponent<MainviewProps> {

  public render() {
    const { classes } = this.props;
    return (
      <div>
        <Topbar/>
        <ItemView
        productDetails={{
// tslint:disable-next-line: max-line-length
          productDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          productHeadingTitle: "I'm a Product",
          productHeadingDescription: "Lorem Ipsum is simply dummy text",
          productPrice: "$ 17.4 USD"
        }}
        productChoices={[
        {
          name: "color",
          choices: ["blue", "green", "red"]
        },
        {
          name: "size",
          choices: ["small", "medium", "large"]
        }]}
        images={[{url: "1"}, {url: "2"}, {url: "3"}]}/>
      </div>
    );
  }
}

export default withStyles(styles)(Mainview);
