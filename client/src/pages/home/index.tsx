import Cards from '../../components/common/Cards';

const Home = () => {
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
          <div className="px-7">
          <Cards />

          </div>
        </div>
        {/* <div className="container">Footer</div> */}
    </div>
  );
}

export default Home