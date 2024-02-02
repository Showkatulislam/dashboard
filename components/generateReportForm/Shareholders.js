import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Edit, Trash } from "lucide-react";
import ReportTitle from "../shared/ReportTitle";

const Shareholders = () => {
    const [shareHolders,setShareHolders]=useState([])
    const [shareHolder,setShareHolder]=useState({})
    const handleInputField=e=>{
        const {name,value}=e.target
        setShareHolder({...shareHolder,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(shareHolder);
        setShareHolders([...shareHolders,shareHolder])
    }
  return (
    <div className="p-4 border">
    <ReportTitle title="Shareholders"/>
      <div className="flex flex-col gap-y-4">
        <div>
        <Table className="border p-4 shadow-sm">
          <TableHeader>
            <TableRow>
              <TableHead >Name</TableHead>
              <TableHead>Shares</TableHead>
              <TableHead>Nationality</TableHead>
              <TableHead>Delete</TableHead>
              <TableHead>Edit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shareHolders.map((sh) => (
              <TableRow key={sh.shareholderName}>
                <TableCell className="font-medium">{sh.shareholderName}</TableCell>
                <TableCell>{sh.shares}</TableCell>
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
              <Input onChange={handleInputField} name="shareholderName" placeholder="Name" />
            </div>
            <div className="flex flex-col justify-center col-span-3">
              <Label className="dark:bg-white font-bold py-2 dark:text-black text-center">
              Shares
              </Label>
              <Input onChange={handleInputField} name="shares" placeholder="Shares" />
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

export default Shareholders;
