import { useForm } from 'react-hook-form'

import Button from '../../ui/Button';
import ImagePicker from '../../ui/ImagePicker';
import Input from '../../ui/Input'
import LocationPicker from '../../ui/LocationPicker';
import * as S from './styles'
import { TLocation } from '../../../models/Place/index.d'

export type FormFields = {
    title: string;
    location: TLocation;
    image: string;
}

export type FormValuesNames = 'title' | 'location' | 'image';

const PlaceForm = () => {
    const { control, handleSubmit } = useForm<FormFields>()

    const onSubmit = (data: FormFields) => console.log(data)

    return (
        <S.Wrapper>
            <Input 
                control={control}
                name='title'
                label='Title'
            />
            <ImagePicker 
                control={control}
                name='image'
            />
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