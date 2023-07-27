const initialValue = "bitcoin";
const changeCrypto = (state=initialValue,action)=>{
    switch(action.type){
        case 'switchCrypto':
            let temp = action.payload;
            if(temp==="1"){
                return state = "bitcoin";
            }if(temp === "2"){
                return state = "ethereum";
            }if(temp==="3"){
                return state = "dogecoin";
            }if(temp==="4"){
                return state = "binancecoin";
            }if(temp==="5"){
                return state = "ripple";
            }if(temp==="6"){
                return state = "cardano";
            }if(temp==="7"){
                return state = "tron";
            }if(temp==="8"){
                return state = "solana";
            }if(temp==="9"){
                return state = "litecoin";
            }if(temp==="10"){
                return state = "polkadot";
            }if(temp==="11"){
                return state = "matic-network";
            }if(temp ==="12"){
                return state = "wrapped-bitcoin";
            }if(temp==="13"){
                return state = "shiba-inu";
            }if(temp==="14"){
                return state = "avalanche-2";
            }if(temp==="15"){
                return state = "uniswap";
            }if(temp==="16"){
                return state = "chainlink";
            }if(temp==="17"){
                return state = "stellar";
            }if(temp==="18"){
                return state = "monero";
            }if(temp==="19"){
                return state = "cosmos";
            }if(temp==="20"){
                return state = "ethereum-classic";
            }
            break;
            default:
            return state;
            
    }

}
export default changeCrypto;