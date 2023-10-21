import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(localStorage.getItem('cart') != undefined ? JSON.parse(localStorage.getItem('cart')) : { items: [], total: 0 });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const addToCart = (product) => {
        let prod = cart.items.find(p => p.id == product.id);
        if (prod) {
            product.quantity += prod.quantity;
            cart.total -= prod.price * prod.quantity;
            cart.items = cart.items.filter(p => p.id != product.id);
            setCart((prevCart) => ({
                ...prevCart,
                items: [...prevCart.items, product],
                total: prevCart.total + product.price * product.quantity
            }))
        } else {
            setCart((prevCart) => ({
                ...prevCart,
                items: [...prevCart.items, product],
                total: prevCart.total + product.price * product.quantity
            }))
        }
    }

    const removeToCart = (product) => {
        let prod = cart.items.find(p => p.id == product.id);
        if (prod) {
            setCart((prevCart) => ({
                ...prevCart,
                items: [...prevCart.items.filter(p => p.id != product.id)],
                total: prevCart.total - prod.price * prod.quantity
            }))
        }
    }

    const cleanCart = () => {
        setCart(({
            items: [], total: 0
        }))

    }

    return (
        // <CartContext.Provider value={{ cart, addToCart, removeToCart, clearCart }}>
        <CartContext.Provider value={{ cart, addToCart, removeToCart, cleanCart }}>
            {children}
        </CartContext.Provider>
    )


}
export default CartProvider;