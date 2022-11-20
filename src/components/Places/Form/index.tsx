import { useForm } from 'react-hook-form'
import Button from '../../ui/Button';
import ImagePicker from '../../ui/ImagePicker';
import Input from '../../ui/Input'
import LocationPicker from '../../ui/LocationPicker';
import * as S from './styles'

type FormFields = {
    title: string;
}

const PlaceForm = () => {
    const { control, handleSubmit } = useForm<FormFields>()

    const onSubmit = (data: any) => console.log(data)

    return (
        <S.Wrapper>
            <Input 
                control={control}
                name='title'
                label='Title'
            />
            <ImagePicker />
            <LocationPicker 
                control={control}
                name='location'
            />
            <Button 
                onPress={handleSubmit(onSubmit)}
            > 
                Save Location
            </Button>
        </S.Wrapper>
    )
}

export default PlaceForm