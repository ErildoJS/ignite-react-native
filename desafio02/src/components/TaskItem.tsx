import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image, TextInput } from "react-native";
import trashIcon from '../assets/icons/trash/trash.png'
import trashIcon from '../assets/icons/trash/trash.png'
import trashIcon from '../assets/icons/trash/trash.png'
import Icon from 'react-native-vector-icons/Feather';


interface TaskItemProps {
    toggleTaskDone: (id: number) => void;
    removeTask: (id: number) => void;
}

export function TaskItem({toggleTaskDone, removeTask}: TaskItemProps) {
    const [isEditingTask, setIsEditingTask] = useState(false)
    const [taskEdited, setTaskEdited] = useState(task.title)
    const textInputRef = useRef<TextInput>(null)

    function handleStartEditing() {
        setIsEditingTask(true)
    }

    function handleCancelEditing() {
        setTaskEdited(task.title)
        setIsEditingTask(false)
    }

    function handleSubmitEditing() {
        editTask(task.id, taskEdited)
        setIsEditingTask(false) 
    }

    useEffect(() => {
        if(textInputRef.current) {
            if(isEditingTask) {

                textInputRef.current?.focus()
            }else {

                textInputRef.current?.blur()
            }
        }
    }, [isEditingTask])

    return (
        <>
        <View>
              <TouchableOpacity
                testID={`button-${index}`}
                activeOpacity={0.7}
                style={styles.taskButton}
                //TODO - use onPress (toggle task) prop
                onPress={() => toggleTaskDone(item.id)}
              >
                <View 
                  testID={`marker-${index}`}
                  //TODO - use style prop 
                  style={item.done ? styles.taskMarkerDone : styles.taskMarker}
                >
                  { item.done && (
                    <Icon 
                      name="check"
                      size={12}
                      color="#FFF"
                    />
                  )}
                </View>

                <TextInput 
                  value={taskEdited}
                  onChangeText={text => setTaskEdited(text)}
                  editable={isEditingTask}
                  onSubmitEditing={handleSubmitEditing}
                  ref={textInputRef}
                  //TODO - use style prop
                  style={task.done ? styles.taskTextDone : styles.taskText}
                >
                  {item.title}
                </TextInput>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              testID={`trash-${index}`}
              style={{ paddingHorizontal: 24 }}
              //TODO - use onPress (remove task) prop
              onPress={() => removeTask(item.id)}>

              <View>
                {isEditingTask ? (
                    <TouchableOpacity>
                        <Image source={trashIcon} onProgress={handleCancelEditing} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity>
                        <Image source={trashIcon} onProgress={handleStartEditing} />
                    </TouchableOpacity>
                )}
                <View style={{width: 1, height: 24, backgroundColor: 'rgba(196, 196, 196, 0.24)' }}/>
                <TouchableOpacity
                    disabled={isEditingTask}
                    onPress={() => removeTask(task.id)}
                >
                        <Image source={trashIcon} style={{ opacity: isEditingTask ? 0.2 : 1 }} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            </>
    )
}

const styles = StyleSheet.create({
    taskButton: {
      flex: 1,
      paddingHorizontal: 24,
      paddingVertical: 15,
      marginBottom: 4,
      borderRadius: 4,
      flexDirection: 'row',
      alignItems: 'center'
    },
    taskMarker: {
      height: 16,
      width: 16,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#B2B2B2',
      marginRight: 15,
      alignItems: 'center',
      justifyContent: 'center'
    },
    taskText: {
      color: '#666',
      fontFamily: 'Inter-Medium'
    },
    taskMarkerDone: {
      height: 16,
      width: 16,
      borderRadius: 4,
      backgroundColor: '#1DB863',
      marginRight: 15,
      alignItems: 'center',
      justifyContent: 'center'
    },
    taskTextDone: {
      color: '#1DB863',
      textDecorationLine: 'line-through',
      fontFamily: 'Inter-Medium'
    }
  })