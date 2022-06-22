import React from "react";
import { View, Text } from "react-native";
import styles from "./Counter.styles";


const Counter = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title} > Yapılacaklar </Text>
            <Text style={styles.value} > {props.count} </Text>
        </View>
    )
}

export default Counter;