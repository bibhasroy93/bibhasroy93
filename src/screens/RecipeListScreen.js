import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16, marginTop: 50 }}>
      {/* render header */}
      <Header headerText={"Hi, Bibhas"} headerIcon={"bell-o"} />
      {/* search filter */}
      <SearchFilter icon="search" placeholder={"enter your fav recipe"} />
      {/* categories filter */}
      <View style={{marginTop:22}}>
        <Text style={{fontSize:22, fontWeight:"bold"}}>Categories</Text>
        {/* categories list*/}
        <CategoriesFilter />
      </View>

      {/* recipe list filter */}
      <View style={{marginTop:22, flex:1}}>
        <Text style={{fontSize:22, fontWeight:"bold"}}>Recipes</Text>
        {/* recipes list*/}
        <RecipeCard/>
      </View>
    </SafeAreaView>
  );
};

export default RecipeListScreen;

const styles = StyleSheet.create({});
