const dayone = "10";
const dOneReducer = (state=dayone,action)=>{
    switch (action.type){
        case "oneD":
            return state= "1"; 
        case 'sevenD':
            return state = "7";
        case 'thirtyD':
            return state = '30';
        case 'nintyD':
            return state = '90';
        case 'oneEightyD':
            return state = '180';
        case 'threeSixtyD':
            return state = '365';
        default: return state;
    }
}

export default dOneReducer;