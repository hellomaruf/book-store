import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";

function Products() {
  const [booksCart, setBooksCart] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch("product.json");
      let data = await res.json();
      setBooksCart(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {booksCart.map((items, i) => (
        <Product books={items} key={i} />
      ))}
    </div>
  );
}

export default Products;
