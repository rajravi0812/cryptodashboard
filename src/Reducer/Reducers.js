

const initial = "1";
const gSwitch = (state=initial,action)=>{
    switch (action.type){
        case "switchGraph":
            let value = action.payload;
            return value;
        default: return state;
    }
}

export default gSwitch;


