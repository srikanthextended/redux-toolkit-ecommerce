import React, { Component } from "react";
import { withStyles } from "@mui/styles";
import { HomeStyles } from "./Styles/HomeStyles";
import { Badge, Box, IconButton, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HOC from "./Hoc";
import { connect } from "react-redux";
import { RootState } from "./redux/store";
const items = ["Dashboard", "Orders", "Product"];
interface Props {
  classes: any;
  navigation: (route: string) => void;
  cartList: ProductDetails[] | [];
}
interface ProductDetails {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
  quantity: number;
}
class Header extends Component<Props, {}> {
  render() {
    const { classes } = this.props;
    return (
      <Box className={classes.headerContainer}>
        <Typography className={classes.exclusive}>Exclusive</Typography>

        <Box className={classes.navItems}>
          {items.map((each: string) => (
            <Typography key={each} className={classes.navItem}>
              {each}
            </Typography>
          ))}
        </Box>
        <Box className={classes.icons}>
          <IconButton
            sx={{
              "& .MuiButtonGroup-grouped:not(:last-of-type)": {
                borderColor: "#A2A3A5",
              },
            }}
          >
            <PersonIcon />
          </IconButton>
          <IconButton onClick={() => this.props.navigation("/cart")}>
            <Badge badgeContent={this.props.cartList.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Box>
    );
  }
}
const mapStateToProps = (state: RootState) => {
  return {
    cartList: state.products.cartList,
  };
};

export default connect(mapStateToProps)(withStyles(HomeStyles)(HOC(Header)));
