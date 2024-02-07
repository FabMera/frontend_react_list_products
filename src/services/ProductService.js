import axios from "axios";

const URL_BASE = "http://localhost:8080/products";
/* const initProducts = [
    {
        id: 1,
        name: "Product 1",
        description: "Description 1",
        price: 100,
    },
    {
        id: 2,
        name: "Product 2",
        description: "Description 2",
        price: 100,
    },
    {
        id: 3,
        name: "Product 3",
        description: "Description 3",
        price: 100,
    },
];


export const listProducts = () => {
    return initProducts;
} */

export const findAll = async () => {
    try {
        const response = await axios.get(URL_BASE);
        return response;
    } catch (error) {
        console.error(error);
    }
    return null;
}

export const createProduct = async ({ name, description, price }) => {
    try {
        const response = await axios.post(URL_BASE, {
            name,
            description,
            price
        });
        return response;
    } catch (error) {
        console.error(error);
    }
    return undefined;
}

export const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`${URL_BASE}/${id}`);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const updateProduct = async ({ id, name, description, price }) => {
    try {
        const response = await axios.put(`${URL_BASE}/${id}`, {
            name,
            description,
            price

        });
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}