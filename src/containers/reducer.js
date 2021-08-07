export const reducer = (state, action) => {
    
    if (action === "EVIL") {
        return {
            ...state,
            name: "Darth Vader"
        }
    } else if (action = "GOOD") {
        return {
            ...state,
            name: "Anakin Skywalker"
        }
    } else {
        return state;
    }
}