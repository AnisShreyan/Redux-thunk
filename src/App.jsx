import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import "./App.css";
import ProductsContainer from "./ProductsContainer";
import { fetchProducts } from "./state/actions";
import CardGroup from "react-bootstrap/CardGroup";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setProducts(state.ProductReducer);
  }, [state]);

  console.log(products);

  if (products.length == 0) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      {products.map((items, index) => {
        return (
          <ProductsContainer
            key={index}
            title={items.title}
            price={items.price}
            desc={items.description}
            category={items.category}
            image={items.image}
            rating={items.rating}
          />
        );
      })}
    </div>
  );
}

export default App;
