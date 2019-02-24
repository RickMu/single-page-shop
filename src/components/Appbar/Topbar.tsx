import React from 'react';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, SwipeableDrawer, List, ListItem, ListItemText, ButtonBase } from '@material-ui/core';
import CartIcon from '../Cart/CartIcon';
import CartItems from '../Cart/CartItems';

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

interface ITopbarProps extends WithStyles<typeof styles> {

}

interface ITopbarState {
  openDrawer: boolean;
}

class Topbar extends React.PureComponent<ITopbarProps, ITopbarState> {

  constructor(props: ITopbarProps) {
    super(props);
    this.state = {
      openDrawer: true
    };
  }

  private toggleDrawer = () => {
    this.setState((prevState: ITopbarState) => ({
      openDrawer: !prevState.openDrawer
    }));
  } 

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="secondary">
          <Toolbar style={{alignItems:"center"}}>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              BrandName
            </Typography>
            {/* <ButtonBase onClick={this.toggleDrawer}>
              <CartIcon/>
            </ButtonBase>
            <SwipeableDrawer anchor="right" onOpen={this.toggleDrawer} open={this.state.openDrawer} onClose={this.toggleDrawer} >
              <AppBar title="Menu" />
              <CartItems/>
            </SwipeableDrawer> */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Topbar);