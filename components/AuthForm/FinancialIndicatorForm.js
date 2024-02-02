import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const FinancialIndicatorForm = ({ handleSubmit, handleInput }) => {
  return (
    <div className="col-span-2 border p-2">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <div>
          <Label>Rentabilité nette</Label>
          <Input
            onChange={handleInput}
            name="netProfitability"
            placeholder="Rentabilité nette"
          />
        </div>
        <div>
          <Label>ROE Return On Equity</Label>
          <Input
            onChange={handleInput}
            name="ROEReturnOnEquity"
            placeholder="ROE Return On Equity"
          />
        </div>
        <div>
          <Label>ROA Return On Asset</Label>
          <Input
            onChange={handleInput}
            name="ROAReturnOnAsset"
            placeholder="ROA Return On Asset"
          />
        </div>
        <div>
          <Label>Autonomie Financière</Label>
          <Input
            onChange={handleInput}
            name="FinancialAutonomy"
            placeholder="Autonomie Financière"
          />
        </div>
        <div>
          <Label>EBITDA</Label>
          <Input onChange={handleInput} name=" EBITDA" placeholder="EBITDA" />
        </div>
        <div>
          <Label>Délai Fournisseurs</Label>
          <Input
            onChange={handleInput}
            name="LeadTimeSuppliers"
            placeholder="Délai Fournisseurs"
          />
        </div>
        <div>
          <Label>Délai Clients</Label>
          <Input
            onChange={handleInput}
            name="CustomerLeadTime"
            placeholder="Délai Clients"
          />
        </div>
        <div>
          <Label>Fournisseurs et comptes rattachés</Label>
          <Input
            onChange={handleInput}
            name="accountsPayable"
            placeholder="Fournisseurs et comptes rattachés"
          />
        </div>
        <Button type="submit">Add</Button>
      </form>
    </div>
  );
};

export default FinancialIndicatorForm;
