import {ADDITEM, EMPTYBUCKET} from "./GlobalConstantVariable";

const initialState = {
    status : "",
    items : [
        {id:1, name:'Strawberry', count:1},
        {id:6, name:'Carrot', count:1},
        {id:10, name:'Eggs', count:1},
        {id:13, name:'Chicken', count:1},
        {id:17, name:'Rice', count:1}
    ]
}


export const bucketItemReducer = (state = initialState , action) => {


    switch (action.type) {
        case ADDITEM : {
            let updatedItem = state.items;
            const newItem = action.payload;
            let flag = 0;
            for(let i=0;i<updatedItem.length;i++) {
                if(updatedItem[i].id === newItem.id) {
                    updatedItem[i].count++;
                    flag = 1;
                    break;
                }
            }

            if(flag === 0) {
                updatedItem.push(newItem);
            }

            return {
                status : "SUCCESS",
                items : updatedItem
            }
        }
        case EMPTYBUCKET : return{
            status: "SUCCESS",
            items : []
        }
        default : return{
            status : state.status,
            items : state.items
        }
    }

}