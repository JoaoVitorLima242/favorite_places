import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, StackScreenProps } from "@react-navigation/stack";
import { defaultTheme } from "../assets/styles/theme";
import IconButton from "../components/ui/IconButton";

import { AddPlace, AllPlaces } from "../screens";

export type RootStackParamList = {
    AllPlaces: undefined;
    AddPlace: undefined;
};

export type NavigationProps = StackScreenProps<RootStackParamList, 'AllPlaces', 'AddPlace'>;


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
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation