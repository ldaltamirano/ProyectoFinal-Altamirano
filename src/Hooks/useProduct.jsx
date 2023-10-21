import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const useProducts = (categoryId) => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!products) {
            const db = getFirestore();
            const q = categoryId != undefined && categoryId != -1
                ? query(collection(db, "products"), where("category", "==", categoryId))
                : query(collection(db, "products"), where("category", ">", 0));
            getDocs(q)
                .then((snapShot) => {
                    setProducts(snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
                    setLoading(false)
                })
                .catch(error => console.log(error.message))
        }
    }, [categoryId, products]);

    return { products, loading };
}

export default useProducts;