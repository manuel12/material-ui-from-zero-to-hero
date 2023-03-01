import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import BasicCard from "../../components/common/BasicCard/BasicCard";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import CommonButtton from "../../components/common/CommonButton/CommonButton";
import GridWrapper from "../../components/common/GridWrapper/GridWrapper";
import { cardHeaderStyles } from "./styles";
import NewUserModal from "../../components/Modals/NewUserModal/NewUserModal";

const Authentication = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchResults, setSearchResults] = useState(users);

  const getHeader = () => {
    const handleSearch = (value) => {
      console.log(value);
      filterData(value);
      console.log(users);
    };

    const filterData = (value) => {
      const lowercasedValue = value.toLowerCase().trim();
      if (lowercasedValue === "") setUsers(searchResults);
      else {
        const filteredData = searchResults.filter((item) => {
          return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes(lowercasedValue)
          );
        });
        setUsers(filteredData);
      }
    };

    const addUser = () => {
      setOpen(true);
      console.log("Click!");
    };

    return (
      <Box sx={cardHeaderStyles.wrapper}>
        <SearchBar
          placeholder="Search by email address, phone number, or user UID"
          onChange={(event) => handleSearch(event.target.value)}
          searchBarWidth="720px"
        />
        <Box>
          <CommonButtton
            variant="contained"
            onClick={addUser}
            size="large"
            sx={cardHeaderStyles.addUserButton}
          >
            Add user
          </CommonButtton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </Box>
      </Box>
    );
  };

  const addNewUser = (data) => {
    users.push({ ...data });
    setOpen(false);
    console.log(users);
  };

  const getContent = () => {
    return (
      <>
        {users.length ? (
          users.map((user) => (
            <Box sx={{ marginBottom: "20px" }}>
              <Typography>User ID: {user.userId}</Typography>
              <Typography>Email: {user.email}</Typography>
              <Typography>Phone Number: {user.phoneNumber}</Typography>
            </Box>
          ))
        ) : (
          <Typography
            align="center"
            sx={{
              margin: "40px 16px",
              color: "rgba(0,0,0,0.6)",
              fontSize: "1.3rem",
            }}
          >
            No users for this project yet.
          </Typography>
        )}
      </>
    );
  };

  return (
    <GridWrapper>
      <BasicCard header={getHeader()} content={getContent()} />
      <NewUserModal
        open={open}
        onClose={() => setOpen(false)}
        addNewUser={addNewUser}
      />
    </GridWrapper>
  );
};

export default Authentication;
