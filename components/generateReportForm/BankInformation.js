import { Edit, Trash } from "lucide-react";
import ReportTitle from "../shared/ReportTitle";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";

const BankInformation = () => {
  const [Banks, setBanks] = useState([]);
  const [Bank, setBank] = useState({});
  const handleInputField = (e) => {
    const { name, value } = e.target;
    setBank({ ...Bank, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Bank);
    setBanks([...Banks, Bank]);
  };
  return (
    <div>
      <ReportTitle title="Bank Information" />
      <div className="flex flex-col gap-y-4">
        <div>
          <Table className="border p-4 shadow-sm">
            <TableHeader>
              <TableRow>
                <TableHead>Bank</TableHead>
                <TableHead>Branch</TableHead>
                <TableHead>Delete</TableHead>
                <TableHead>Edit</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Banks.map((bank) => (
                <TableRow key={bank.bankName}>
                  <TableCell className="font-medium">{bank.bankName}</TableCell>
                  <TableCell>{bank.branch}</TableCell>
                  <TableCell>
                    <Trash className="text-rose-600" />
                  </TableCell>
                  <TableCell>
                    <Edit className="text-blue-600" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-x-3">
            <div className="flex flex-col justify-center col-span-5">
              <Label className="dark:bg-white font-bold py-2 dark:text-black text-center">
                Bank
              </Label>
              <Input
                onChange={handleInputField}
                name="bankName"
                placeholder="Bank"
              />
            </div>
            <div className="flex flex-col justify-center col-span-5">
              <Label className="dark:bg-white font-bold py-2 dark:text-black text-center">
                Branch
              </Label>
              <Input
                onChange={handleInputField}
                name="branch"
                placeholder="Branch"
              />
            </div>
            <div className="flex item-center col-span-1">
              <Button type="submit" size="full">
                Add
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BankInformation;
