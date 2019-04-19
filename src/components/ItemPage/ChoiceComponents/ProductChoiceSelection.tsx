import React from "react";
import { FormControl, InputLabel,
NativeSelect, FormHelperText, Input, Select, MenuItem } from "@material-ui/core";
import { IInputCallback } from "./models";
import {IProductTypeChoices} from "../../../common/ui/models/ProductChoice";

interface IChoiceBoxProps extends IInputCallback {
  productChoice: IProductTypeChoices;
  currentValue: string;
}

class ProductChoiceBox extends React.PureComponent<IChoiceBoxProps> {

  public render() {
    const { productChoice, currentValue} = this.props;
    return (
      <FormControl style={{width: 100, maxWidth: 300}}>
        <InputLabel htmlFor="age-native-helper">{currentValue}</InputLabel>
        <Select onChange={this.handleChange} input={<Input name={productChoice.name}/>}>
          {productChoice.choices.map((value: string, index: number) =>
          <MenuItem value={value} key={index}>{value}</MenuItem>)}
        </Select>
        <FormHelperText>{productChoice.description}</FormHelperText>
      </FormControl>
    );
  }

  private handleChange = (event: any) => {
    this.props.callback({
      key: event.target.name,
      value: event.target.value
    });
  }
}

export default ProductChoiceBox;