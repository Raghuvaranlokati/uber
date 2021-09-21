import React from "react";
import { View, Text, StyleSheet } from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements/dist/icons/Icon";

const MapScreen = () => {
   const Stack = createNativeStackNavigator();
   const navigation = useNavigation();

    return (
        <View>

            <TouchableOpacity 
            onPress={() => navigation.navigate("HomeScreen")}
            style={tw`absolute top-16 left-8 z-50 p-3 rounded-full 
               shadow-lg`}>
               <Icon name="menu" />
                </TouchableOpacity>

          <View style={tw`h-1/2`}>
              <Map />
          </View>

          <View style={tw`h-1/2`}>
              <Stack.Navigator>
                  <Stack.Screen
                     name="NavigateCard"
                     component={NavigateCard}
                     options={{
                         headerShown: false,
                     }}
                     />
                  <Stack.Screen
                     name="RideOptions"
                     component={RideOptionsCard}
                     options={{
                         headerShown: false,
                     }}
                     />
              </Stack.Navigator>
          </View>
        </View>
    );
};

export default MapScreen


const styles = StyleSheet.create({});