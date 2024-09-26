import { randomUUID } from "expo-crypto";

export const formatDate = (date) => {
    const tempDate = new Date(date)
    const day = String(tempDate.getDate()).padStart(2, '0');
    const month = String(tempDate.getMonth() + 1).padStart(2, '0');
    const year = tempDate.getFullYear();

    return `${day}.${month}.${year}`;
};
export const MILE_VALUE = 1.609344
export const kilometerToMiles = (km) => {
    return (km / MILE_VALUE).toFixed(2);
};

export const milesToKilometer = (miles) => {
    return (miles * MILE_VALUE).toFixed(2);
};

export const generateId = () => {
    return randomUUID()
}