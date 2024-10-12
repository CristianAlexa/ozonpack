import { useContext, useEffect, useState } from "react";
import { OzoneContext } from "../../context/OzoneContext";

import SectionTitle from "../SectionTitle";
import ProductThumb from "../ProductThumb";
import { Link } from "react-router-dom";

const OnSale = () => {
  const { products } = useContext(OzoneContext);
  const [onSale, setOnSale] = useState([]);

  useEffect(() => {
    const onSaleProducts = products.filter((prod) => prod.isOnSale);
    setOnSale(onSaleProducts.slice(0, 5));
  }, []);

  return (
    <div className="flex flex-col gap-2 pb-8">
      <div className="text-center">
        <SectionTitle>ON SALE NOW</SectionTitle>
      </div>
      {/* Rendering Products */}
      <div className="py-8 grid grid-cols-2 sm:grig-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {onSale.map((prod, index) => (
          <ProductThumb
            key={index}
            sku={prod.sku}
            img={prod.img}
            id={prod._id}
            name={prod.name}
            price={prod.price}
          />
        ))}
      </div>
      {/* update link */}
      <div className="text-center">
        <Link
          to="/"
          className="mt-8 text-sm px-6 py-2 bg-green-500 rounded-full text-center text-slate-100 hover:bg-green-300 transition duration-300"
        >
          VIEW ALL
        </Link>
      </div>
    </div>
  );
};

export default OnSale;
