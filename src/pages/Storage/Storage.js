import React, { useState } from "react";
import GridWrapper from "../../components/common/GridWrapper/GridWrapper";
import UserTable from "../../components/UserTable/UserTable";

export default Storage = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <GridWrapper>
      This is the storage page.
      <UserTable />
    </GridWrapper>
  );
};
