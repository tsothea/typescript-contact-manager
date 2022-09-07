import React from "react";
import { View } from "react-native";
import Styles from "../assets/style/Styles";
import { useSelector } from "react-redux";
import ListContacts from "../components/ListContacts";
import { StateType } from "../CustomTypes";

const FavoritesScreen = (navigation: any) => {
  const state: StateType = useSelector((state: StateType) => state);
  const favorites = state.listPeople.filter((person) => person.isFavourite);
  return (
    <View style={Styles.container}>
      <ListContacts data={favorites} navigation={navigation.navigation} />
    </View>
  );
};

export default FavoritesScreen;
