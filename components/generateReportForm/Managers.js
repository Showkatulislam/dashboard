import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Edit, Trash } from "lucide-react";

const Managers = () => {
    const [ManagerHolders,setManagerHolders]=useState([])
    const [ManagerHolder,setManagerHolder]=useState({})
    const handleInputField=e=>{
        const {name,value}=e.target
        setManagerHolder({...ManagerHolder,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(ManagerHolder);
        setManagerHolders([...ManagerHolders,ManagerHolder])
    }
  return (
    <div className="p-4 border">
      <h2 className="space-y-2 py-2 text-white text-center font-semibold bg-indigo-500 rounded-sm">
        Managers
      </h2>
      <div className="flex flex-col gap-y-4">
        <div>
        <Table className="border p-4 shadow-sm">
          <TableHeader>
            <TableRow>
              <TableHead >Name</TableHead>
              <TableHead>Function</TableHead>
              <TableHead>Nationality</TableHead>
              <TableHead>Delete</TableHead>
              <TableHead>Edit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ManagerHolders.map((sh) => (
              <TableRow key={sh.managerName}>
                <TableCell className="font-medium">{sh.managerName}</TableCell>
                <TableCell>{sh.function}</TableCell>
                <TableCell>{sh.nationality}</TableCell>
                <TableCell>
                  <Trash className="text-rose-600"/>
                </TableCell>
                <TableCell>
                  <Edit className="text-blue-600"/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-x-3">
            <div className="flex flex-col justify-center col-span-3">
              <Label className="dark:bg-white font-bold py-2 dark:text-black text-center">
                Name
              </Label>
              <Input onChange={handleInputField} name="managerName" placeholder="Name" />
            </div>
            <div className="flex flex-col justify-center col-span-3">
              <Label className="dark:bg-white font-bold py-2 dark:text-black text-center">
              function
              </Label>
              <Input onChange={handleInputField} name="function" placeholder="function" />
            </div>
            <div className="flex flex-col justify-center col-span-3">
              <Label className="dark:bg-white font-bold py-2 dark:text-black text-center">
              Nationality
              </Label>
              <Input onChange={handleInputField} name="nationality" placeholder="Nationality" />
            </div>
            <div className="flex item-center col-span-1">
                <Button type="submit" size="full">Add</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Managers;
