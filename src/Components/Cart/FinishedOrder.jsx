
import { Link, useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { useEffect, useState } from 'react';
import "./FinishedOrder.css"
export default function FinishedOrder() {
    const { id } = useParams();
    const [order, setOrder] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const q = query(collection(db, "orders"), where("id", "==", parseInt(id)));
        // const q = query(collection(db, "orders"));
        getDocs(q)
            .then((snapShot) => {
                setOrder(snapShot.docs.map((doc) => ({ ...doc.data() }))[0]);
                setLoading(false)
            })
            .catch(error => console.log(error.message))
    }, [id]);

    if (loading)
        return (
            <>
                <div className="spinner-border my-5" role="status">
                </div>
            </>
        )
    return (
        <div>
            <div className="jumbotron aceptada">
                <img src="https://cdn0.iconfinder.com/data/icons/shopping-extras-set-1/512/11-512.png" alt="cartOk" className="img-fluid col-3" />
                <div className='py-5'>
                    <h2 className='py-2'>{order.buyer.name}, ¡Tu compra ha sido generada!</h2>
                    <p className='py-2'>El nro de orden es #{order.id}</p>
                    <p className='py-2'>Muchas gracias por comprar en nuestro portal.<br />
                        Pronto recibirás un email en {order.buyer.email}con los detalles de la operación</p>

                    <Link className="btn btn-primary my-2" to="/">Seguir navegando</Link>
                </div>
            </div>
        </div>
    )
}