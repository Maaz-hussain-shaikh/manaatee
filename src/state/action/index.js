export const adding = (price, quantity) => {
    return {
        type: "add",
        paylod: price,
        paylod2: quantity
    }
}
export const dicrement = (price, quantity) => {
    return {
        type: "dicrement",
        paylod: price,
        paylod2: quantity
    }
}