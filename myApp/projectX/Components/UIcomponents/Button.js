import React from 'react';
import { Button ,View} from 'react-native';

const CustomButton = ({text='Submit',color="#f194ff",handleBtnPress}) => {
    return (
        <View>
        <Button
            title={text}
            color={color}
            onPress={handleBtnPress}
        />
        </View>
    )
}
export default CustomButton;