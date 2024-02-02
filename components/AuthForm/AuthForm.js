"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const AuthForm = () => {
    const [product,setProduct]=useState({})
    const handleInputField=e=>{
        const { name, value } = e.target;
        setProduct({...product,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(product);
    }
  return (
    <div className="max-w-[400px] w-full bg-slate-100 p-4 shadow-sm">
        <h1 className="text py-3 font-bold">Add Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <Input name="product_name" onChange={handleInputField} type="text" placeholder="Product Name" />
        <Input name="product_description" onChange={handleInputField} type="text" placeholder="Description" />
        <Input name="product_quantity" onChange={handleInputField} type="text" placeholder="Description" />
        <Input name="product_Price" onChange={handleInputField} type="number" placeholder="Price" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AuthForm;
