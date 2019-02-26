export enum ChoiceType {
  Category = "Category",
  Count = "Count",
}

interface IProductChoiceBase {
  name: string;
  type: ChoiceType;
  defaultValue: any;
  description?: string;
}

export interface IProductTypeChoices extends IProductChoiceBase {
  choices: string[];
}

export interface IProductCountChoices extends IProductChoiceBase {
  range?: [number, number]
}

export type IProductChoices = IProductTypeChoices | IProductCountChoices;