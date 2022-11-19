import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
    AllPlaces: undefined;
    AddPlace: undefined;
    Map: undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList, 'Map', 'AddPlaces', 'AllPlaces'>;
