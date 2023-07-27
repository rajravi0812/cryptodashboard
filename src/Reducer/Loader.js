

let initialstate={
    loaded:false,
    succed:false,
    err:false,
};

export const loadingReducer = (state=initialstate,action)=>{
    switch (action.type){
        case 'loading':
            return {...state, loaded:action.payload};
        case 'success':
            return {...state, succed:action.payload};
        case 'error':
            return {...state, err:action.payload};
        default:
            return state;
    }
        

}



let initialstateBar={
    loadedBar:false,
    succedBar:false,
    errBar:false,
};

export const loadingSidebar = (state=initialstateBar,action)=>{
    switch (action.type){
        case 'loadingBar':
            return {...state, loaded:action.payload};
        case 'successBar':
            return {...state, succed:action.payload};
        case 'errorBar':
            return {...state, err:action.payload};
        default:
            return state;
    }
        

}

