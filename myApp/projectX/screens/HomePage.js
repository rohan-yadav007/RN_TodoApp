import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import TodoList from '../Components/TodoList';
import TodoCompleted from '../Components/TodoCompleted';
import InputText from '../Components/UIcomponents/InputText';
import SectionHeader from '../Components/SectionHeader';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [];
const HomePage = () => {
    const [todo, setTodo] = useState('');
    const [todolist, setTodolist] = useState(data);

    const handleBtnPress = () => {
        if (todo.length) {
            setTodolist(prevState => { return [...prevState, { taskName: todo, status: false }] });
            setTodo('')
        }
    }

    return (
        <SafeAreaView style={styles.root}>
            <View>
                <Text style={styles.appHeading}>TODO APP</Text>
            </View>
            <View>
                <SectionHeader showButtton buttonText='Add' heading='Add Todos' >
                    <Icon.Button name="plus" color='#fff' backgroundColor='green' onPress={handleBtnPress}>Add</Icon.Button>
                </SectionHeader>
                <InputText onChange={setTodo} value={todo} placeholder='Enter todos here...' />
            </View>
            <View style={styles.todolistContainer}>
                <TodoList todolist={todolist} setTodolist={setTodolist} />
            </View>
            <View style={styles.todoCompletedContainer}>
                <TodoCompleted todolist={todolist} />
            </View>
            <View />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        margin: 10,
        padding: 10,
        borderRadius: 25,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#1a82bd',

    },
    appHeading: {
        fontSize: 18,
        fontWeight: '700',
        alignSelf: 'center',
        backgroundColor: '#0095ff',
        padding: 10,
        borderRadius: 20,
        color: '#fff'
    },
    textBlock: {
        padding: 10,
    },
    todolistContainer: {
        flex: 1,
        backgroundColor: '#0095ff',
        borderRadius: 25,
        marginTop: 10,
    },
    todoCompletedContainer: {
        flex: 1,
        backgroundColor: '#ffa500',
        borderRadius: 25,
        padding: 15,
        marginTop: 10
    },
    light: {
        backgroundColor: '#000',
        color: '#fff',
        padding: 10,
    },
    dark: {
        backgroundColor: '#fff',
        color: '#000',
        padding: 10,
    },

})

export default HomePage;