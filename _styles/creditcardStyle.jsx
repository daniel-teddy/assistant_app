import { StyleSheet } from "react-native";

const credit = StyleSheet.create({
  page: {
      display: "flex",
      top: 0,
      position: "absolute",
      width: "100%",
      alignItems: "center",
      justifyContent: "start",
      marginTop: 65,
  },
  CreditCard: {
    width: 350,
    height: 200,
    backgroundColor: "#707174",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
    heading: {
      position: "absolute",
      letterSpacing: 0.2,
      fontWeight: "bold",
      color: "#fff",
      fontSize: 12, // Assuming your base font size is 12 in CSS
      top: 27, // Assuming 1em = 16 in CSS, so 2em * 16 = 32
      left: 297, // Assuming 1em = 16 in CSS, so 18.6em * 16 = 297.6 and rounding to 297
    },
    logo: {
      position: "absolute",
      top: 140,
      left: 280,
    },
    chip: {
      position: "absolute",
      top: 37,
      left: 24,
    },
    contactless: {
      position: "absolute",
      top: 85,
      left: 300,
    },
    c_number: {
      position: "absolute",
      fontWeight: "bold",
      fontSize: 17,
      top: 105,
      left: 24,
      color: "#fff",
    },
    c_valid: {
      position: "absolute",
      fontSize: 11,
      fontWeight: "bold",
      color: "#fff",
      top: 130,
      left: 60,
    },
    c_date: {
      position: "absolute",
      color: "#fff",
      fontSize: 20,
      fontWeight: "bold",
      top: 150,
      left: 54,
    },
    c_name: {
      display: "none",
      position: "absolute",
      color: "#fff",
      fontSize: 15,
      fontWeight: "bold",
      top: 170,
      left: 45,
    },
  },
  c_transaction: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 13,
    width: 380,
    main: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 5,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderRadius: 5,
      width: 90,
      padding: 5,
    },
    plus: {
      fontSize: 17,
      fontWeight: 700,
      color: "#fff",
      marginLeft: 3,
    },
  },
  popup: {
    NewcloseButton: {
      marginTop: 10,
      width: 60,
      padding: 3,
      borderRadius: 5,
      backgroundColor: "gray", // change
    },
    popupContainer: {
      flex: 1,
      paddingTop: 65,
      justifyContent: "start",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    popupContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      width: 370,
      padding: 10,
      borderRadius: 5,
    },
    popupText: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
    },
    closeButton: {
      marginTop: 10,
    },
    closeButtonText: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
      color: "#dc3545",
      fontWeight: 600,
      fontSize: 16,
      borderWidth: 2,
      borderColor: "#6c757d",
      paddingVertical: 7,
      paddingHorizontal: 5,
    },
    add: {
      width: 360,
      padding: 5,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    input: {
      width: 295,
      padding: 10,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: "#2196f3",
    },
    addBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 4,
      color: "white",
      fontWeight: 600,
      fontSize: 15,
      backgroundColor: "#648feb",
      paddingVertical: 10,
      paddingHorizontal: 7,
    },
    catGroup: {
      display: "flex",
      flexColBetween: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },
    catBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 4,
      color: "white",
      fontWeight: 600,
      fontSize: 15,
      paddingVertical: 10,
      paddingHorizontal: 7,
      textTransform: "uppercase", 
    },
  },
});

export default credit;