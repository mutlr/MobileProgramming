import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addToStorage, getFromStorage } from "../utils/storage";
const STORAGE_KEY = "unit"
const UnitContext = createContext()

export const UnitsProvider = ({ children }) => {
    const [unit, setUnit] = useState('km')

    useEffect(() => {
        const getUnitData = async () => {
            try {
                const value = await getFromStorage(STORAGE_KEY)
                if (value) {
                    setUnit(value)
                } else {
                    setUnit('km')
                }
            } catch (error) {
                console.error("Erroring getting unit key: ", error)
            }
        }
        getUnitData()
    }, [])

    const changeUnit = async (unit) => {
        try {
            await addToStorage(STORAGE_KEY, unit)
            setUnit(unit)
        } catch (e) {
            console.error("Error changing unit: ", e)
        }

    }
    return (
        <UnitContext.Provider value={{
            unit,
            changeUnit
        }}>
            {children}
        </UnitContext.Provider>
    )
}

export default UnitContext