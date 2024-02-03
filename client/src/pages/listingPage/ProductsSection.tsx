import Cards from "../../components/common/Cards";
interface CardData {
  data: [];
}

const ProductsSection = (props: CardData) => {
  console.log(props.data);
  return (
    <div className="flex flex-wrap gap-11 ">
      {props.data.map((data: any) => {
        return (
          <Cards
            name={data.product_name}
            price={data.product_cost}
            image={data.product_image}
            rating={data.product_rating}
          />
        );
      })}
      {/* <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards /> */}
    </div>
  );
};

export default ProductsSection;
