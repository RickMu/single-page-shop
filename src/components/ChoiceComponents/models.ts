import KeyValuePair from "../../common/KeyValuePair";
import React from "react";

export type choiceCallBack = (select: KeyValuePair<string, string>) => void;

export interface IChoice {
  callback: choiceCallBack;
};

//TODO HOC for choice components.