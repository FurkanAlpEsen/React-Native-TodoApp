import React from "react";
import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from './AddingBar.styles';

const AddingBar = props =>{
    
    return(
        <View style={styles.container}>
            <TextInput style={styles.textInput}
                placeholder="Write Here..."
                onChangeText={props.onText}
                value={props.task}
            />   
            <View style={styles.inner_container}>
                <TouchableOpacity style={styles.saveButton}
                    onPress={props.onPress}
                    title="Kaydet"  
                    color='#E1B71C' 
                    >
                    <View>
                        <Text style={styles.saveButtonText} >KAYDET</Text>
                    </View>
                </TouchableOpacity>                        
                  
            </View>      
        </View>
    );
};

export default AddingBar;