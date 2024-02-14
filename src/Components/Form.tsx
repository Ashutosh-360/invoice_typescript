import React from "react";
import style from "./Form.module.scss";

const Form: React.FC = () => {
  return (
    <div
      className={`flex pl-32 flex-col left-0 gap-4 bg-body z-10 fixed p-8 overflow-auto max-h-screen ${style.formWrapper}`}
    >
      <div className="flex flex-col gap-4">
        <div>Bill From</div>
        <div className="flex flex-col gap-4">
          <div>Street Address</div>
          <input className="border p-4 rounded-lg" name="address" type="text" />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-4">
            <div>City</div>
            <input className="border p-4 rounded-lg" name="city" type="text" />
          </div>
          <div className="flex flex-col gap-4">
            <div>Post Code</div>
            <input className="border p-4 rounded-lg" name="post_code" type="text" />
          </div>
          <div className="flex flex-col gap-4">
            <div>Country</div>
            <input className="border p-4 rounded-lg" name="Country" type="text" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>Bill To</div>
        <div className="flex flex-col gap-4">
          <div>Client's Name</div>
          <input className="border p-4 rounded-lg" name="client_name" type="text" />
        </div>
        <div className="flex flex-col gap-4">
          <div>Client's Email</div>
          <input className="border p-4 rounded-lg" name="client_email" type="text" />
        </div>
        <div className="flex flex-col gap-4">
          <div>Street Address</div>
          <input className="border p-4 rounded-lg" name="address" type="text" />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-4">
            <div>City</div>
            <input className="border p-4 rounded-lg" name="city" type="text" />
          </div>
          <div className="flex flex-col gap-4">
            <div>Post Code</div>
            <input className="border p-4 rounded-lg" name="post_code" type="text" />
          </div>
          <div className="flex flex-col gap-4">
            <div>Country</div>
            <input className="border p-4 rounded-lg" name="Country" type="text" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-4">
            <div>Invoice Date</div>
            <input className="border p-4 rounded-lg" name="createdAt" type="text" />
          </div>
          <div className="flex flex-col gap-4">
            <div>Payment terms</div>
            <input className="border p-4 rounded-lg" name="paymentDue" type="text" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>Description</div>
          <input className="border p-4 rounded-lg" name="description" type="text" />
        </div>
        <div className="flex gap-4 items-center">
          <div>Discard</div>
          <div className="flex gap-2 items-center">
            <div>Save as Draft</div>
            <div>Save and Send</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
