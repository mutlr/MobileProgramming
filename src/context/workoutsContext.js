import { createContext, useContext, useEffect, useState } from "react";
import UnitContext from "./unitContext";
import { kilometerToMiles, MILE_VALUE } from "../utils/utils";

const initialWorkouts = [
    {
        type: "Run",
        distance: 20,
        duration: 60,
        date: new Date(),
    },
    {
        type: "Ski",
        distance: 20,
        duration: 60,
        date: new Date(),
    },
    {
        type: "Swim",
        distance: 20,
        duration: 60,
        date: new Date(),
    }
]
const WorkoutsContext = createContext()

export const WorkoutsProvider = ({ children }) => {
    const { unit } = useContext(UnitContext)
    const [workouts, setWorkouts] = useState(initialWorkouts)
    const [summary, setSummary] = useState([])

    useEffect(() => {
        setSummary(Array(statsSummary()))
    }, [workouts, unit])
    const addToList = (workout) => {
        const workoutObject = {
            type: workout.sport,
            duration: workout.duration,
            distance: unit === 'km' ? workout.distance : workout.distance * MILE_VALUE,
            date: workout.date,
        }
        setWorkouts(workouts.concat(workoutObject))
    }

    const statsSummary = () => {
        return workouts.reduce((accumulator, item) => {
            const type = item.type
            if (!accumulator[type]) {
                accumulator[type] = 0
            }
            accumulator[type] += unit === 'km' ? item.distance : kilometerToMiles(item.distance)
            return accumulator
        }, {})
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