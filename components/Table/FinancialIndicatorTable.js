import { Edit,Trash } from "lucide-react";
import React from "react";
import {
    Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const FinancialIndicatorTable = ({ data }) => {
  return (
    <div className="col-span-4">
      <Table className="border p-4 shadow-sm">
        <TableHeader>
          <TableRow>
            <TableHead>Rentabilité nette</TableHead>
            <TableHead>ROE Return On Equity</TableHead>
            <TableHead>ROA Return On Asset</TableHead>
            <TableHead>Autonomie Financière</TableHead>
            <TableHead>EBITDA</TableHead>
            <TableHead>Délai Fournisseurs</TableHead>
            <TableHead>Délai Clients</TableHead>
            <TableHead>Delete</TableHead>
            <TableHead>Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((d) => (
            <TableRow key={d.netProfitability}>
              <TableCell className="font-medium">{d.netProfitability}</TableCell>
              <TableCell>{d.ROEReturnOnEquity}</TableCell>
              <TableCell>{d.ROAReturnOnAsset}</TableCell>
              <TableCell>{d.FinancialAutonomy}</TableCell>
              <TableCell>{d.EBITDA}</TableCell>
              <TableCell>{d.LeadTimeSuppliers}</TableCell>
              <TableCell>{d.CustomerLeadTime}</TableCell>
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
  );
};

export default FinancialIndicatorTable;
