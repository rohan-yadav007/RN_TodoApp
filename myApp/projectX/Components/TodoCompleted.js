import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SectionHeader from './SectionHeader';
import Icon from 'react-native-vector-icons/FontAwesome';

const TodoCompleted = ({ todolist }) => {
    const handleBtnPress = () => {

    }
    const renderItem = ({ item }) => {
        if(item.status === true){
            return (
                <View>
                    <Text style={styles.todoText}>{item.taskName}</Text>
                </View>
            )
        }
        else{
            return null;
        }
        
    }
    return (
        <View style={styles.TodoContainer}>
            <SectionHeader
                heading='Todos Completed'
                handleBtnPress={handleBtnPress}
            ><Icon
            name="list"
            color='#fff'
            style={{fontSize:20}}
           /></SectionHeader>
            <FlatList
                data={todolist}
                renderItem={renderItem}
                keyExtractor={(item,index) => item.taskName.concat(index)}
                extraData={todolist}
                style={{ marginBottom: 30 }}
            />
        </View>
    )
};

export default TodoCompleted;

const styles = StyleSheet.create({
    TodoContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    heading: {
        fontSize: 20,
        color: '#fff'
    },
    todoText: {
        color: '#000',
        fontSize:16,
        padding:5
    },
})