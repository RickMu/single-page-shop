import React from "react";
import { createStyles, Theme, WithStyles, InputLabel, TextField, withStyles, ButtonBase } from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import { IChoice } from "./models";

const styles = (theme: Theme) => createStyles({
  textField: {
    width: 50
  },
  container: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    display: "flex"
  },
  buttonContainer: {
    paddingTop: 10
  }
});

interface ICountAdjustBoxProps extends WithStyles<typeof styles>, IChoice {
  name: string;
  label: string;
  currentValue: string;
}

class CountAdjustBox extends React.PureComponent<ICountAdjustBoxProps> {

  public render() {
    const { classes, currentValue, name} = this.props;

    return (
      <div className={classes.container}>
        <ButtonBase className={classes.buttonContainer} onClick={() => this.handleIncrementClicks(-1, currentValue, name)}>
          <Remove/>
        </ButtonBase>
        <TextField
          name={name}
          id="standard-number"
          label={this.props.label}
          value={currentValue}
          onChange={this.handleCallback}
          type="tel"
          InputLabelProps={{
            shrink: true,
          }}
          className={classes.textField}
          />
        <ButtonBase className={classes.buttonContainer} onClick={() => this.handleIncrementClicks(1, currentValue, name)}>
          <Add/>
        </ButtonBase>
      </div>
    )
  }

  private handleIncrementClicks = (increment: number, currentValue: string, name: string) => {
    const newVal = parseInt(currentValue) + increment;
    this.props.callback({
      key: name,
      value: newVal.toString()
    })
  }

  private handleCallback = (event: any) => {
    this.props.callback({
      key: event.target.name,
      value: event.target.value,
    });
  }
}

export default withStyles(styles)(CountAdjustBox);