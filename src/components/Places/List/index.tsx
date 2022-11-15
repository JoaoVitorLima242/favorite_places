import { FlatList, Text } from "react-native"

// Types
import Place from "../../../models/Place"
import FallbackView from "../../ui/FallbackView"
// Components
import PlaceItem from "../Item"

type Props = {
    places: Place[]
}

const PlacesList = ({
    places,

}: Props) => {
    if (!places || places.length === 0) {
        return (
            <FallbackView>No places added yet - starting adding some!</FallbackView>
        )
    }

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