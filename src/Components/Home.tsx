import React, { Component } from "react";
import { withStyles } from "@mui/styles";
import { HomeStyles } from "./Styles/HomeStyles";
import { Box, Button, Card, Grid, Typography } from "@mui/material";

import { connect } from "react-redux";
import { addItemToCart } from "./redux/reducer";
import { RootState } from "./redux/store";
import CircularProgress from "@mui/material/CircularProgress";

import { productsAction } from "./redux/reducer";

interface ProductDetails {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

interface Props {
  classes?: any;
  loading?: boolean;
  productsList?: ProductDetails[] | [];
  cartList?: ProductDetails[] | [];
  productsAction?: () => void;
  addItemToCart?: (item: ProductDetails) => void;
}
class Home extends Component<Props, {}> {
  componentDidMount() {
    try {
      if (this.props?.productsAction) this.props?.productsAction();
    } catch (error) {
      console.log(error);
    }
  }

  onAddToCart = (item: ProductDetails) => {
    if (this.props.addItemToCart) this.props.addItemToCart(item);
  };
  render() {
    const { classes, loading, productsList } = this.props;

    return (
      <Box className={classes.body}>
        {loading ? (
          <Box className={classes.loaderCon}>
            <CircularProgress />
          </Box>
        ) : (
          <Box className={classes.itemsContainer}>
            <Grid container columnSpacing={3} rowSpacing={3}>
              {productsList?.map((productInfo: ProductDetails) => (
                <Grid item xs={12} sm={6} lg={4} xl={3} key={productInfo.id}>
                  <Card className={classes.card}>
                    <Box
                      component={"img"}
                      className={classes.pic}
                      src={productInfo.image}
                      alt=""
                    />
                    <Box className={classes.details}>
                      <Typography className={classes.titleText}>
                        <span className={classes.heading}>Title:</span>{" "}
                        {productInfo.title}
                      </Typography>
                      <Typography className={classes.descriptionText}>
                        <span className={classes.heading}>Catregory:</span>
                        {productInfo.category}
                      </Typography>
                      <Typography className={classes.descriptionText}>
                        <span className={classes.heading}>Price:</span>
                        {productInfo.price}
                      </Typography>
                      <Typography className={classes.descriptionText}>
                        <span className={classes.heading}>Rating:</span>
                        {productInfo.rating.rate}
                      </Typography>
                    </Box>
                    <Button
                      className={classes.btn}
                      onClick={() => this.onAddToCart(productInfo)}
                    >
                      Add To Cart
                    </Button>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
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

const mapDispatchToProps = {
  addItemToCart,
  productsAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(HomeStyles)(Home));
