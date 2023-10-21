import "./CartWidget.css"
import { Link } from "react-router-dom";
import { useCartContext } from '../../context/CartContext';

export default function CartWidget() {
    const { cart } = useCartContext();
    const getQuantityItems = () => {
        let quantity = 0
        if (cart.items.length > 0) {
            for (let index = 0; index < cart.items.length; index++) {
                quantity += cart.items[index].quantity;
            }
        }

        return quantity;
    }

    let quantity = getQuantityItems();

    return (
        <>
            <Link className="cart" to="/cart" type="button">
                <ion-icon name="cart-outline"></ion-icon>
                {quantity != 0 ? (<span className="top-0 end-0 translate-middle badge rounded-pill bg-danger"> {quantity}</span>) : (<span></span>)}
            </Link>
        </>
    )
}
