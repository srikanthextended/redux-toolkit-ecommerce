import { SxProps } from "@mui/material";

export const HomeStyles: any = (theme: any) =>
  ({
    headerContainer: {
      height: "10vh",
      boxSizing: "border-box",
      overflowY: "hidden",
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center !important",
      backgroundColor: "#f44444 !important",
    },
    card: {
      backgroundImage:
        "linear-gradient(to Left,#DFB1BD,#B09097,#D7B2BE) !important",
      display: "flex",
      justifyContent: "center",
      padding: "30px",
      borderRadius: "20px !important",
      flexDirection: "column",
      height: "480px",
      alignItems: "center",
    },
    heading: {
      color: "#000 !important",
      fontSize: "1.3rem !important",
      fontFamily: "Roboto !important",
      fontStyle: "normal",
      fontWeight: 600,
    },
    titleText: {
      color: "#000 !important",
      fontSize: "1.3rem !important",
      fontFamily: "Bai Jamjuree !important",
      fontStyle: "normal",
      fontWeight: 600,
    },
    descriptionText: {
      color: "#000 !important",
      fontSize: "1rem !important",
      fontFamily: "Bai Jamjuree !important",
      fontStyle: "normal",
      fontWeight: 600,
    },
    btn: {
      backgroundColor: "#8B2252 !important",
      marginTop: "auto !important",
      color: "#fff !important",
      width: "100%",
      height: "60px",
      borderRadius: "45px !important",
      textAlign: "center",
      fontSize: "1rem !important",
      fontFamily: "Montserrat !important",
      textTransform: "inherit !important",
    },
    button: {
      backgroundColor: "#f44444 !important",
      width: "280px",
      marginTop: "10px !important",
      color: "#fff !important",
      height: "60px",
      borderRadius: "45px !important",
      textAlign: "center",
      fontSize: "1rem !important",
      fontFamily: "Montserrat !important",
      textTransform: "inherit !important",
    },
    button1: {
      backgroundColor: "#232144 !important",
      width: "200px",
      height: "60px",
      borderRadius: "45px !important",
      color: "#fff !important",
      textAlign: "center",
      fontSize: "1rem !important",
      fontFamily: "Montserrat !important",
      textTransform: "inherit !important",
    },
    item: {
      fontFamily: "Roboto !important",
      color: "#000 !important",
      [theme.breakpoints.up("xs")]: {
        fontSize: "0.95rem !important",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "1.3rem !important",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1.3rem !important",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.5rem !important",
      },
    },
    cartbtn: {
      borderRadius: "5px",
      border: "none !important",
      backgroundColor: "#FFE5E5 !important",
      color: "#000000 !important",
      fontFamily: `Bai Jamjuree !important`,
      fontSize: "0.75rem !important",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "1.4rem",
      ":hover": {
        backgroundColor: "#FFE5E5 !important",
        color: "#000000 !important",
      },
    },
    text: {
      fontFamily: "Roboto !important",
      color: "#000 !important",
      [theme.breakpoints.up("xs")]: {
        fontSize: "0.75rem !important",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "1rem !important",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1rem !important",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.1rem !important",
      },
    },
    checkoutbox: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      marginTop: "40px",
      [theme.breakpoints.up("xs")]: {
        flexDirection: "column",
        gap: 40,
      },
      [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
        gap: 40,
      },
      [theme.breakpoints.up("md")]: {
        flexDirection: "row",
      },
      [theme.breakpoints.up("lg")]: {
        flexDirection: "row",
      },
    },
    table: {
      display: "flex",
      width: "100%",
      marginTop: "50px",
      borderBottom: "1px #a4a4a4 solid",
      paddingBottom: "20px",
      padding: "10px !important",
      boxSizing: "border-box",
    },
    details: {
      width: "100% !important",
      marginTop: "10px !important",
      marginBottom: "10px !important",
    },
    section: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "20px",
    },
    title: {
      maxHeight: "240px",
    },
    description: {
      maxHeight: "60px !important",
    },
    cartpic: {
      height: "40px",
      width: "40px",
    },
    body: {
      display: "flex",

      flexDirection: "column",
      boxSizing: "border-box",
      alignItems: "center",
      maxHeight: "90vh",
      overflowY: "auto",
      [theme.breakpoints.up("xs")]: {
        padding: "0 10px 10px 10px",
      },
      [theme.breakpoints.up("md")]: {
        padding: "0 30px 30px 30px",
      },
      [theme.breakpoints.up("lg")]: {
        padding: "0 30px 30px 30px",
      },
      position: "relative !important",
    },
    body1: {
      display: "flex",
      boxSizing: "border-box",

      flexDirection: "column",
      [theme.breakpoints.up("xs")]: {
        padding: "0 10px 10px 10px",
      },
      [theme.breakpoints.up("md")]: {
        padding: "0 30px 30px 30px",
      },
      [theme.breakpoints.up("lg")]: {
        padding: "0 30px 30px 30px",
      },
      maxHeight: "90vh",
      overflowY: "auto",
      position: "relative",
    },
    itemsContainer: {
      [theme.breakpoints.up("xs")]: {
        width: "95%",
      },
      [theme.breakpoints.up("md")]: {
        width: "90%",
      },
      [theme.breakpoints.up("lg")]: {
        width: "90%",
      },
      marginTop: "20px !important",
    },
    pic: {
      height: "200px",
      width: "70%",
      borderRadius: "30px",
    },
    loaderCon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    boxcheckout: {
      border: "1px solid #000",
      padding: "10px",
      borderRadius: "10px",
    },
    carttotal: {
      fontSize: "2rem !important",
      fontFamily: "Montserrat !important",
      textDecoration: "underline !important",
      color: "#000 !important",
    },
    navItems: {
      width: "30%",
      display: "flex",
      justifyContent: "space-between",
      [theme.breakpoints.up("xs")]: {
        display: "none !important",
      },
      [theme.breakpoints.up("md")]: {
        display: "none !important",
      },
      [theme.breakpoints.up("lg")]: {
        display: "flex !important",
      },
    },

    exclusive: {
      color: "#000 !important",

      fontFamily: "Roboto !important",
      fontSize: "2rem !important",
      fontStyle: "normal",
      fontWeight: 400,
    },
    navItem: {
      color: "#000 !important",
      textAlign: "center",
      fontSize: "1.3rem !important",
      fontFamily: "Montserrat !important",

      fontStyle: "normal",
      fontWeight: 600,
    },
  } satisfies Record<string, SxProps>);
