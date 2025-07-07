import "./ProductsIndex.css";

export function ProductsIndex({ products, onShow, onAddToCart }) {
  return (
    <div className="container">
      <h1>All products ({products.length} total)</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100 product-card">
              <img
                src={product.primary_image_url}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">{product.description}</p>
                <button onClick={() => onShow(product)} className="btn btn-outline-info me-2">
                  More info
                </button>
                <button onClick={() => onAddToCart(product)} className="btn btn-outline-success">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}