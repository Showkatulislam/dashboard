import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const ShareCapital = () => {
  return (
    <div className="w-full border p-4 flex flex-col">
      <div>
        <h2 className="space-y-2 py-2 text-white text-center font-semibold bg-indigo-500 rounded-sm">
          Share Capital
        </h2>
        <div className="flex space-y-3 flex-col py-10">
          <form className="flex items-center justify-between gap-x-3">
            <div className="h-10">
              <select className="h-full  rounded-sm" id="currencySelection" name="currencySelection">
                <option value="euro">Euro</option>
                <option value="gbp">GBP</option>
                <option value="usd">USD</option>
                <option value="tnd">TND</option>
                <option value="dzd">DZD</option>
              </select>
            </div>
            <div className="flex-1">
              <Input
                /* onChange={handleInputField} */
                type="text"
                name="shareCapital"
                id="client"
                placeholder="Enter Share Capital"
              />
            </div>
            <Button>addd</Button>
          </form>
        </div>
      </div>
      {/* Previous Share Capital */}
      <div>
        <h2 className="space-y-2 py-2 text-white text-center font-semibold bg-indigo-500 rounded-sm">
        Previous Share Capital
        </h2>
        <div className="flex space-y-3 flex-col py-10">
          <form className="flex items-center justify-between gap-x-3">
            <div className="h-10">
              <select className="h-full  rounded-sm" id="currencySelection" name="currencySelection">
                <option value="euro">Euro</option>
                <option value="gbp">GBP</option>
                <option value="usd">USD</option>
                <option value="tnd">TND</option>
                <option value="dzd">DZD</option>
              </select>
            </div>
            <div className="flex-1">
              <Input
                /* onChange={handleInputField} */
                type="text"
                name="PreviousshareCapital"
                id="client"
                placeholder="Enter Previous Share Capital"
              />
            </div>
            <Button>addd</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShareCapital;
