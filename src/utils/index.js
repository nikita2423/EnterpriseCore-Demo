export const validKeys = ["ID Nation", "Nation", "ID Year", "Year", "Population", "Slug Nation"]

export const giveDefaultValues = (lastData) => {
    const defaultValues = {};
    if (lastData) {
        validKeys.forEach(key => {
            defaultValues[key] = lastData[key]?.value;
        })
    }
    return defaultValues
}