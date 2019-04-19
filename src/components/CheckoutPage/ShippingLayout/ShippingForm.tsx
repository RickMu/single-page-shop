import React from "react";
import { WithStyles, createStyles, Theme, Typography, withStyles, TextField } from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
  title: {
    padding: 12,
    textAlign:"left"
  },
  block: {
    padding: 12
  }
})

interface IShippingFormProps extends WithStyles<typeof styles> {

}

class ShippingForm extends React.PureComponent<IShippingFormProps> {

  public render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Typography className={classes.title} variant="h5" >Shipping Address</Typography>
        <div className={classes.block}>
          <div style={{justifyContent:"space-between", display:"flex"}}>
            <div style={{width:"49%"}}>
              <TextField
                id="outlined-dense"
                label={"test"}
                variant="outlined"
                style={{display:"inline-block"}}
                fullWidth
              />
            </div>
            <div style={{width:"49%"}}>
              <TextField
                id="outlined-dense"
                label={"test"}
                variant="outlined"
                style={{display:"inline-block"}}
                fullWidth
              />
            </div>
          </div>
        </div>
        <div className={classes.block}>
          <TextField
              id="outlined-dense"
              label={"test"}
              variant="outlined"
              fullWidth
          />
        </div>
        <div className={classes.block}>
          <TextField
              id="outlined-dense"
              label={"test"}
              variant="outlined"
              fullWidth
          />
        </div>
        <div className={classes.block}>
          <TextField
              id="outlined-dense"
              label={"test"}
              variant="outlined"
              fullWidth
          />
        </div>
        <div className={classes.block}>
          <TextField
              id="outlined-dense"
              label={"test"}
              variant="outlined"
              fullWidth
          />
        </div>
        <div className={classes.block}>
          <div style={{justifyContent:"space-between", display:"flex"}}>
            <div style={{width:"32%"}}>
              <TextField
                id="outlined-dense"
                label={"test"}
                variant="outlined"
                style={{display:"inline-block"}}
                fullWidth
              />
            </div>
            <div style={{width:"32%"}}>
              <TextField
                id="outlined-dense"
                label={"test"}
                variant="outlined"
                style={{display:"inline-block"}}
                fullWidth
              />
            </div>
            <div style={{width:"32%"}}>
              <TextField
                id="outlined-dense"
                label={"test"}
                variant="outlined"
                style={{display:"inline-block"}}
                fullWidth
              />
            </div>
          </div>
        </div>
        <div className={classes.block}>
          <TextField
              id="outlined-dense"
              label={"test"}
              variant="outlined"
              fullWidth
          />
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(ShippingForm);