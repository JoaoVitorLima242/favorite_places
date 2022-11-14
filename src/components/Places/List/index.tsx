import { FlatList, Text } from "react-native"
import Place from "../../../models/Place"
import PlaceItem from "../Item"

type Props = {
    places: Place[]
}

const PlacesList = ({
    places,

}: Props) => {
    return (
        <FlatList 
            data={places}
            keyExtractor={({id}) => id} 
            renderItem={({ item }) => (
                <PlaceItem place={item}/>
            )}
        />
    )
}

export default PlacesList