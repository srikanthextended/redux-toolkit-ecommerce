import React, { Component } from "react";
import { HomeStyles } from "./Styles/HomeStyles";
import { withStyles } from "@mui/styles";
import { Box, Button, Paper, Typography } from "@mui/material";
import { connect } from "react-redux";
import { RootState } from "./redux/store";
import CartItem from "./CartItem";
import HOC from "./Hoc";

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

interface Props {
  cartList?: ProductDetails[] | [];
  productsAction?: () => void;
  classes: any;
  navigation: (route: string) => void;
}

class Cart extends Component<Props, {}> {
  setPayment = (sum: number) => {
    let options = {
      key: "rzp_test_l0bSddZ1SEIrHF",
      key_secret: "XYTowRQ0FW9k9muy4d6NakGH",
      amount: 100 * parseInt(sum.toString()),
      currency: "INR",
      name: "Practice",
      description: "for testing",
      handler: (response: any) => {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: "srikanth",
        email: "srikanthtammanaveni111@gmail.com",
        contact: "7981529260",
      },
      notes: {
        address: "Razorpay Corporate office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const pay = (window as any).Razorpay(options);
    pay.open();
  };
  render() {
    const { classes, cartList } = this.props;
    let sum = 0;

    cartList?.forEach((each: any) => {
      const value = each.quantity * each.price;
      sum = sum + value;
    });
    const cgst = sum * (18 / 100);

    const sgst = sum * (9 / 100);
    return (
      <Box className={classes.body1}>
        {cartList?.length !== 0 ? (
          <>
            <Paper className={classes.table}>
              <Box className={classes.section}>
                <Typography className={classes.item}>Product</Typography>
              </Box>
              <Box className={classes.section}>
                <Typography className={classes.item}>Price</Typography>
              </Box>
              <Box className={classes.section}>
                <Typography className={classes.item}>Quantitty</Typography>
              </Box>
              <Box className={classes.section}>
                <Typography className={classes.item}>SubTotal</Typography>
              </Box>
            </Paper>
            {cartList?.map((productInfo: ProductDetails) => (
              <CartItem key={productInfo.id} item={productInfo} />
            ))}
            <Box className={classes.checkoutbox}>
              <Button
                className={classes.button1}
                onClick={() => this.props.navigation("/")}
              >
                Return To Shop
              </Button>
              <Box className={classes.boxcheckout}>
                <Typography className={classes.carttotal}>
                  Cart Total
                </Typography>
                <Typography>
                  <span className={classes.heading}>Sub Total</span>:
                  {sum.toFixed(2)}
                </Typography>
                <Typography className={classes.text}>
                  <span className={classes.heading}>CGST</span>:
                  {cgst.toFixed(2)}
                </Typography>
                <Typography className={classes.text}>
                  <span className={classes.heading}>SGST</span>:
                  {sgst.toFixed(2)}
                </Typography>
                <hr />
                <Typography className={classes.text}>
                  Total:{(sum + cgst + sgst).toFixed(2)}
                </Typography>
                <Button
                  onClick={() => this.setPayment(sum + cgst + sgst)}
                  className={classes.button}
                >
                  Proceed To Checkout
                </Button>
              </Box>
            </Box>
          </>
        ) : (
          <Typography>Cart is Empty</Typography>
        )}
      </Box>
    );
  }
}
const mapStateToProps = (state: RootState) => {
  return {
    productsList: state.products.productsList,
    loading: state.products.loading,
    cartList: state.products.cartList,
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(HomeStyles)(HOC(Cart)));
