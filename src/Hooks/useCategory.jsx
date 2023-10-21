import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const useCategory = (categoryId) => {
    const [category, setCategory] = useState(-1);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const db = getFirestore();
        const q = query(collection(db, "category"), where("id", "==", parseInt(categoryId)));
        getDocs(q)
            .then((snapShot) => {
                setCategory(snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))[0]);
                setLoading(false)
            })
            .catch(error => console.log(error.message))
    }, [categoryId]);

    return { category, loading };
}

export default useCategory;