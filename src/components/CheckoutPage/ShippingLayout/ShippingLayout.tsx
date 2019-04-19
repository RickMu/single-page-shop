import React from "react";
import ShippingForm from "./ShippingForm";
import ContactInfo from "./ContactInfo";

class ShippingLayout extends React.PureComponent<{}> {

  public render() {
    return (
      <div>
        <h1>
          ShippingLayout
        </h1>
        <ShippingForm/>
        {/* <ContactInfo callback={(select:any) => console.log(select)} name={"email"}/> */}
      </div>
    )
  }
}

export default ShippingLayout;