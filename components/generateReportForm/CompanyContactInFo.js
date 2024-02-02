
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

const CompanyContactInFo = () => {
  const [Companyinfos,setCompanyInfos]=useState([])
  const [Companyinfo,setCompanyInfo] = useState({});
  const handleInputField = (e) => {
    const { name, value } = e.target;
    setCompanyInfo({ ...Companyinfo, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCompanyInfos([...Companyinfos,Companyinfo])
  };
  return (
    <div className=" border p-3">
      <h2 className="space-y-2 py-2 text-white text-center font-semibold bg-indigo-500 rounded-sm">
        Company Contact Information
      </h2>
      <div className=" grid grid-cols-3 gap-3">
        <div className="w-full  max-w-sm flex flex-col space-y-3 border p-3 grid-cols-1">
          <form onSubmit={handleSubmit} className="space-y-4 ">
            <div className="flex flex-col justify-center space-y-2">
              <Label htmlFor="client">Dénomination</Label>
              <Input
                onChange={handleInputField}
                type="text"
                name="Denomination"
                id="client"
                placeholder="Denomination"
              />
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <Label htmlFor="Objet">Adresse</Label>
              <Input
                onChange={handleInputField}
                type="text"
                name="Addressed"
                id="Objet"
                placeholder="Adresse"
              />
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <Label htmlFor="Référence">Tel</Label>
              <Input
                onChange={handleInputField}
                name="Tel"
                type="text"
                id="Tel"
                placeholder="Tel"
              />
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <Label htmlFor="priority">Fax</Label>
              <Input
                onChange={handleInputField}
                name="Fax"
                type="text"
                id="Fax"
                placeholder="Fax"
              />
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <Label htmlFor="language">Gsm</Label>
              <Input
                onChange={handleInputField}
                name="Gsm"
                type="text"
                id="Gsm"
                placeholder="Gsm"
              />
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <Label htmlFor="credit_demand">Email</Label>
              <Input
                onChange={handleInputField}
                name="Email"
                type="text"
                id="Email"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <Label htmlFor="credit_demand">Site Web</Label>
              <Input
                onChange={handleInputField}
                name="web_site"
                type="text"
                id="Email"
                placeholder="Site Web"
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
                <TableHead>Dénomination</TableHead>
                <TableHead>Adresse</TableHead>
                <TableHead>Tel</TableHead>
                <TableHead>Fax</TableHead>
                <TableHead>Gsm</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Site Web</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Companyinfos.map((ord) => (
                <TableRow key={ord.client}>
                  <TableCell className="font-medium">
                    {ord.Denomination}
                  </TableCell>
                  <TableCell>{ord.Addressed}</TableCell>
                  <TableCell>{ord.Tel}</TableCell>
                  <TableCell>{ord.Fax}</TableCell>
                  <TableCell>{ord.Gsm}</TableCell>
                  <TableCell>{ord.Email}</TableCell>
                  <TableCell>{ord.web_site}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default CompanyContactInFo;

