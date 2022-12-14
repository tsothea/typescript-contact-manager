import React from "react";
import { View } from "react-native";
import Styles from "../assets/style/Styles";
import { useSelector } from "react-redux";
import ListContacts from "../components/ListContacts";
import { StateType } from "../CustomTypes";

const PeopleScreen = (navigation: any) => {
  const state: StateType = useSelector((state: StateType) => state);
  const people = state.listPeople;
  return (
    <View style={Styles.container}>
      <ListContacts data={people} navigation={navigation.navigation} />
    </View>
  );
};

export default PeopleScreen;
