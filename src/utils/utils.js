export const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
};
export const MILE_VALUE = 1.609344
export const kilometerToMiles = (km) => {
    return Math.round(km / MILE_VALUE)
}

export const milesToKilometer = (miles) => {
    return Math.round(miles * MILE_VALUE)
}