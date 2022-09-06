import axios from "axios";
import {
  addContact,
  addFavorite,
  fetchPeople,
  removeContact,
  removeFavorite,
} from "./actions";
import {
  addCompany,
  deleteCompany,
  fetchCompanies,
  updateCompany,
} from "./companyAction";
import {
  addNewContact,
  editContact,
  forceDeleteContact,
} from "./contactAction";
import { REACT_APP_FIREBASE_URL } from "@env";
import { CompanyType, PersonType } from "../CustomTypes";
import { Dispatch } from "redux";

export const getPeople = async (dispatch: Dispatch) => {
  return await axios
    .get(REACT_APP_FIREBASE_URL + "/people.json")
    .then((response) => {
      let people: PersonType[] = [];
      Object.entries(response.data).forEach(([index, value]) => {
        people.push({ ...value, key: index });
      });
      dispatch(fetchPeople(people));
    });
};

export const saveContact = async (key: string, dispatch: Dispatch) => {
  let updateData = { isContact: true };
  await axios
    .patch(REACT_APP_FIREBASE_URL + "/people/" + key + ".json", updateData)
    .then(() => {
      dispatch(addContact(key));
    });
};

export const deleteContact = async (key: string, dispatch: Dispatch) => {
  let updateData = { isContact: false, isFavourite: false };
  await axios
    .patch(REACT_APP_FIREBASE_URL + "/people/" + key + ".json", updateData)
    .then(() => {
      dispatch(removeContact(key));
    });
};

export const saveFavourite = async (key: string, dispatch: Dispatch) => {
  let updateData = { isFavourite: true };
  await axios
    .patch(REACT_APP_FIREBASE_URL + "/people/" + key + ".json", updateData)
    .then(() => {
      dispatch(addFavorite(key));
    });
};

export const deleteFavourite = async (key: string, dispatch: Dispatch) => {
  let updateData = { isFavourite: false };
  await axios
    .patch(REACT_APP_FIREBASE_URL + "/people/" + key + ".json", updateData)
    .then(() => {
      dispatch(removeFavorite(key));
    });
};

export const getCompanies = async (dispatch: Dispatch) => {
  return await axios
    .get(REACT_APP_FIREBASE_URL + "/companies.json")
    .then((response) => {
      let companies: CompanyType[] = [];
      Object.entries(response.data).forEach(([index, value]) => {
        companies.push({ ...value, key: index });
      });
      dispatch(fetchCompanies(companies));
    });
};

export const addNewCompany = async (company: CompanyType, dispatch: Dispatch) => {
  return await axios
    .post(REACT_APP_FIREBASE_URL + "/companies.json", company)
    .then((response) => {
      company["key"] = response.data["name"];
      dispatch(addCompany(company));
    });
};

export const editCompany = async (company: CompanyType, dispatch: Dispatch) => {
  return await axios
    .patch(REACT_APP_FIREBASE_URL + "/companies/" + company["key"] + ".json", {
      name: company["name"],
    })
    .then(() => {
      dispatch(updateCompany(company));
    });
};

export const removeCompany = async (key: string, dispatch: Dispatch) => {
  return await axios
    .delete(REACT_APP_FIREBASE_URL + "/companies/" + key + ".json")
    .then(() => {
      dispatch(deleteCompany(key));
    });
};

export const saveNewContact = async (formData: PersonType, dispatch: Dispatch) => {
  await axios
    .post(REACT_APP_FIREBASE_URL + "/people.json", formData)
    .then((response) => {
      formData["key"] = response.data["name"];
      dispatch(addNewContact(formData));
    });
};

export const updateNewContact = async (formData: PersonType, dispatch: Dispatch) => {
  await axios
    .patch(
      REACT_APP_FIREBASE_URL + "/people/" + formData.key + ".json",
      formData
    )
    .then(() => {
      dispatch(editContact(formData.key, formData));
    });
};

export const forceRemoveContact = async (key: string, dispatch: Dispatch) => {
  return await axios
    .delete(REACT_APP_FIREBASE_URL + "/people/" + key + ".json")
    .then(() => {
      dispatch(forceDeleteContact(key));
    });
};
