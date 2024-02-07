const ProductGrid = ({
    products,
    handlerRemoveProduct,
    handlerEditProduct,
}) => {
    return (
        <>
            {products.length === 0 ? (
                <div
                    className="alert alert-primary w-50 mx-auto text-center"
                    role="alert"
                >
                    No existen productos para mostrar !
                </div>
            ) : (
                <table className="text-center table table-striped-columns mx-auto w-75">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>
                                    <button
                                        onClick={() =>
                                            handlerRemoveProduct(product.id)
                                        }
                                        className=" btn btn-danger p-1 me-2"
                                    >
                                        delete
                                    </button>
                                    <button
                                        onClick={() =>
                                            handlerEditProduct(product.id)
                                        }
                                        className=" btn btn-warning p-1"
                                    >
                                        edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default ProductGrid;
