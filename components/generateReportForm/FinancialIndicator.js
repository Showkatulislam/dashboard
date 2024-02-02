import React, { useState } from 'react';
import ReportTitle from '../shared/ReportTitle';
import FinancialIndicatorForm from '../AuthForm/FinancialIndicatorForm';
import FinancialIndicatorTable from '../Table/FinancialIndicatorTable';

const FinancialIndicator = () => {
    const [financialDataIndicators,setFinancialDataIndicators]=useState([])
    const [financialDataIndicator,setFinancialDataIndicator]=useState({})
    const handleInput= (e) => {
        const { name, value } = e.target;
        setFinancialDataIndicator({ ...financialDataIndicator, [name]: value });
      };
    const handleSubmit=e=>{
        e.preventDefault()
        setFinancialDataIndicators([...financialDataIndicators,financialDataIndicator])
    }
    return (
        <div className="p-4 border">
            <ReportTitle title="Financial Indicators"/>
            <div className="grid grid-cols-6 mb-2">
                <FinancialIndicatorForm handleSubmit={handleSubmit} handleInput={handleInput} />
                <FinancialIndicatorTable data={financialDataIndicators}/>
            </div>
        </div>
    );
};

export default FinancialIndicator;