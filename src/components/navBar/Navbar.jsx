import {
  FavoriteBorder,
  Person,
  SearchOutlined,
  ShoppingCart,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import React, { useState } from "react";
import MenuList from "./menuList/MenuList";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  return (
    <div style={{ marginTop: "22px"}}>
      <Box display={{ display: "flex", justifyContent: "space-around" }}>
        <img
          src="http://azim.commonsupport.com/Castro/assets/images/logo.png"
          alt=""
          width=""
          style={{ border: "2px solid green" }}
        />

        <Box
          style={{
            display: "flex",
            border: "2px solid red",
            flex: 3,
            justifyContent: "space-around",
          }}
        >
          <Box style={{}}>
            <span
              onMouseOver={() => setShow1(true)}
              onMouseOut={() => setShow1(false)}
              style={{ border: "2px solid red" }}
            >
              Home
            </span>
            <Box>{show1 && <MenuList />}</Box>
          </Box>
          <Box>
            <span
              onMouseOver={() => setShow2(true)}
              onMouseOut={() => setShow2(false)}
              style={{ border: "2px solid red" }}
            >
              Home
            </span>
            {show2 && <MenuList />}
          </Box>
          <Box>
            <span
              onMouseOver={() => setShow(true)}
              onMouseOut={() => setShow(false)}
              style={{ border: "2px solid red" }}
            >
              Home
            </span>
            {show && <MenuList />}
          </Box>
        </Box>
        <Box style={{ flex: 2 }}>
          <SearchOutlined />
          <FavoriteBorder />
          <Person />
          <span style={{ position: "relative", padding: "12px" }}>
            <ShoppingCart />
            <span
              style={{
                position: "absolute",
                tzIndex: 1,
                top: "-7px",
                left: "32px",
                border: "2px solid red",
                borderRadius: "50%",
                backgroundColor: "grey",
                padding: "0 7px",
              }}
            >
              3
            </span>
          </span>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
