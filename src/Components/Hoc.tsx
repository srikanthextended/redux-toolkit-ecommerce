import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
const HOC = (Component: any) => {
  return function MyFunction(props: any) {
    const navigation = useNavigate();
    const location = useLocation();
    return <Component {...props} navigation={navigation} location={location} />;
  };
};
export default HOC;
