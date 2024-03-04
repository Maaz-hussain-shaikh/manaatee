const changeThenumber = (state = 0, action) => {
    if (action.type === "add") {
        return state = action.paylod
    } else if (action.type === "dicrement") {
        return state - action.paylod

    } else {
        return state
    }

}
export default changeThenumber;