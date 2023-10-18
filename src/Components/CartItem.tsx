import { Component } from "react";
import { withStyles } from "@mui/styles";
import { HomeStyles } from "./Styles/HomeStyles";
import { Box, Button, ButtonGroup, Paper, Typography } from "@mui/material";
import { connect } from "react-redux";
import HOC from "./Hoc";
import { RootState } from "./redux/store";
import { increaseQuantity, decreaseQuantity } from "./redux/reducer";
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
  classes: any;
  item: ProductDetails;
  increaseQuantity: (item: ProductDetails) => void;
  decreaseQuantity: (item: ProductDetails) => void;
}

class CartItem extends Component<Props, {}> {
  render() {
    const { classes, item } = this.props;
    return (
      <Paper className={classes.table}>
        <Box className={classes.section}>
          <Box
            component={"img"}
            src={item.image}
            className={classes.cartpic}
            alt=""
          />
        </Box>
        <Box className={classes.section}>
          <Typography className={classes.text}>{item.price}</Typography>
        </Box>
        <Box className={classes.section}>
          <ButtonGroup
            color="primary"
            variant="text"
            aria-label="text button group"
          >
            <Button
              className={classes.cartbtn}
              onClick={() => this.props.increaseQuantity(item)}
            >
              +
            </Button>
            <Button className={classes.cartbtn}>{item.quantity}</Button>
            <Button
              className={classes.cartbtn}
              onClick={() => this.props.decreaseQuantity(item)}
            >
              -
            </Button>
          </ButtonGroup>
        </Box>
        <Box className={classes.section}>
          <Typography className={classes.text}>
            {(item.quantity * item.price).toFixed(2)}
          </Typography>
        </Box>
      </Paper>
    );
  }
}
const mapStateToProps = (state: RootState) => {
  return {};
};

const mapDispatchToProps = {
  increaseQuantity,
  decreaseQuantity,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(HomeStyles)(HOC(CartItem)));
