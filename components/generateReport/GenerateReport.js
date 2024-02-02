"use client";
import React, { useRef, useState } from "react";
import OrderDetails from "../generateReportForm/OrderDetails";
import CompanyContactInFo from "../generateReportForm/CompanyContactInFo";
import OfficialInfo from "../generateReportForm/OfficialInfo";
import ShareCapital from "../generateReportForm/ShareCapital";
import Shareholders from "../generateReportForm/Shareholders";
import Managers from "../generateReportForm/Managers";
import FinancialData from "../generateReportForm/FinancialData";
import FinancialIndicator from "../generateReportForm/FinancialIndicator";
import BankInformation from "../generateReportForm/BankInformation";
import { Button } from "../ui/button";
import PreviewReport from "../generateReportForm/PreviewReport";
import ReportTitle from "../shared/ReportTitle";
import { useReactToPrint } from "react-to-print";

const GenerateReport = () => {
  const [preview, setPreview] = useState(false);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="py-5 space-y-3">
      {!preview && (
        <div>
          <OrderDetails />
          <CompanyContactInFo />
          <OfficialInfo />
          <ShareCapital />
          <Shareholders />
          <Managers />
          <FinancialData />
          <FinancialIndicator />
          <BankInformation />
          <div className="my-4 flex justify-center items-center">
            <button
              onClick={() => setPreview(true)}
              className="bg-emerald-700 rounded-md px-8 py-1.5"
            >
              Preview Report
            </button>
          </div>
        </div>
      )}
      {preview && (
        <div className="flex flex-col space-y-4">
          <ReportTitle title="Report Preview" />
          <div className="my-4 flex justify-center items-center">
            <button
              onClick={() => setPreview(false)}
              className="bg-emerald-700 rounded-md px-8 py-1.5"
            >
              Edit Report
            </button>
          </div>
          <div ref={componentRef}>
            <PreviewReport />
          </div>
          <div className="my-4 flex justify-center items-center">
            <button
              onClick={handlePrint}
              className="bg-white text-zinc-900 rounded-md px-10 font-bold py-1.5"
            >
              Print
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenerateReport;
