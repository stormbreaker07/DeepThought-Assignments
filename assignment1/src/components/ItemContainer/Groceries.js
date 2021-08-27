import '../icon.css';
import classes from './Groceries.module.css';
import {connect} from "react-redux";
import {addItemInBucket} from "../../store/action";


const groceryItems = [
    {id:1, name:'Strawberry'},
    {id:2, name:'Blueberry'},
    {id:3, name:'Orange'},
    {id:4, name:'Banana'},
    {id:5, name:'Apple'},
    {id:6, name:'Carrot'},
    {id:7, name:'Celery'},
    {id:8, name:'Mushroom'},
    {id:9, name:'Green Pepper'},
    {id:10, name:'Eggs'},
    {id:11, name:'Cheese'},
    {id:12, name:'Butter'},
    {id:13, name:'Chicken'},
    {id:14, name:'Beef'},
    {id:15, name:'Pork'},
    {id:16, name:'Fish'},
    {id:17, name:'Rice'},
    {id:18, name:'Pasta'},
    {id:19, name:'Bread'}
];


const Groceries = (props) => {

    const onItemClick = (item) => {
        const data = {
        id:item.id,
        name:item.name,
        count:1
        }
        props.addItem(data);
    }

    const list = groceryItems.map((item) => <li key={item.id} onClick={() => onItemClick(item)} >{item.name}</li>)

    return(
        <div className={classes.outerContainer}>
            <div className={classes.innerContainer}>
                    <h3>
                        <i className="fa fa-leaf" aria-hidden="true"></i> Groceries
                    </h3>
            </div>
            <ul className={classes.list}>
                {list}
            </ul>
        </div>
    )


}

const mapDispatchToProps = (dispatch) => {
        return {
            addItem : (item) => dispatch(addItemInBucket(item))
        }
}

export default connect(null , mapDispatchToProps)(Groceries);