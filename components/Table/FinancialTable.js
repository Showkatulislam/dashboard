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

const FinancialTable = ({ data }) => {
  return (
    <div className="col-span-4">
      <Table className="border p-4 shadow-sm">
        <TableHeader>
          <TableRow>
            <TableHead>Year</TableHead>
            <TableHead>Chiffre d`&apos;`affaires</TableHead>
            <TableHead>Rentabilité nette</TableHead>
            <TableHead>Résultat d`&apos;`exploitation</TableHead>
            <TableHead>Dot. aux amortissement</TableHead>
            <TableHead>Capitaux propres avant affectation</TableHead>
            <TableHead>Fournisseurs et comptes rattachés</TableHead>
            <TableHead>Achats consommés</TableHead>
            <TableHead>Clients et comptes rattachés</TableHead>
            <TableHead>Stocks</TableHead>
            <TableHead>Total Bilan</TableHead>

            <TableHead>Delete</TableHead>
            <TableHead>Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((d) => (
            <TableRow key={d.year}>
              <TableCell className="font-medium">{d.Turnover}</TableCell>
              <TableCell>{d.NetProfit}</TableCell>
              <TableCell>{d.netProfitability}</TableCell>
              <TableCell>{d.operatingProfit}</TableCell>
              <TableCell>{d.dowryToDepreciation}</TableCell>
              <TableCell>{d.EquityBeforeAllocation}</TableCell>
              <TableCell>{d.accountsPayable}</TableCell>
              <TableCell>{d.consumedPurchases}</TableCell>
              <TableCell>{d.clientsAndAssociatdAcc}</TableCell>
              <TableCell>{d.Stocks}</TableCell>
              <TableCell>{d.toBilan}</TableCell>
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

export default FinancialTable;
