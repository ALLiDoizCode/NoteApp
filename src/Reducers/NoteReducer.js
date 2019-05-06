export const noteReducer = (state, action) => {
    console.log(state)
    return action
};

export const noteInitialState = {
    current:{},
    notes:[]
};
