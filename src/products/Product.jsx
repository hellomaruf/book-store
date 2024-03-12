function Product({books}) {
    console.log(books);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex gap-8">
        <div className="grid grid-cols-3 gap-6">
          <div className="card card-compact bg-base-100 shadow-md">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name!</h2>
              <p>Price : </p>
              <p>Rating : </p>
              <div className="card-actions ">
                <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-container bg-gray-100 ">
          <table className="w-80 bg-slate-200">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Name</th>
                <th>500</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Product;
