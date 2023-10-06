import { StyleSheet } from "react-native";

const transaction = StyleSheet.create({
    scroll: {
        container: {
            display: 'flex',
            width: '100%',
          paddingVertical: 20,
        },
        scrollViewContainer: {
          height: 390, // Adjust the height as needed
          // backgroundColor: "rgba(255, 255, 255, 0.2)",
          paddingHorizontal: 6,
        },
        scrollViewContent: {
          flexGrow: 1,
          justifyContent: "start",
        },
        item: {
          backgroundColor: "#ffffff33",
          padding: 5,
          marginBottom: 10,
          borderRadius: 8,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
          marginRight: 1,
        },
        itemText: {
          fontSize: 16,
          color: "#fff",
          fontWeight: 600,
        },
        itemLeft: {
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        },
      },
})

export default transaction;