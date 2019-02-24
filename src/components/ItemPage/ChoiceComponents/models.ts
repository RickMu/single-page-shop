import KeyValuePair from "../../common/KeyValuePair";

export type choiceCallBack = (select: KeyValuePair<string, string>) => void;

export interface IChoice {
  callback: choiceCallBack;
};

//TODO HOC for choice components.