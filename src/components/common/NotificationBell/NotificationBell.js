import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import BasicMenu from "../BasicMenu/BasicMenu";

const notifications = [
  {
    id: 0,
    label: "First notification",
  },
  {
    id: 1,
    label: "Second notification",
  },
];

const NotificationBell = ({ iconColor }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const newNotifications = `You have ${notifications.length} notifications!`;
  const noNewNotifications = "No new notifications";

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title={notifications.length ? newNotifications : noNewNotifications}>
        <IconButton
          color={iconColor}
          onClick={notifications.length ? handleOpen : null}
          anchorel={anchorEl}
        >
          <Badge badgeContent={notifications.length} color="error">
            <NotificationsIcon color="action" />
          </Badge>
        </IconButton>
      </Tooltip>
      <BasicMenu
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
        menuItems={notifications}
      ></BasicMenu>
    </div>
  );
};

export default NotificationBell;
