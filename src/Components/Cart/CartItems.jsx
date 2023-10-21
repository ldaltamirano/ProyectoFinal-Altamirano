
import { useCartContext } from "../../Context/CartContext";
import CartForm from '../Forms/CartForm';
import "./Cart.css"


export default function CartItems() {
    const { cart, removeToCart, cleanCart } = useCartContext();

    const handleToRemove = (it) => {
        removeToCart(it);

    };

    const handleCleanCart = () => {
        cleanCart();
    };

    return (
        <div className="cart-items">
            {
                cart.items.map((it) => (
                    <div className="d-flex flex-row flex-lg-row mt-3 mb-3" key={it.id}>
                        <img
                            src={it.thumbnail}
                            className="img-fluid col-4"
                        />
                        <div className='ms-3 col-4 col-lg-5'>
                            <h3><strong>{it.title.length > 50 ? it.title.slice(0, 50).trim() + "..." : it.title}</strong></h3>
                            <div className='d-flex justify-content-start align-items-start flex-column flex-lg-row justify-content-lg-between'>
                                <span className='price'>U$S {it.price} x {it.quantity} un.</span>
                            </div>
                        </div>
                        <span className='subtotal col-3 col-lg-2 text-center'>U$S {(it.price * it.quantity).toFixed(2)}</span>
                        <a onClick={() => handleToRemove(it)} ><ion-icon name="trash-outline"></ion-icon></a>
                    </div>
                )
                )
            }
            <hr className='col-12' />
            <div className="cleanCart">
                <span onClick={handleCleanCart}>Vaciar carrito</span>
            </div>

        </div>
    )
}