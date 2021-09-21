import React from "react"
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, _Image } from "react-native"
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { selecttravelTimeInformation } from "../slices/navSlice";

const data = [
    {
        id: "Uber-X-123",
        title: "UberX",
        multiplier: 1,
        image: "https://links.papareact.com/3pn",
    },
    {
        id: "Uber-X-123",
    title: "UberX",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
},
    {
        id: "Uber-X-123",
        title: "UberX",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf",
    },
];

// if we have SURGE pricing, this goes up
const SURGE_CHARGE_RATE = 1.5;


const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const setTravelTimeInformation = useSelector(selecttravelTimeInformation);

    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View >
                <TouchableOpacity 
                  onPress={() => navigation.goBack("NavigateCard")} 
                  style={tw`absolute top-3 left-5 p-3 rounded-full`}
                  >
                     <Icon name="chevron-left" type="fontawesome"  />
                </TouchableOpacity>
            <Text style={tw`text-center py-5 text-xl`}>Selet a Ride - {travelTimeInformation?.distance?.text}</Text>
            </View>

            <FlatList  data={data} keyExtractor={(item) => item.id} 
              renderItem={({item: { id, title, multiplier, image } }) => (
                  <TouchableOpacity
                  onPress={() => setSelected(item)}
                  style={tw`flex-row justify-between items-center px-10 ${id ===
                  selected?.id && "bg-gray-200"
                  }`}>
                      <Image
                       style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain",
                       }}
                       source={{ uri: image }}
                       />
                         <View style={tw`-ml-6`}>
                             <Text style={tw`text-xl font-semibold`}>{title}</Text>
                             <Text>{travelTimeInformation?.duration?.text} Travel Time</Text>
                         </View>
                         <Text style={tw`text-xl`}>

                             {new Intl.NumberFormat('en-gb', {
                                 style: 'currency',
                                 currency: 'GBP'
                             }).format(

                                (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE
                                    * multiplier) / 
                                    100

                             )}

                         </Text>
                  </TouchableOpacity>
             )}

            />

            <View style={tw`mt-auto border-t border-gray-200`}>
                <TouchableOpacity 
                disabled={!selected}  style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
                >
                    <Text style={tw`text-center text-white text-xl`}>
                        Choose {selected?.title}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});