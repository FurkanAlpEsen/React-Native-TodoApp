import React from "react";
import {View, StyleSheet, Text} from 'react-native';
import styles from './TodoCard.styles';

const TodoCard = (props) =>{
    return (
        <View style={styles.container}>
            <Text style={styles.inner_text}>
                {props.text}
            </Text>
        </View>
    )
};

export default TodoCard;