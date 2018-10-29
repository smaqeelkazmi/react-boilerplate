import { createStore } from "redux";

const initReducer = (state, action) => {
    switch (action.type) {
        case 'INIT':
            console.log(`${action.payload.page} service initiated`);
            break;
    
        default:
            break;
    }
    return state;
}

const store = createStore(initReducer, {});

export default store;