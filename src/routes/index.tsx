import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AddPlace, AllPlaces } from "../screens";

export type RootStackParamList = {
    AllPlaces: undefined;
    AddPlace: undefined;
};
    

const RootStack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen
                    name='AllPlaces'
                    component={AllPlaces}
                />
                <RootStack.Screen
                    name='AddPlace'
                    component={AddPlace}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation