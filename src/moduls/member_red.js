const initalState = {
    login : {id:"", pwd:""},
    register : {id:"", pwd:"", name:"", addr:""},
    data : null
}
const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_INPUT":
            console.log("state : ", state)
            console.log("action : ", action)
            return {...state, [action.form] : {...state[action.form],   [action.name]: action.value}
            };
        case "LIST" : return {...state, data : action.data }
        default:
            return state;
    }
}
export {initalState, reducer}