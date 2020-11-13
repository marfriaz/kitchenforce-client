import React from "react";
import ReactDOM from "react-dom";
import Contacts from "./Contacts";

describe("ContactForm Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const contact = {
      id: 1,
      user_id: 1,
      account_id: 1,
      name: "Oceane Mosciski",
      title: "sales representative",
      phone: "977-938-0152",
      email: "cooper52@yahoo.com",
    };

    ReactDOM.render(<Contacts contact={contact} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});