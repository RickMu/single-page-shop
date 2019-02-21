import React from "react";
import { FormControl, InputLabel, NativeSelect, FormHelperText, Input, WithStyles, Select, MenuItem } from "@material-ui/core";
import KeyValuePair from "../../common/KeyValuePair";

export type choiceCallBack = (select: KeyValuePair<string,string>) => void;

interface IChoiceBoxProps {
  choiceName: string;
  choices: string[];
  callback: choiceCallBack;
  boxStyle: any;
}

class ProductChoiceBox extends React.PureComponent<IChoiceBoxProps> {

  public render() {
    const { choices, boxStyle, choiceName } = this.props;
    return (
      <FormControl className={boxStyle} >
        <InputLabel htmlFor="age-native-helper">{choiceName}</InputLabel>
        <Select onChange={this.handleChange} input={<Input name={choiceName} />}>
          {choices.map((value: string, index: number) => <MenuItem value={value} key={index}>{value}</MenuItem>)}
        </Select>
        <FormHelperText>Some important helper text</FormHelperText>
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