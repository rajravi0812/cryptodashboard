const initial = [];
const reducerSidbar = (state=initial,action)=>{
    switch(action.type){
        case "sideBar":
            return state = [...action.payload];
        default : return state;
    }
}
export default reducerSidbar;