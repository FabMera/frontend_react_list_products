import { useEffect, useState } from "react";
import {
    createProduct,
    deleteProduct,
    findAll,
    updateProduct,
} from "../services/ProductService";
import ProductGrid from "./ProductGrid";
import ProductForm from "./ProductForm";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [productToEdit, setProductToEdit] = useState(null);

    const handlerEditProduct = (id) => {
        const product = products.find((p) => p.id === id);
        setProductToEdit(product);
        console.log(product);
    };

    const getProducts = async () => {
        const result = await findAll();
        setProducts(result.data._embedded.products);
    };

    useEffect(() => {
        getProducts();
    }, []);

    const handlerAddProduct = async (product) => {
        if (productToEdit) {
            const response = await updateProduct(product);
            const newProducts = products.map((prod) =>
                prod.id === response.data.id ? response.data : prod
            );
            setProducts(newProducts);
            console.log(newProducts);
            setProductToEdit(null);
            return;
        }
        const response = await createProduct(product);
        setProducts([...products, { ...response.data }]);
    };

    const handlerRemoveProduct = async (id) => {
        const response = await deleteProduct(id);
        const newProducts = products.filter(
            (product) => product.id !== response.data.id
        );
        setProducts(newProducts);
    };

    return (
        <>
            <h1 className="text-center mt-3">Productos </h1>
            <ProductForm
                handlerAddProduct={handlerAddProduct}
                productToEdit={productToEdit}
            />
            <ProductGrid
                handlerEditProduct={handlerEditProduct}
                handlerRemoveProduct={handlerRemoveProduct}
                products={products}
            />
        </>
    );
};

export default Product;
