import Rating from "@mui/material/Rating";

interface CardData{
  image:string,
  name:string,
  price:string,
  rating:number
}

const Cards = (props:CardData) => {
  return (
    <div className="w-[22%] border rounded-lg mb-1 card">
      <div className="h-52 bg-zinc-300">
        <img
          src={`/images/${props.image}`}
          alt=""
          className="w-full h-full rounded-b-none rounded-t-lg"
        />
      </div>
      <div className="p-2 tracking-wide">
        <p className="">{props.name}</p>
        <p className="font-bold">₹ {props.price}/-</p>
        <p>
          {" "}
          <Rating
            name="simple-controlled"
            value={props.rating}
            readOnly
           
          />
        </p>
      </div>
      <button className="bg-lime-300 p-2 w-full">Add to cart</button>
    </div>
  );
};

export default Cards;
