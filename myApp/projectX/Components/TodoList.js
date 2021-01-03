import React, { useState, useEffect } from 'react';
import { View, Modal, FlatList, Text, StyleSheet, Button, TextInput } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import SectionHeader from './SectionHeader';
import CustomButton from '../Components/UIcomponents/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import InputText from './UIcomponents/InputText';

const TodoList = ({ setTodolist, todolist }) => {
    const [editableTodo, setEditableTodo] = useState({
        taskName: '',
        status: false
    });
    const [editTodo, setEditTodo] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const handleEditableTodo = (item, index) => {
        setEditableTodo(item);
        setActiveIndex(index)
    }
    //Handling todos checkbox
    const handleCheck = (index) => {
        const newCheckBox = [...todolist];
        newCheckBox[index].status = true;
        setTodolist(newCheckBox);
    }
    const handleDeleteTodo = () => {
        const newTodoList = todolist.filter((item) => item.taskName !== editableTodo.taskName)
        setTodolist(newTodoList);
        handleModalClose();
    }
    const handleMarkDone = () => {
        handleCheck(activeIndex);
        handleModalClose();
    }
    const handleTodoChange = (text) => {
        setEditableTodo(prevState => { return { ...prevState, taskName: text } });
    }
    const handleEditTodo = () => {
        setEditTodo(true);
    }
    const handleTodoEditSubmit = () => {
        const newCheckBox = [...todolist];
        newCheckBox[activeIndex].taskName = editableTodo.taskName;
        setTodolist(newCheckBox);
        setEditTodo(false);
    }
    const handleModalClose = () => {
        setModalVisible(false);
        setActiveIndex(null);
        setEditableTodo({ taskName: '', status: false });
        setEditTodo(false)
    }
    const handleModal = (item,index) => {
        setModalVisible(true);
        handleEditableTodo(item, index);
    }
    //Render Component for todos
    const renderItem = ({ item, index }) => {
        if (item.status) {
            return null
        }
        else {
            return (
                <View style={styles.todoContent}>
                    <Text style={[item.status && styles.markedTodos, styles.todoText]}>{item.taskName}</Text>
                    <Icon.Button
                        name="edit"
                        backgroundColor="#3b5998"
                        onPress={() => handleModal(item, index)}
                    >Action</Icon.Button>
                </View>
            )
        }
    }
    return (
        <>
            <View style={{ margin: 20 }}>
                <SectionHeader style={styles.headingText} heading={'Todo List'}>
                    <Icon name="list" color='#fff' style={{ fontSize: 20 }} />
                </SectionHeader>
                <FlatList
                    data={todolist}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => item.taskName.concat(index)}
                    style={{ marginBottom: 30 }}
                />
            </View>

            <View>
                <Modal animationType="slide" transparent={true} visible={modalVisible}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View>
                                <Icon.Button name="close" backgroundColor="#0095ff" onPress={handleModalClose}>Close</Icon.Button>
                            </View>

                            {editTodo ?
                                (
                                    <View style={styles.modalBtnContainer}>
                                        <InputText onChange={handleTodoChange} value={editableTodo.taskName} />
                                        <CustomButton color='green' text='Done' handleBtnPress={handleTodoEditSubmit} />
                                    </View>
                                )
                                : (
                                    <View>
                                        <Text style={styles.modalTodoName}>
                                            Todo Name: {editableTodo.taskName}
                                        </Text>
                                    </View>
                                )
                            }
                            <View style={styles.modalBtnContainer}>
                                <View style={styles.modalBtn}>
                                    <Icon.Button name="edit" backgroundColor="#3b5998" onPress={handleEditTodo}> Edit</Icon.Button>
                                </View>
                                <View style={styles.modalBtn}>
                                    <Icon.Button name="check" backgroundColor="green" onPress={handleMarkDone}> Mark Done</Icon.Button>
                                </View>
                                <View style={styles.modalBtn}>
                                    <Icon.Button name="trash-o" backgroundColor="red" onPress={handleDeleteTodo}> Delete</Icon.Button>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </>
    )
};

export default TodoList;

const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headingText: {
        fontSize: 20,
        color: '#fff'
    },
    markedTodos: {
        textDecorationLine: 'line-through',
        fontStyle: 'italic'
    },
    todoText: {
        color: '#fff',
        fontSize: 16,
        padding: 5
    },
    todoContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    todoTextCompleted: {
        textDecorationLine: 'line-through'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    modalBtn: {
        marginLeft: 5,
        padding: 5
    },
    modalTodoName: {
        fontSize: 18,
        padding: 10
    }
})