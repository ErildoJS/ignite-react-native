import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const findTask = tasks.find(function(task){
      task.title === newTaskTitle
    })
    if(findTask) {
      return Alert.alert('Task já cadastrada', 'Você não pode cadastrar uma task com o mesmo nome')
    }
    //TODO - add new task
    setTasks(function(prevState) {
      return [
        ...prevState,
        {
          id: new Date().getTime(),
          title: newTaskTitle,
          done: false
        }
      ]
    })
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    const newTask = tasks.map(function(task) {
        if(task.id === id) {
          task = {
            ...task,
            done: !task.done
          }
        }
        return task
    })
    setTasks(newTask)
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    Alert.alert('Remover item', 'Tem certeza que vc quer remover esse item?', [
      {
        style: 'cancel',
        text: 'Nao'
      },
      {
        style: 'destructive',
        text: 'Sim',
        onPress: () => {
          const findIfTaskAlreadyExistsAndRemove = tasks.filter(function(task) {
            return task.id !== id
          })
          setTasks(findIfTaskAlreadyExistsAndRemove)
        }
      }
    ])
  }

  function handleEditTask(taskId: number, taskNewTitle: string) {
    const newTask = tasks.map(function(task){
      if(task.id === taskId) {
        task = {
          ...task,
          title: taskNewTitle
        }
      }
      return task
    })
    setTasks(newTask)
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
        editTask={handleEditTask}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})