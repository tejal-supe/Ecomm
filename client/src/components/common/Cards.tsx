import Rating from "@mui/material/Rating";

const Cards = () => {
  return (
    <div className="w-[22%] border rounded-lg mb-1">
      <div className="h-52 bg-zinc-300">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgbmG8Ebh27B3t5ChGhk7EWbZ6j2YRPX5IMA&usqp=CAU"
          alt=""
          className="w-full h-full rounded-b-none rounded-t-lg"
        />
      </div>
      <div className="p-2 tracking-wide">
        <p className="">T-shirt</p>
        <p className="font-bold">₹ 200/-</p>
        <p>
          {" "}
          <Rating
            name="simple-controlled"
            value={5}
            readOnly
           
          />
        </p>
      </div>
      <button className="bg-lime-300 p-2 w-full">Add to cart</button>
    </div>
  );
};

export default Cards;
