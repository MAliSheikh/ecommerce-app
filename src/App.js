import './App.css';
import Product from "./components/Product";
import Cart from "./components/Cart";
import products from "./product.json";

function App() {
  return (
    <div className="App">
      <Cart />
      <div className="products">
        {products.map((product) => (
          <Product products={products} />
          // <Product {...product} />
        ))}
      </div>
    </div>

  );

}

export default App;
