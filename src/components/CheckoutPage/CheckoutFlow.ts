import ShippingLayout from "./ShippingLayout/ShippingLayout";

export enum CheckoutSteps {
  ShippingAddressStep = "Shipping Address",
  ShippingMethodStep = "Shipping Method",
  CompletePurchaseStep = "Complete Purchase",
}

export interface CheckoutFlowStep {
  description: string;
  type: CheckoutSteps;
  title: string;
}


export const CheckoutFlow: CheckoutFlowStep[] = [
    {
      description: "Shipping Address",
      type: CheckoutSteps.ShippingAddressStep,
      title: "Shipping Address",
    },
    {
      description: "Shipping Method",
      type: CheckoutSteps.ShippingMethodStep,
      title: "Shipping Method"
    },
    {
      description: "Complete Purchase",
      type: CheckoutSteps.CompletePurchaseStep,
      title: "Complete Purchase"
    }
]
