import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CustomButton from './UIcomponents/Button';

const SectionHeader = ({ heading = 'Heading', style, showButtton, buttonText, handleBtnPress,children }) => {
    return (
        <View style={styles.SectionHeading}>
            <Text style={style || styles.heading}>{heading}</Text>
            {/* {showButtton &&
                (
                    <CustomButton
                        color='#42ad44'
                        text={buttonText || 'Done'}
                        handleBtnPress={handleBtnPress}
                    />
                )
            } */}
            {children && <View>{children}</View>}
        </View>
    )
};

export default SectionHeader;

const styles = StyleSheet.create({
    SectionHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        padding:10
    },
    heading: {
        fontSize: 20,
        color: '#000'
    }
})