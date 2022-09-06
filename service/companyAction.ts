import {
  REACT_APP_GET_COMPANIES,
  REACT_APP_ADD_COMPANY,
  REACT_APP_DELETE_COMPANY,
  REACT_APP_EDIT_COMPANY,
} from "@env";
import { CompanyType } from "../CustomTypes";

export const fetchCompanies = (companies: CompanyType[]) => {
  return {
    type: REACT_APP_GET_COMPANIES,
    payload: { companies: companies },
  };
};

export const addCompany = (company: CompanyType) => {
  return {
    type: REACT_APP_ADD_COMPANY,
    payload: { company: company },
  };
};

export const updateCompany = (company: CompanyType) => {
  return {
    type: REACT_APP_EDIT_COMPANY,
    payload: { company: company },
  };
};

export const deleteCompany = (key: string) => {
  return {
    type: REACT_APP_DELETE_COMPANY,
    payload: { key: key },
  };
};
