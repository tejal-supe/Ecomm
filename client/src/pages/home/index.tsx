import { useEffect, useState } from 'react';
import Cards from '../../components/common/Cards';
import { homeProducts } from '../../services/productService';

const Home = () => {
  const [products,setProducts] = useState<any>([]);

  const getData = async() =>{
    try {
      const data = await homeProducts();
      setProducts(data.products);      
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
      getData();
  },[])
  return (
    <div className="border">
        <div className="">
          <img
            className="w-full h-[30rem]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6yDhS-BryR-ORyBGNCJY96L6_YTaM18nINA&usqp=CAU"
            alt="banner image"
          />
        </div>
        <div className="">
          <h3 className="text-center font-bold text-3xl mt-3 tracking-wide font-mono">
            Popular Products
          </h3>
          <div className="px-7 flex">
            {
              products.map((data:any)=>{
                console.log(data,'dtaa');
                
                return (
                  <Cards name={data.product_name} price={data.product_cost} rating={data.product_rating} image={data.product_image}/>

                )
              })
            }

          </div>
        </div>
        {/* <div className="container">Footer</div> */}
    </div>
  );
}

export default Home