import React, { useEffect, useState } from "react";
/* import { v4 as uuidv4 } from "uuid"; */

const initialDataForm = {
    id: "",
    name: "",
    description: "",
    price: 0,
};

const ProductForm = ({ handlerAddProduct, productToEdit }) => {
    const [form, setForm] = useState(initialDataForm);

    const { name, description, price } = form;

    //(e) => setForm({ ...form, [e.target.name]: e.target.value }) es lo mismo que:
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() === "" || description.trim() === "" || price <= 0) {
            alert("Todos los campos son obligatorios");
            return;
        }
        handlerAddProduct(form);
        setForm(initialDataForm);
    };

    useEffect(() => {
        if (productToEdit) {
            setForm(productToEdit);
        }
    }, [productToEdit]);


    return (
        <form className="w-75 mx-auto" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">
                    Name Product
                </label>
                <input
                    className="form-control"
                    placeholder="name product"
                    name="name"
                    value={name}
                    type="text"
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">
                    Description Product
                </label>
                <input
                    className="form-control"
                    placeholder="description product"
                    name="description"
                    value={description}
                    type="text"
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">
                    Price Product
                </label>
                <input
                    className="form-control"
                    placeholder="price product"
                    name="price"
                    value={price}
                    type="number"
                    onChange={handleChange}
                />
            </div>

            <button className="btn btn-primary mb-4 w-100" type="submit">
                {productToEdit ? "Edit Product" : "Add Product"}
            </button>
        </form>
    );
};

export default ProductForm;
