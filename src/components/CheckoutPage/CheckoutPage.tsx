import React from "react";
import { Grid, Stepper, StepLabel, Step, Theme, createStyles, WithStyles, withStyles, Button } from "@material-ui/core";
import { CheckoutFlowStep, CheckoutSteps } from "./CheckoutFlow";
import classes from "*.module.scss";
import ShippingLayout from "./ShippingLayout/ShippingLayout";
import classNames from 'classnames/bind';

const style = (theme: Theme) => createStyles({
 contentGrid: {
   marginLeft: 175,
   marginRight: 175,
   padding: 96,
   [theme.breakpoints.down("sm")]: {
    padding:48,
    marginLeft:50,
    marginRight:50,
  }
 },
 buttonGrid: {
  marginLeft: 175,
  marginRight: 175,
   padding:96,
   [theme.breakpoints.down("sm")]: {
     padding:48,
    marginLeft:50,
    marginRight:50,
   }
 },
 returnButton: {
   float: "left"
 },
 nextButton: {
   float: "right"
 },
 buttonStyle: {
   [theme.breakpoints.down("sm")]: {
     width: 120
   }
 }
});

interface ICheckoutProps extends WithStyles<typeof style> {
  checkoutFlow: CheckoutFlowStep[]
}

interface ICheckoutState {
  activeStep: number
}

class CheckoutPage extends React.Component<ICheckoutProps, ICheckoutState> {
  state = {
    activeStep: 0
  };

  public render() {
    const { classes } = this.props;
    const currentCheckoutStep = this.props.checkoutFlow[this.state.activeStep];

    return (
      <React.Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Stepper activeStep={this.state.activeStep} alternativeLabel>
              { this.props.checkoutFlow.map((value) => {
                return (
                  <Step key={value.description}>
                    <StepLabel>
                      {value.description}
                    </StepLabel>
                  </Step>
                )
              })}
            </Stepper>
          </Grid>
          <Grid item xs={12} className={classes.contentGrid}>
            { this.getCheckoutStepComponent(currentCheckoutStep)}
          </Grid>
          <Grid item xs={12} className={classes.buttonGrid}>
            <Button className={`${classes.returnButton} ${classes.buttonStyle}`} onClick={() => this.onClickNext(this.props.checkoutFlow.length, -1)}>
            {this.getPrevButtonText(this.props.checkoutFlow, this.state.activeStep)}
            </Button>
            <Button variant="outlined" className={`${classes.nextButton} ${classes.buttonStyle}`} onClick={() => this.onClickNext(this.props.checkoutFlow.length, 1)}>
              {this.getNextButtonText(this.props.checkoutFlow, this.state.activeStep)}
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }

  private getPrevButtonText = (checkoutFlow: CheckoutFlowStep[], currentStep: number) => {
    const lastStep = currentStep -1;

    if(lastStep < 0) {
      return "< Return To Item"
    }
    return `< ${checkoutFlow[lastStep].title}`
  }

  private getNextButtonText = (checkoutFlow: CheckoutFlowStep[], currentStep: number) => {
    const nextStep = currentStep + 1;
    
    if(nextStep >= checkoutFlow.length) {
      return "Complete Purchase"
    }
    return `Continue To ${checkoutFlow[nextStep].title}`
  }

  private getCheckoutStepComponent = (step: CheckoutFlowStep) => {
    switch(step.type) {
      case CheckoutSteps.CompletePurchaseStep:
        return (
          <ShippingLayout/>
        )
      
      case CheckoutSteps.ShippingMethodStep:
        return (
          <ShippingLayout/>
        )
      default:
        return (
          <ShippingLayout/>
        )
    }
  }

  private onClickNext = (checkOutLength: number, increment: number) => {
    const nextStep = this.state.activeStep + increment;

    if(nextStep >= checkOutLength || nextStep < 0)
    {
      return;
    }
    
    this.setState({
      activeStep: nextStep
    });
  }
}

export default withStyles(style)(CheckoutPage);