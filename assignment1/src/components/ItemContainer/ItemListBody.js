import Groceries from "./Groceries";
import classes from './ItemListBody.module.css'
import ItemInBasket from "./ItemInBasket";

const ItemListBody = () => {
    return (
        <div className={classes.outerContainer}>
            <Groceries></Groceries>
            <ItemInBasket></ItemInBasket>
        </div>
    )
}

export default ItemListBody;