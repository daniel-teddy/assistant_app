import { StyleSheet } from "react-native";

const navstyle = StyleSheet.create({
    items: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
        width: "85%",
        marginTop: 730,
        // marginBottom: 45,
        pressableRound: {
          backgroundColor: "#7deae7",
          width: 20,
          height: 20,
          borderRadius: 5,
        },
        itemSmallView: {
          display: "flex",
          flexDirection: "row",
          width: 125,
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
        },
        resetPass: {
          color: "#544bdb",
        },
        fullBtn: {
          backgroundColor: "#544bdb",
          color: "#fff",
          padding: 10,
          borderRadius: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 50,
          width: 300,
          fontSize: 20,
        },
      },
      bottomNav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        width: 50,
        height: 50,
        borderRadius: 5,
      },
});

export default navstyle;