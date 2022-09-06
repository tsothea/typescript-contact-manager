import {
  REACT_APP_ADD_NEW_CONTACT,
  REACT_APP_EDIT_CONTACT,
  REACT_APP_DELETE_CONTACT,
} from "@env";
import { PersonType } from "../CustomTypes";

export const addNewContact = (params: PersonType) => {
  return {
    type: REACT_APP_ADD_NEW_CONTACT,
    payload: { params: params },
  };
};

export const editContact = (key: string, params: PersonType) => {
  return {
    type: REACT_APP_EDIT_CONTACT,
    payload: { key: key, params: params },
  };
};

export const forceDeleteContact = (key: string, params: PersonType): any => {
  return {
    type: REACT_APP_DELETE_CONTACT,
    payload: { key: key, params: params },
  };
};
