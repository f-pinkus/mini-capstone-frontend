export function ProductsShow({ product }) {
  return (
    <div>
      <h1>Product information</h1>
      <p>Name: {product.name}</p>
      <img
        src={product.primary_image_url}
        className="img-fluid rounded mx-auto d-block"
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
        alt={product.name}
      />
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
}
