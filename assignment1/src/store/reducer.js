import {bucketItemReducer} from "./BucketItemReducer";
import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
    BucketItem : bucketItemReducer
})
