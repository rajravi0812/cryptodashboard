const initial =  "usd";
const setCurrency = (state=initial,action)=>{
    switch (action.type){
        case 'setcurrency':
        let temp=  action.payload;
        if(temp==="usd"){
            return state="usd";
        }
        if(temp==="inr"){
            return state = "inr";
        }
        if(temp==="eth"){
            return state = "eth";
        }
        break;
        default: return state;
    }
}

export default setCurrency;