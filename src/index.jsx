import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MaterialList from "./components/tickets/MaterialList";
import MaterialDetails from "./components/tickets/MaterialDetails";
import CreateMaterial from "./components/tickets/CreateMaterial";
import { PatronsList } from "./components/Patrons/PatronsList";
import { PatronDetails } from "./components/Patrons/PatronDetails";
import { EditPatron } from "./components/Patrons/EditPatron";
import { CheckoutList } from "./components/Checkouts/CheckoutList";
import { BrowseMaterial } from "./components/tickets/BrowseMaterial";
import { CreateCheckout } from "./components/Checkouts/CreateCheckout";
import { OverdueCheckouts } from "./components/Checkouts/OverdueCheckouts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="materials">
          <Route index element={<MaterialList />} />
          <Route path=":id" element={<MaterialDetails />} />
          <Route path="create" element={<CreateMaterial />} />
          <Route path=":materialId/checkout" element={<CreateCheckout/>}/>
        </Route>
        <Route path="patrons">
          <Route index element={<PatronsList/>}/>
          <Route path=":id" element={<PatronDetails/>} />
          <Route path=":id/edit" element={<EditPatron/>}/>
        </Route>
        <Route path="checkouts">
          <Route index element={<CheckoutList/>}/>
          <Route path="overdue" element={<OverdueCheckouts/>}/>

        </Route>
        <Route path="/browse" element={<BrowseMaterial/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
);
