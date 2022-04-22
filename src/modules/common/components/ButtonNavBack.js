import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ButtonNavBack() {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate(-1)} variant="contained">
        Back
      </Button>
    </>
  );
}
