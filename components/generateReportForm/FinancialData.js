import { useState } from "react";
import FinancialForm from "../AuthForm/FinancialForm";
import FinancialTable from "../Table/FinancialTable";
import ReportTitle from "../shared/ReportTitle";

const FinancialData = () => {
    const [financialDatas,setFinancialDatas]=useState([])
    const [financialData,setFinancialData]=useState({})
    const handleInput= (e) => {
        const { name, value } = e.target;
        setFinancialData({ ...financialData, [name]: value });
      };
    const handleSubmit=e=>{
        e.preventDefault()
        setFinancialDatas([...financialDatas,financialData])
    }
    
    return (
        <div className="p-4 border">
            <ReportTitle title="Financial Data"/>
            <div className="grid grid-cols-6 mb-2">
            <FinancialForm handleInput={handleInput} handleSubmit={handleSubmit}/>
            <FinancialTable data={financialDatas}/>
            </div>
        </div>
    );
};

export default FinancialData;