import FilterSection from './FilterSection';
import Pagination from './Pagination';
import ProductsSection from './ProductsSection';

const ListingPage = () => {
  return (
    <div className="pr-8 pl-4">
      <div className="flex flex-wrap ">
        <div className="w-[20%] pr-3  pt-3 sticky top-[70px]">
          <FilterSection />
        </div>
        <div className="w-[80%] pt-3">
          <ProductsSection />
        </div>

      </div>

      <Pagination />
    </div>

  );
}

export default ListingPage