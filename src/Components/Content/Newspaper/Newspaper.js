import { useEffect, useState } from "react";
import axios from "axios";
import Main from '../Main/Main';
import News from '../News/News';
import Beside from '../Beside/Beside';
import Admin from '../../../Admin/Admin';

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


function Newspaper() {
    const [listProduct,setListProduct] = useState([]);
    const getData = () => {
      axios
        .get(`https://61bc1bd2d8542f00178245ab.mockapi.io/article`)
        .then((res) => {
          setListProduct(res.data);
        })
        .catch((error) => console.log(error));
    };
    useEffect(() => {
        getData()
        console.log(listProduct);
    },[])
  return (
    <>
      <div className="row">
        {listProduct
          .filter((products) => products.status === "main")
          .map((product, index) => (
            <Main
              key={index}
              image={product.image}
              title={product.title}
              content={product.title}
            />
          ))}

        <div>
       
        <div>
        <div className="col-md-2">
          {listProduct
            .filter((products) => products.status === "new")
            .map((product, index) => (
              <News
                key={index}
                image={product.image}
                title={product.title}
              />
            ))}
            </div>
        </div>
        <div className="col-md-4 p-2">
          {listProduct
            .filter((products) => products.status === "outstanding")
            .map((product, index) => (
              <Beside
                key={index}
                image={product.image}
                title={product.title}
              />
            ))}
            </div>
        </div>
      </div>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/admin">ManagementPost</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Newspaper;