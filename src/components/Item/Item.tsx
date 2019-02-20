import { ButtonBase, createStyles, Grid, Paper, Theme, Typography, WithStyles, withStyles, CssBaseline, FormControl, InputLabel, NativeSelect, Input, FormHelperText, Button } from "@material-ui/core";
import React from "react";
import ChevronLeft, { ChevronRight } from "@material-ui/icons";

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
      width: 'calc(100% - 20px)'
    },
  },
  image: {
    display: "block",
    width: "100%"
  },
  inline: {
    display: "inline",
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
      heigh: 'calc(100% - 20px)'
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
  }
})

interface ItemProps extends WithStyles<typeof styles>{

}

const logo = require('../../logo.svg');

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
                <Grid item={true} container={true} xs={12} md={2} direction={"column"}>
                  <Grid item={true} className={classes.sidelistContainer}>
                    <ButtonBase className={classes.buttonImage}>
                      <ChevronLeft></ChevronLeft>
                      <img className={classes.image} src={logo} />
                      <ChevronRight></ChevronRight>
                    </ButtonBase>
                  </Grid>
                  <Grid item={true} className={classes.sidelistContainer}>
                    <ButtonBase className={classes.buttonImage}>
                      <img className={classes.image} src={logo} />
                    </ButtonBase>
                  </Grid>
                  <Grid item={true} className={classes.sidelistContainer}>
                    <ButtonBase className={classes.buttonImage}>
                      <img className={classes.image} src={logo} />
                    </ButtonBase>
                  </Grid>
                </Grid>
                <Grid item={true} xs={12} md={10} container={true} justify="space-around" alignItems="center">
                
                  <img className={classes.image} src={logo} />
                </Grid>
              </Grid>
              <Grid xs={12} md={5} item={true}>
                <div className={classes.contentContainer}>
                  <div className={classes.block}>
                    <Typography variant="h3" component="h2">
                      I'm a Product
                    </Typography>
                    <Typography component="p" color={"textPrimary"}>
                      Lorem Ipsum is simply dummy text
                    </Typography>
                  </div>
                  <div className={classes.block}>
                    <Typography variant="h6" component="h2">
                      $ 17.4 USD
                    </Typography>
                  </div>
                  <div className={classes.block}>
                    <Typography component="p">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="age-native-helper">Age</InputLabel>
                      <NativeSelect
                        input={<Input name="age" id="age-native-helper" />}
                      >
                        <option value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                      </NativeSelect>
                      <FormHelperText>Some important helper text</FormHelperText>
                  </FormControl>
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
}

export default withStyles(styles)(ItemView);