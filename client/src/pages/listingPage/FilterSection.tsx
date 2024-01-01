import { useState } from "react";
import Slider from "@mui/material/Slider";
const FilterSection = () => {
  function valuetext(value: number) {
  return `${value}°C`;
}

  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div className="sticky top-[70px] h-[90%] bg-white box-border shadow-xl px-2 pt-4 tracking-wide">
      <div className="font-normal tracking-wide">
        <h4 className="font-semibold text-lg tracking-wide">Category</h4>
        <p>Cat1</p>
        <p>
          {" "}
          <input type="checkbox" name="Cat1" id="" /> Cat2
        </p>
        <p>
          {" "}
          <input type="checkbox" name="Cat1" id="" /> Cat3
        </p>
        <p>
          {" "}
          <input type="checkbox" name="Cat1" id="" /> Cat4
        </p>
        <p>
          {" "}
          <input type="checkbox" name="Cat1" id="" /> Cat5
        </p>
        <p>
          {" "}
          <input type="checkbox" name="Cat1" id="" /> Cat7
        </p>
      </div>
      <div className="mt-3">
        <h4 className="font-semibold text-lg tracking-wide">Price Filter</h4>
        <section className="px-2">
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
          <div className="flex flex-wrap justify-between">
            <section className="border px-4 py-2 w-auto">min</section>
            <section className="border px-4 py-2 w-auto">max</section>
          </div>
          <section className="flex justify-end">
            <button className="px-3 py-2 bg-green-400 text-white mt-4">
              Apply
            </button>
          </section>
        </section>
      </div>
      <div className="mt-3">
        <h4 className="font-semibold text-lg tracking-wide">Sort</h4>
        sort by - rating , price (ASC DESC)
      </div>
      <div>
        <h4>Color</h4>
      </div>
    </div>
  );
};

export default FilterSection;
