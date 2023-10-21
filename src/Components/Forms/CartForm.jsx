import { useEffect, useState } from 'react';
import { useCartContext } from "../../Context/CartContext";
import { collection, getFirestore, addDoc, getCountFromServer } from "firebase/firestore"
import { generatePath, useNavigate } from "react-router-dom";

export default function CartForm() {
    const { cart, cleanCart } = useCartContext();
    const navigate = useNavigate();

    const [inputFields, setInputFields] = useState({
        email: "",
        confirmEmail: "",
        name: "",
        lastName: "",
        phone: ""
    });

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [orderId, setOrderId] = useState(false);


    const validateValues = (inputValues) => {
        let errors = {};
        if (inputValues.email != inputValues.confirmEmail) {
            errors.confirmEmail = "Los emails son distintos";
        }
        if (inputValues.name == "") {
            errors.name = "Debes ingresar tu nombre";
        }

        if (inputValues.lastName == "") {
            errors.lastName = "Debes ingresar tu apellido";
        }

        if (inputValues.phone == "") {
            errors.phone = "Debes ingresar tu telefono";
        }
        return errors;
    };

    const handleChange = (e) => {
        e.preventDefault();
        setInputFields({ ...inputFields, [e.target.name]: e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validateValues(inputFields));
        setSubmitting(true);
    };

    const sendOrder = (inputFields, ordersCollection, id) => {
        const order = {
            id: id,
            buyer: {
                name: inputFields.name,
                lastName: inputFields.lastName,
                email: inputFields.email,
                phone: inputFields.phone,
            },
            items: cart.items,
            fecha: new Date(),
            status: "Orden generada"
        };

        addDoc(ordersCollection, order).then(({ i }) => setOrderId(i));
        cleanCart();
        localStorage.removeItem("cart")
        navigate(generatePath("/finishedorder/:id", { id }));

    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            const db = getFirestore()
            const ordersCollection = collection(db, "orders");
            getCountFromServer(ordersCollection)
                .then(
                    snapshot => sendOrder(inputFields, ordersCollection, snapshot.data().count))
        }
    });


    return (
        <div className='row d-flex pt-3 mt-4 summary'>
            <h2 className='fs-4 py-2'>Comprá sin registrarte</h2>
            <form className='form' onSubmit={handleSubmit}>
                <input type="email" name="email" id="email" placeholder="Email" className='form-control mt-2' onChange={handleChange} value={inputFields.email} />
                <input type="text" name="confirmEmail" id="confirmEmail" placeholder="Confirmar Email" className='form-control mt-2' onChange={handleChange} value={inputFields.confirmEmail} />
                {errors.confirmEmail ? <p className="error">{errors.confirmEmail}</p> : <></>}

                <input type="text" name="name" id="name" placeholder='name' className='form-control mt-2' onChange={handleChange} value={inputFields.name} />
                {errors.name ? <p className="error">{errors.name}</p> : <></>}

                <input type="text" name="lastName" id="lastName" placeholder='lastName' className='form-control mt-2' onChange={handleChange} value={inputFields.lastName} />
                {errors.lastName ? <p className="error">{errors.lastName}</p> : <></>}

                <input type="text" name="phone" id="phone" placeholder='1123456789' className='form-control mt-2' onChange={handleChange} value={inputFields.phone} />
                {errors.phone ? <p className="error">{errors.phone}</p> : <></>}

                <input type="submit" value="Finalizar Compra" className='btn btn-primary col-12 my-4 p-3' />
            </form>
        </div>
    )
}