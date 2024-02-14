import { useState } from "react";
import data from "../data.json";

interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

interface Invoice {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
  total: number;
}

interface InvoiceProps {
  showForm: boolean;
  setShowForm: React.Dispatch<boolean>;
}

const Invoices: React.FC<InvoiceProps> = ({ showForm, setShowForm }) => {
  const [invoicesData, setInvoicesData] = useState<Invoice[]>(data);
  const newInvoiceHandler = (): void => {
    setShowForm(!showForm);
  };

  return (
    <div className="flex flex-col gap-4 items-center px-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <div className="font-semibold text-3xl">Invoices</div>
          <div>There are total invoices</div>
        </div>
        <div className="flex gap-8 items-center">
          <div>Filter by status</div>
          <div onClick={newInvoiceHandler}>New Invoices</div>
        </div>
      </div>
      <div className="p-2 flex flex-col gap-2">
        {invoicesData?.map((ele: Invoice, idx: number) => {
          return (
            <div className="p-8 w-full cursor-pointer rounded-xl border flex gap-4" key={idx}>
              <div className="text-base">{ele.id}</div>
              <div className="text-base">{ele.paymentDue}</div>
              <div className="text-base">{ele.clientName}</div>
              <div className="text-base">{ele.total}</div>
              <div className="text-base">{ele.status}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Invoices;
