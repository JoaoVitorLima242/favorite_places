import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { defaultTheme } from "../assets/styles/theme";
import IconButton from "../components/ui/IconButton";
import { 
    AddPlace,
    AllPlaces,
    Map, 
    PlaceDetails
} from "../screens";
import { RootStackParamList } from "./types";

const RootStack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: defaultTheme.colors.primary500 },
                    headerTintColor: defaultTheme.colors.gray700,
                    cardStyle: { backgroundColor: defaultTheme.colors.gray700 }
                }}
            >
                <RootStack.Screen
                    name='AllPlaces'
                    component={AllPlaces}
                    options={({ navigation }) => ({
                        headerRight: ({tintColor = ''}) => (
                            <IconButton 
                                icon='add'
                                size={24}
                                color={tintColor}
                                onPress={() => navigation.navigate('AddPlace')}
                            />
                        ),
                        title: 'Your Favorite Places'
                    })}
                />
                <RootStack.Screen
                    name='AddPlace'
                    component={AddPlace}
                    options={{
                        title: 'Add a new Place'
                    }}
                />
                <RootStack.Screen 
                    name="Map"
                    component={Map}
                />
                <RootStack.Screen 
                    name="PlaceDetails"
                    component={PlaceDetails}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation