
//calling actionn of switch between graphs
export const graphSwitch =(data)=>{
    return {
        type:"switchGraph",
        payload:data,
    }
}

//calling action for coins list
export const sidbarApi = (data)=>{
    return {
        type:"sideBar",
        payload:data,
    }
}
//calling action for change currency for coins list 
export const currency=(data)=>{
    return {
        type:'setcurrency',
        payload:data
    }
}
//calling action for one day api data which show in graph
export const oneAction =()=>{
    return {
        type:'oneD',
    }
}
//calling action for seven day api data which show in graph
export const weekAction=()=>{
    return {
        type:'sevenD',
    }
}
//calling action for thirty day api data which show in graph
export const monthAction=()=>{
    return {
        type:'thirtyD',
    }
}
//calling action for three month api data which show in graph
export const threeAction=()=>{
    return {
        type:'nintyD',
    }
}
//calling action for six month api data which show in graph
export const sixAction=()=>{
    return {
        type:'oneEightyD',
    }
}
//calling action for one year api data which show in graph
export const yearAction=()=>{
    return {
        type:'threeSixtyD',
    }
}
//action for switch graphs according to switch coins.
export const cryptoSwitch = (data)=>{
    return {
        type:'switchCrypto',
        payload:data,
    }
}
//action for loader1
export const setLoading = (val)=>{
    return {
        type:'loading',
        payload:val,
    }
}
//action for loader1
export const setSuccess = (val)=>{
    return {
        type:'success',
        payload:val,
    }
}
//action for loader1
export const setError = (val)=>{
    return {
        type:'error',
        payload:val,
    }
}
//action for loader2
export const setLoadingBar = (val)=>{
    return {
        type:'loadingBar',
        payload:val,
    }
}
//action for loader2
export const setSuccessBar = (val)=>{
    return {
        type:'successBar',
        payload:val,
    }
}
//action for loader2
export const setErrorBar = (val)=>{
    return {
        type:'errorBar',
        payload:val,
    }
}
//action for currency converter one coin value to another
export const convertCurrency = (val)=>{
    return {
        type:'currency',
        payload:val,
    }
}

