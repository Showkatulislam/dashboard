"use client";
import Select from "react-select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const FormFields = () => {
  const [product, setProduct] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);

  const handleInputSelected = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(selectedOption);
  };
  const handleInputField = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
  };
  const options = [
    {
      country:"bd"
    },
    {
      country:"bd"
    },
    {
      country:"bd"
    },
    {
      country:"bd"
    }
  ];
  return (
    <div className="max-w-[400px] w-full p-4 shadow-sm ">
      <h1 className="text py-3 font-bold">Add Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <Input
          name="product_name"
          onChange={handleInputField}
          type="text"
          placeholder="Product Name"
        />
        <Input
          name="language"
          onChange={handleInputField}
          type="text"
          placeholder=" Language"
        />
      
      <select className="bg-slate-900 border border-slate-600 outline-none p-1 w-full h-8"
      value={selectedOption} onChange={handleInputSelected}>
          <option value="">Country</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <Input
          name="product_Price"
          onChange={handleInputField}
          type="number"
          placeholder="Price"
        />
        <Button type="submit" variant="default">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FormFields;
