import { useEffect, useState } from 'react';
import FilterSection from './FilterSection';
import Pagination from './Pagination';
import ProductsSection from './ProductsSection';
import { getAllProducts } from '../../services/productService';

const ListingPage = () => {
  const [products, setProducts] = useState<any>([])
  const getProducts = async() => {
    try {
      const data = await getAllProducts();
      setProducts(data.product)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getProducts()
  },[])
  return (
    <div className="pr-8 pl-4">
      <div className="flex flex-wrap ">
        <div className="w-[20%] pr-3  pt-3 sticky top-[70px]">
          <FilterSection />
        </div>
        <div className="w-[80%] pt-3">
          <ProductsSection data={products}/>
        </div>

      </div>

      <Pagination />
    </div>

  );
}

export default ListingPage