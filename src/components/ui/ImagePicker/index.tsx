import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker'
import { useState } from 'react';
import { Control, useController } from 'react-hook-form';
import { Alert, Text } from 'react-native';

import { FormFields, FormValuesNames } from '../../Places/Form';
import Button from '../Button';
import * as S from './styles'

type Props = {
    control: Control<FormFields>;
    name: FormValuesNames;
}

const ImagePicker = ({
    control,
    name
}: Props) => {
    const [cameraPermissionInfo, requestPermission] = useCameraPermissions();

    const { field } = useController({
        name,
        control
    })
    
    const [pickedImage, setPickedImage] = useState('')

    const verifyPermission = async () => {
        if (cameraPermissionInfo?.status === PermissionStatus.UNDETERMINED) {
            return await requestPermission()
        }

        if (cameraPermissionInfo?.status === PermissionStatus.DENIED) {
            Alert.alert(
                'Insufficient Permissions!',
                'You need to grant camera permissions to use this app.'
            )

            return false
        }

        return true
    }

    const takeImageHandler = async () => {
        const hasPermission = await verifyPermission()

        if (!hasPermission) {
            return;
        }

        const response = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5
        })

        if (!response.canceled) {
            setPickedImage(response.assets[0].uri)
            field.onChange(response.assets[0].uri)
        }

        
    }


    return (
        <S.Wrapper>
            <S.PreviewImage>
                {
                    pickedImage 
                    ? <S.PickedImage source={{uri: pickedImage}}/>
                    : <Text>No image taken yet.</Text>
                }
                
            </S.PreviewImage>
            <Button 
                icon='camera' 
                onPress={takeImageHandler} 
                outline
            >
                Take a picture
            </Button>
        </S.Wrapper>
    )
}

export default ImagePicker