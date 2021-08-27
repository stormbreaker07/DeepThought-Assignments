import '../icon.css';
import classes from './ItemInBasket.module.css';
import {connect} from "react-redux";
import {emptyBucket} from "../../store/action";
import {bucketItemReducer} from "../../store/BucketItemReducer";


const ItemInBasket = (props) => {

   const onClickItemHandler = (itemId) => {
       const decoration = document.getElementById(itemId).style.textDecorationLine;
       decoration === "line-through" ?  document.getElementById(itemId).style.textDecorationLine = "none" :
           document.getElementById(itemId).style.textDecorationLine = "line-through";

   }


    let itemInBucket;
if(props.bucketItems.items.length >0) {
     itemInBucket = props.bucketItems.items.map((item) => <li key={item.id} id={item.id} style={{"text-decoration-line" : "none"}} onClick={() => {onClickItemHandler(item.id)}}  >{item.count + " " + item.name}</li>)
}
else {
    itemInBucket = <li>Your basket is empty!</li>;
}
   const onDeleteClickHandler = () => {
     props.emptyBucket();
   }


    return(
        <div className={classes.outerContainer}>
            <div className={classes.innerContainer}>
                <h3><i className="fa fa-shopping-basket" aria-hidden="true"></i> Basket</h3>
                <h3 className="clearBasket" onClick={onDeleteClickHandler}><i className="fa fa-trash deleteButton" aria-hidden="true"></i></h3>
            </div>
            <ul className={classes.list}>
                {itemInBucket}
            </ul>
        </div>
    )


}

const mapStateToProps = (state , ownProps) => {
    return {
        ...ownProps,
        bucketItems : state.BucketItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        emptyBucket : () => dispatch(emptyBucket())
    }
}


export default connect(mapStateToProps ,mapDispatchToProps )(ItemInBasket);