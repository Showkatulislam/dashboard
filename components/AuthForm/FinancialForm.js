import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const FinancialForm = ({ handleSubmit, handleInput }) => {
  return (
    <div className="col-span-2 border p-2">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <div>
          <Label>Year</Label>
          <Input onChange={handleInput} name="year" placeholder="Year" />
        </div>
        <div>
          <Label>Chiffre  &apos;affaires</Label>
          <Input onChange={handleInput} name="Turnover" placeholder="Chiffre d'affaires" />
        </div>
        <div>
          <Label>Résultat net</Label>
          <Input onChange={handleInput} name="NetProfit" placeholder="Résultat net" />
        </div>
        <div>
          <Label>Rentabilité nette</Label>
          <Input onChange={handleInput} name="netProfitability" placeholder="Rentabilité nette" />
        </div>
        <div>
          <Label>ésultat d&apos;exploitation</Label>
          <Input onChange={handleInput} name=" operatingProfit" placeholder="ésultat d'exploitation" />
        </div>
        <div>
          <Label>Dot. aux amortissement</Label>
          <Input onChange={handleInput} name="dowryToDepreciation" placeholder="Dot. aux amortissement" />
        </div>
        <div>
          <Label>Capitaux propres avant affectation</Label>
          <Input onChange={handleInput} name="EquityBeforeAllocation" placeholder="Capitaux propres avant affectation" />
        </div>
        <div>
          <Label>Fournisseurs et comptes rattachés</Label>
          <Input onChange={handleInput} name="accountsPayable" placeholder="Fournisseurs et comptes rattachés" />
        </div>
        <div>
          <Label>Achats consommés</Label>
          <Input onChange={handleInput} name="consumedPurchases" placeholder="Achats consommés" />
        </div>
        <div>
          <Label>Clients et comptes rattachés </Label>
          <Input onChange={handleInput} name="clientsAndAssociatdAcc" placeholder="Clients et comptes rattachés" />
        </div>
        <div>
          <Label>Stocks</Label>
          <Input onChange={handleInput} name="Stocks" placeholder="Stocks" />
        </div>
        <div>
          <Label>Total Bilan</Label>
          <Input onChange={handleInput} name="toBilan" placeholder="Total Bilan" />
        </div>
        <Button type="submit">Add</Button>
      </form>
    </div>
  );
};

export default FinancialForm;
