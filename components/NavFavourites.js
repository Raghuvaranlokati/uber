import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";

    const data = [
        {
             id: "123",
            icon: "home",
            location: "home",
            destination: "Code, Street, london, UK",
        },
        {   
             id: "456",
             icon: "briefcase",
             location: "work",
             destination: "Code, Street, london, UK",
        },
    ];

const NavFavourites = () => {
    return (
    <FlatList 
    data={data} 
    keyExtractor={(item) => item.id}
    ItemSeparatorComponent={() => (
        <View 
        style={[tw`bg-gray-200`, { height: 0.5}]} />
    )}
    renderItem={({ item: { location,destination, icon} }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
            <Icon
            style={tw`mr-4 round-full bg-gray-300 p-3`}
             name={icon}
             type="ionicon"
             color="white"
             size={18}
             />
             <View>
                 <Text style={tw`font-semibold text-lg`}>{location}</Text>
                 <Text style={tw`text-gray-500`}>{destination}</Text>
             </View>
        </TouchableOpacity>
    )}
   />
    );
};  
