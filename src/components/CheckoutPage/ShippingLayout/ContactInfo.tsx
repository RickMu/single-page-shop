import React from "react";
import { WithStyles, createStyles, Theme, Typography, TextField, withStyles } from "@material-ui/core";
import { IInputCallback } from "../../ItemPage/ChoiceComponents/models";

const styles = (theme: Theme) => createStyles({
  contactTextField: {
    width: "100%"
  },
  floatLeft: {
    float: "left"
  },
  floatRight: {
    float: "right"
  }
})

interface IContactInfoProps extends WithStyles<typeof styles>, IInputCallback {
  name: string;
}

class ContactInfo extends React.PureComponent<IContactInfoProps> {

  public render() {
    const {classes} = this.props;

    return (
      <React.Fragment>
        <Typography variant="h5" className={classes.floatLeft}>Contact Information</Typography>
        <TextField
          id="outlined-dense"
          label={this.props.name}
          variant="outlined"
          className={classes.contactTextField}
          onChange = {this.handleCallback}
        />
      </React.Fragment>
    )
  }

  private handleCallback = (event: any) => {
    this.props.callback({
      key: event.target.name,
      value: event.target.value,
    });
  }
}

export default withStyles(styles)(ContactInfo);