import React, { useState } from "react";
import Form from "../Components/Form";
import Invoices from "../Components/Invoices";
import Layout from "../Layout/Layout";

const Home = () => {
  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <>
      <Invoices showForm={showForm} setShowForm={setShowForm} />
      {showForm && <Form />}
    </>
  );
};

export default Home;
