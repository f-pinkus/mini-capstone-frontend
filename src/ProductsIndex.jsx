import "./ProductsIndex.css";
import { useState } from "react";

export function ProductsIndex({ products, onShow, onAddToCart }) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div className="container">
      <h1>All products ({products.length} total)</h1>

      Search filter: <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />

      <div className="row">
        {products
        .filter((product) => product.name.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100 product-card">
              <img
                src={product.primary_image_url}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">{product.description}</p>
                <div className="mt-auto d-grid gap-2">
                  <button
                    onClick={() => onShow(product)}
                    className="btn btn-outline-info w-100"
                  >
                    More info
                  </button>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="btn btn-outline-success w-100"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
