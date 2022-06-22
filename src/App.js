import React, {useState} from "react";
import {SafeAreaView,View, Text, StyleSheet, Keyboard,TextInput,TouchableOpacity} from 'react-native';
import Counter from './components/Counter';
import TodoCard from './components/TodoCard';
import AddingBar from './components/AddingBar';

const App = () =>{

  const [count, setCount] = useState(0);

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    //console.log(task);
    if(task){
      setTaskItems([...taskItems, task]);
      setCount(count + 1);
    }
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
    setCount(count - 1);
  }

  return (
    <SafeAreaView style={styles.container}>
      {<Counter count={count}/>}

      <View>
       { 
        taskItems.map((item,index) => {
          return (
              <TouchableOpacity onPress={()=> completeTask(index)}>
                {/*console.log(index)*/}
                {item ? <TodoCard key="{index}" text={item}/> : console.log("task yokk.")}
              </TouchableOpacity>
            )
          })
       }
       </View>
     <AddingBar   
        onText={text => setTask(text)} 
        onPress={() => handleAddTask()} 
        task={task} 
      />
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#0F322B'
  },
  bar_container: {
    backgroundColor: '#96A08B',
    margin: 10,
    borderRadius: 10,
    position: 'relative',
    justifyContent: 'flex-end',
    marginBottom: 20,

  },
  inner_container: {
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
  saveButton: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'orange',
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold'
  }
})