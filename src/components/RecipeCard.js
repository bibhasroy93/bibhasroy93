import { View, Text, FlatList,Image,Pressable } from "react-native";
import React from "react";
import { colors, recipeList } from "../Constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RecipeCard = () => {
    const navigation=useNavigation();
  return (
    <View>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={recipeList}
        renderItem={({ item }) => (
          <Pressable 
          onPress={()=>navigation.navigate("RecipeDetails")}
            style={{
              backgroundColor: colors.COLOR_LIGHT,
              borderRadius: 16,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 7,
              marginVertical: 16,
              alignItems:"center",
              paddingHorizontal:8,
              paddingVertical:26,
            }}
          >
            <Image source={item.image} 
            style={{width:150, height:150, resizeMode:"center"}}/>
            <Text>{item.name}</Text>
            <View style={{flexDirection:"row", marginTop:8}}>
                <Text>{item.time}</Text>
                <Text> | </Text>
                <View style={{flexDirection:"row"}}>
                    <Text style={{marginRight:4}}>{item.rating}</Text>
                    <FontAwesome 
                    name="star"
                    size={16}
                    marginVertical={2}
                    color={colors.COLOR_PRIMARY}
                    />
                </View>
            </View>
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={{
            justifyContent:"space-between"
        }}
      />
    </View>
  );
};

export default RecipeCard;
