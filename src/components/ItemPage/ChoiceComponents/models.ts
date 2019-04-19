import KeyValuePair from "../../../common/extensions/KeyValuePair";


export type choiceCallBack = (select: KeyValuePair<string, string>) => void;

export interface IInputCallback {
  callback: choiceCallBack;
};

//TODO HOC for choice components.