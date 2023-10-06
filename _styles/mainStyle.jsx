import { StyleSheet } from "react-native";

const main = StyleSheet.create({
  page: {
    display: "flex",
    top: 0,
    position: "absolute",
    width: "100%",
    alignItems: "center",
    justifyContent: "start",
    marginTop: 45,
  },
  helloText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
    width: "97%",
    text: {
      color: "#fff",
      fontSize: 17,
      fontWeight: 600,
    },
    textSm: {
      color: "#fff",
      fontSize: 15,
      fontWeight: 500,
    },
  },
  midText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    top: 0,
    position: "absolute",
    marginTop: 60,
    width: "97%",
  },
  dateText: {
    color: "#fff",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  timeText: {
    color: "#fff",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 5,
    paddingLeft: 13,
    paddingRight: 10,
    marginTop: 10,
    marginBottom: 10,
    width: 105,
  },
  textTemp: {
    color: "#fff",
    fontSize: 24,
    fontWeight: 500,
    lineHeight: 24,
  },
  Suggestion: {
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    padding: 8,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 5,
    paddingLeft: 15,
    paddingRight: 15,
    top: 0,
    position: "absolute",
    marginTop: 330,
    width: "97%",
  },
  iconImg: {
    height: 90,
    width: 90,
    margin: 10,
  },
  calContain: {
    alignItems: "center",
    justifyContent: "center",
  },
  Calendar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 5,
    marginTop: 380,
    padding: 10,
    paddingLeft: 2,
    paddingRight: 2,
    margin: 5,
  },
  exchange: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    display: "flex",
    flexDirection: "column",
    gap: 20,
    margin: 5,
    alignItems: "flex-start",
    justifyContent: "center",
    width: "97%",
    borderRadius: 5,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    view: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    },
    sm_view: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#fff",
    },
  },
});

export default main;