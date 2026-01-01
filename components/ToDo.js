import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Checkbox } from 'expo-checkbox';
import React, { useState } from 'react';

export default function ToDo() {

    const [tasks, setTasks] = useState([]);

    const [taskText, setTaskText] = useState('');

    const activeTasks = tasks.filter(task => !task.completed);
    const completedTasks = tasks.filter(task => task.completed);

    const toggleTask = (id) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        )
    };

    const addTask = (text) => {
        if (!text.trim()) return;

        setTasks(prev => [
            ...prev,
            { id: Date.now(), text, completed: false }
        ]);

        setTaskText(''); // clear input
    }

    const deleteTask = (id) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    };

    return (
        <SafeAreaView className="flex-1 justify-center p-5">

            <Text className="text-center text-4xl font-bold text-blue-600">Widely Known To-Do App</Text>

            <View className="my-5">
                <TextInput
                    placeholder="Type your task here..."
                    className="border-b-2 border-gray-400 py-3 text-lg mb-4"
                    placeholderTextColor="#9ca3af"
                    value={taskText}
                    onChangeText={setTaskText}
                />

                <TouchableOpacity className="bg-blue-600 py-3 rounded-lg items-center"
                    onPress={() => addTask(taskText)}>
                    <Text className="text-white text-lg font-semibold">
                        Add Task
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Line */}
            <View className="border-b-2 border-gray-400 my-5" />

            {/* Active Tasks */}
            <View className=" p-1 ">
                <Text className="text-2xl font-bold text-green-700 my-3">Active Items</Text>
                {activeTasks.length === 0 && (
                    <Text className="text-gray-800 text-xl text-center my-6">
                        No tasks yet. Add one!
                    </Text>
                )}

                {activeTasks.map((task) => (
                    <View
                        key={task.id}
                        className="flex-row items-center justify-between my-2"
                    >
                        <View className="flex-row items-center flex-1">
                            {/* Checkbox */}
                            <Checkbox
                                value={task.completed}
                                onValueChange={() => toggleTask(task.id)}
                                color={task.completed ? '#16a34a' : undefined}
                                className="mr-3"
                            />

                            {/* Task Text */}
                            <Text className="text-xl">
                                {task.text}
                            </Text>
                        </View>

                        {/* Right: Delete Button */}
                        <TouchableOpacity
                            onPress={() => deleteTask(task.id)}
                            className="border border-red-500 px-3 py-1 rounded-md"
                        >
                            <Text className="text-red-600 text-sm font-semibold">
                                Delete
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>

            {/* Line */}
            <View className="border-b-2 border-gray-400 my-5" />

            <View className="p-1">
                <Text className="text-2xl font-bold text-green-700 my-3">Completed Tasks</Text>
                {completedTasks.length === 0 && (
                    <Text className="text-gray-800 text-xl text-center my-6">
                        No completed tasks
                    </Text>
                )}

                {completedTasks.map((task) => (
                    <View
                        key={task.id}
                        className="flex-row items-center justify-between my-2"
                    >
                        <View className="flex-row items-center flex-1">
                            {/* Checkbox */}
                            <Checkbox
                                value={task.completed}
                                onValueChange={() => toggleTask(task.id)}
                                color={task.completed ? '#16a34a' : undefined}
                                className="mr-3"
                            />

                            {/* Task Text */}
                            <Text className="text-xl line-through text-gray-500">
                                {task.text}
                            </Text>
                        </View>

                        {/* Right: Delete Button */}
                        <TouchableOpacity
                            onPress={() => deleteTask(task.id)}
                            className="border border-red-500 px-3 py-1 rounded-md"
                        >
                            <Text className="text-red-600 text-sm font-semibold">
                                Delete
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>



        </SafeAreaView>
    )
}