import { createContext, useContext, useEffect, useState } from "react";
import UnitContext from "./unitContext";
import { generateId, kilometerToMiles, MILE_VALUE, milesToKilometer } from "../utils/utils";
import { addToStorage, clearStorage, getFromStorage } from "../utils/storage";
const STORAGE_KEY = "workouts"
const initialWorkouts = [
    {
        type: "Run",
        distance: 20,
        duration: 60,
        date: new Date(),
        id: generateId(),
    },
    {
        type: "Ski",
        distance: 20,
        duration: 60,
        date: new Date(),
        id: generateId(),
    },
    {
        type: "Swim",
        distance: 20,
        duration: 60,
        date: new Date(),
        id: generateId(),
    }
]
const WorkoutsContext = createContext()

export const WorkoutsProvider = ({ children }) => {
    const { unit } = useContext(UnitContext)
    const [workouts, setWorkouts] = useState(initialWorkouts)
    const [summary, setSummary] = useState([])
    useEffect(() => {
        getFromStorage(STORAGE_KEY).then(result => {
            if (result) {
                setWorkouts(JSON.parse(result))
            }
        }).catch(error => console.log("Error getting workouts: ", error))
    }, [])
    useEffect(() => {
        setSummary(statsSummary())
    }, [workouts, unit])
    const addToList = async (workout) => {
        const workoutObject = {
            type: workout.sport,
            duration: workout.duration,
            distance: unit === 'km' ? workout.distance : milesToKilometer(workout.distance),
            date: workout.date,
            id: generateId(),
        }
        try {
            const newList = [workoutObject, ...workouts]
            setWorkouts(newList)
            await addToStorage(STORAGE_KEY, JSON.stringify(newList))
        } catch (error) {
            console.log("Error adding workout to storage", error)
        }
    }

    const statsSummary = () => {
        const summaryObject = workouts.reduce((accumulator, item) => {
            const type = item.type
            if (!accumulator[type]) {
                accumulator[type] = 0
            }
            const distance = unit === 'km' ? item.distance : kilometerToMiles(item.distance)
            accumulator[type] += Number(distance)
            return accumulator
        }, {})

        return Object.entries(summaryObject).map(([type, distance]) => ({
            type,
            distance,
        }))
    }
    return (
        <WorkoutsContext.Provider value={{
            workouts,
            addToList,
            summary
        }}>
            {children}
        </WorkoutsContext.Provider>
    )
}

export default WorkoutsContext