import { StackScreenProps } from "@react-navigation/stack";
import { TLocation } from "../helpers/location";

export type RootStackParamList = {
    AllPlaces: undefined;
    AddPlace: {
        pickedLocation?: TLocation
    };
    Map?: {
        initialLocation: TLocation; 
    };
    PlaceDetails: {
        placeId: number;
    }
};

