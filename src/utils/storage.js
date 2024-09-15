import AsyncStorage from '@react-native-async-storage/async-storage';

export const getFromStorage = async (key) => {
    return await AsyncStorage.getItem(key)
}

export const addToStorage = async (key, items) => {
    return await AsyncStorage.setItem(key, items);
}

export const clearStorage = async (key) => {
    return await AsyncStorage.removeItem(key)
}