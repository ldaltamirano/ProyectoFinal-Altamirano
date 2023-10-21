import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    //creo un estado para controlarme el conteo, cuyo estado inicial es el
    const [count, setCount] = useState(initial);


    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    };

    //agrego al carrito
    const handleAddToCart = () => {
        if (count > 0) {
            onAdd(count);
        }
        setCount(0)
    };

    return (

        <div className="d-flex justify-content-between align-items-center flex-row col-12 my-3 w-100">
            <div className="d-flex justify-content-start">
                <button className="btn btn-primary px-3 py-2 rounded-0" onClick={handleDecrement} disabled={count <= 0}>-</button>
                <input type="text" className="border-2 border-d w-25 text-center text-black mx-1" value={count} readOnly />
                <button className="btn btn-primary px-3 py-2 rounded-0" onClick={handleIncrement} disabled={count >= stock}>+</button>
            </div>
            <div>
                <button className="btn btn-primary px-3 py-2 rounded-0" onClick={handleAddToCart} disabled={count === 0}>Agregar</button>
            </div>
        </div>
    );
}

export default ItemCount;