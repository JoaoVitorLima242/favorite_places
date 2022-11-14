import { FlatList, Text } from "react-native"
import Place from "../../../models/Place"

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
            renderItem={() => (
                <Text>ToDo</Text>
            )}
        />
    )
}

export default PlacesList