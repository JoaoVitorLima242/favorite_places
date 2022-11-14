import { useLayoutEffect } from "react"

import PlacesList from "../../components/Places/List"
import IconButton from "../../components/ui/IconButton"
import { NavigationProps } from "../../routes"

const AllPlacesScreen = ({ navigation }: NavigationProps) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: ({tintColor = ''}) => (
                <IconButton 
                    icon='add'
                    size={24}
                    color={tintColor}
                    onPress={() => navigation.navigate('AddPlace')}
                />
            )
        })
    })
    return (
        <PlacesList places={[]} />
    )
}

export default AllPlacesScreen