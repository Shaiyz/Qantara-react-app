import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
} from "@material-ui/core";
import React from "react";
import Select from "react-select";

const Sorting = () => {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      // This line disable the blue border
      boxShadow: "none",
      color: "black",
    }),
  };
  const names = [
    { id: "1", value: "high", label: "Sort by price: high to low" },
    { id: "2", value: "low", label: "Sort by price:low to high" },
    { id: "3", value: "rating", label: "Sort by average rating" },
    { id: "4", value: "popularity", label: "Sort by popularity" },
  ];
  

  return (
    <div>
      <FormControl sx={{ m: 1, width: 400 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          options={names}
          // value={personName}
          onChange={handleChange}
          defaultValue={"Default Sorting"}
          styles={style}
          placeholder="Default Sorting"
        />
      </FormControl>
    </div>
  );
};

export default Sorting;
