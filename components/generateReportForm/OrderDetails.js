"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const OrderDetails = () => {
  const [orders,setOrders]=useState([])
  const [order, setOrder] = useState({});
  const handleInputField = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setOrders([...orders,order])
  };
  return (
    <div className=" border p-3">
      <h2 className="space-y-2 py-2 text-white text-center font-semibold bg-indigo-500 rounded-sm">
        Order Detail
      </h2>
      <div className=" grid grid-cols-3 gap-3">
        <div className="w-full  max-w-sm flex flex-col space-y-3 border p-3 grid-cols-1">
          <form onSubmit={handleSubmit} className="space-y-4 ">
            <div className="flex flex-col justify-center space-y-2">
              <Label htmlFor="client">Client</Label>
              <Input
                onChange={handleInputField}
                type="text"
                name="client"
                id="client"
                placeholder="client"
              />
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <Label htmlFor="Objet">Objet</Label>
              <Input
                onChange={handleInputField}
                type="text"
                name="objet"
                id="Objet"
                placeholder="Objet"
              />
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <Label htmlFor="Référence">Référence</Label>
              <Input
                onChange={handleInputField}
                name="refernece"
                type="text"
                id="Référence"
                placeholder="Référence"
              />
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <Label htmlFor="priority">Priorité</Label>
              <Input
                onChange={handleInputField}
                name="priority"
                type="text"
                id="priority"
                placeholder="Priorité"
              />
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <Label htmlFor="language">Langue</Label>
              <Input
                onChange={handleInputField}
                name="language"
                type="text"
                id="language"
                placeholder="Langue"
              />
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <Label htmlFor="credit_demand">Crédit demandé</Label>
              <Input
                onChange={handleInputField}
                name="client_demand"
                type="text"
                id="client"
                placeholder="Crédit demandé"
              />
            </div>
            <Button type="submit" size="full">
              Add
            </Button>
          </form>
        </div>
        <div className="col-span-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Objet</TableHead>
                <TableHead>Référence</TableHead>
                <TableHead>Priorité</TableHead>
                <TableHead>Langue</TableHead>
                <TableHead>Crédit demandé</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((ord) => (
                <TableRow key={ord.client}>
                  <TableCell className="font-medium">
                    {ord.client}
                  </TableCell>
                  <TableCell>{ord.objet}</TableCell>
                  <TableCell>{ord.refernece}</TableCell>
                  <TableCell>{ord.priority}</TableCell>
                  <TableCell>{ord.language}</TableCell>
                  <TableCell>{ord.client_demand}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
/* client
: 
"d"
client_demand
: 
"d"
language
: 
"d"
objet
: 
"d"
priority
: 
"d"
refernece
: 
"d" */
