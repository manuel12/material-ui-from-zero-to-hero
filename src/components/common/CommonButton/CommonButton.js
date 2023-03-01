import React from "react";
import { Button } from "@mui/material";

const CommonButton = ({ children, color, disabled, size, sx, variant }) => {
  return (
    <Button
      color={color}
      disabled={disabled}
      size={size}
      variant={variant}
      sx={sx}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
