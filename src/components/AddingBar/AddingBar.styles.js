import React from "react";
import { View, StyleSheet, Text } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#96A08B',
        margin: 10,
        borderRadius: 10,
        position:'relative',
        justifyContent: 'flex-end',
        marginBottom: 20,
            
    },
    inner_container:{
        padding: 10,    
        
    },
    textInput: {
        color: 'white',
        borderRadius: 10,
        margin: 10,
        fontSize: 18,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        
    },
    saveButton:{
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'orange',
        borderRadius: 10,
        alignItems:'center',
    },
    saveButtonText:{
        color: 'white',
        fontWeight: 'bold'
    }
});