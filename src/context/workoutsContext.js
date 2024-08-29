import { createContext, useState } from "react";

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
    const [workouts, setWorkouts] = useState(initialWorkouts)
    const addToList = (workout) => {
        const workoutObject = {
            type: workout.sport,
            duration: workout.duration,
            distance: workout.distance,
            date: workout.date
        }
        setWorkouts(workouts.concat(workoutObject))
    }
    return (
        <WorkoutsContext.Provider value={{
            workouts,
            addToList,
        }}>
            {children}
        </WorkoutsContext.Provider>
    )
}

export default WorkoutsContext