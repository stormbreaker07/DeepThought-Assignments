import {ADDITEM, EMPTYBUCKET} from "./GlobalConstantVariable";


export const addItemInBucket = (newItem) => {
    return {
        type : ADDITEM,
        payload : newItem
    }
}

export const emptyBucket = () => {
    return {
        type : EMPTYBUCKET
    }
}