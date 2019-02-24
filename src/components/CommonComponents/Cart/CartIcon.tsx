import React from "react";
import ShoppingCart from '@material-ui/icons/ShoppingCartOutlined';

class CartIcon extends React.PureComponent<{}> {

  public render() {
    return (
      <ShoppingCart style={{fontSize: 30}}/>
    )
  }
}

export default CartIcon;