export const isEmpty = (value) => {
    if (value) {
        return undefined
    }
    return('Ввод поля обязательный')
}

export const maxLengthCreator = (length) => (value) => {
    if(value.length > 10) return (`Максимальное количество символов не может превышать ${length} символов`);
    return undefined
}
