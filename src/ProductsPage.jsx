import axios from "axios";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { Modal } from "./Modal";
import { ProductsShow } from "./ProductsShow";

export function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisibile] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  // Get cart functions from the Layout context
  const { onAddToCart } = useOutletContext();

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate");
    axios.post("/products.json", params)
      .then((response) => {
        setProducts([...products, response.data]);
        successCallback();
      });
  };

  const handleShow = (product) => {
    console.log("handleShow", product);
    setIsProductsShowVisibile(true);
    setCurrentProduct(product);
  };

  useEffect(handleIndex, []);

  return (
    <main className="container my-4">
      <div className="row mb-4">
        <div className="col">
          <ProductsNew onCreate={handleCreate} />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <ProductsIndex
            products={products}
            onShow={handleShow}
            onAddToCart={onAddToCart}
          />
        </div>
      </div>

      <Modal show={isProductsShowVisible} onClose={() => setIsProductsShowVisibile(false)}>
        <ProductsShow product={currentProduct} />
      </Modal>
    </main>
  );
}
