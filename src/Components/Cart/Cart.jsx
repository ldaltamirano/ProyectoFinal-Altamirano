
import { Link } from 'react-router-dom';
import { useCartContext } from "../../Context/CartContext";
import CartForm from '../Forms/CartForm';
import CartItems from './CartItems';
import "./Cart.css"


export default function Cart() {
    const { cart } = useCartContext();

    return (
        <div className="container">
            {cart.items.length === 0 ?
                (
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className="jumbotron align-self-center">
                            <p className="fs-2">
                                Aún no hay items en el carrito!
                            </p>
                            <p className="lead pb-3 pt-3">
                                Continuá eligiendo productos desde aquí:
                            </p>
                            <Link className="btn btn-primary" to="/">Seguir navegando</Link>
                        </div>
                    </div>
                ) :
                (
                    <div className="align-self">
                        <h2 className="fs-2 mt-3">Mi carrito</h2>
                        <hr />
                        <div className="d-flex flex-column justify-content-between align-items-start flex-lg-row ">
                            <CartItems />
                            <aside className='px-2'>
                                <div className=' row d-flex mt-5 py-3 mt-lg-0 summary'>
                                    <div className='float-start'>
                                        Subtotal
                                        <span className='float-end'>U$S {cart.total.toFixed(2)}</span>
                                    </div>
                                    <div className='float-start pb-3'>
                                        Descuentos
                                        <span className='float-end'>U$S 0.00</span>
                                    </div>
                                    <hr className='container' />
                                    <div className='float-start fw-bold'>
                                        Total
                                        <span className='float-end'>U$S {cart.total.toFixed(2)}</span>
                                    </div>
                                </div>
                                <CartForm />
                            </aside>
                        </div>
                    </div>
                )
            }
        </div>
    )
}