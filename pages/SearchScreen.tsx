import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import Styles from "../assets/style/Styles";
import ListContacts from "../components/ListContacts";
import { PersonType, StateType } from "../CustomTypes";

const SearchScreen = (navigation: any) => {
  const state: StateType = useSelector((state: StateType) => state);
  const people: PersonType[] = state.people;

  return (
    <View style={Styles.container}>
      <ListContacts data={people} navigation={navigation.navigation} />
    </View>
  );
};

export default SearchScreen;
