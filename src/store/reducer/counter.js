export const counter = (state=0,action) =>{
    debugger;
    switch(action.type){
        case "increment":
            state = state+1;
            break;
        case "decrement":
            state = state - 1
            break
        case "multiply_with_two":
            state = state*2;
            break;
    }
    return state;
}

export const user = (state={},action) =>{
    switch(action.type){
        case "add_user":
            state = {userid:"1",name:"usama"};
            break;
        case "remove":
            state = {}
            break
    }
    return state;
}
