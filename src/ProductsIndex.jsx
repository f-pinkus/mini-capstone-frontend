export function ProductsIndex( {products} ) {
  return (
    <div>
      <h1>All Products ({products.length} total)</h1>
       {products.map((product) => (
         <div key={product.id}>
           <h2>{product.name}</h2>
           <h3>Price: {product.price}</h3>
           <h4>Supplier: {product.supplier_id}</h4>
           <p>Description: {product.description}</p>
         </div>
       ))}
    </div>
  );
}