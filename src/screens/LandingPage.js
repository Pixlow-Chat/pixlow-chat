import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Chat } from "../components";

const LandingPage = () => {
  return (
    <div>
      <h2 style={{ color: "darkslateblue" }}>Text</h2>
      <Chat />
    </div>
  );
};
export default LandingPage;
