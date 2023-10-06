import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Modal,
  TouchableOpacity,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "@expo/vector-icons/Ionicons";
import todoStyle from "../_styles/todoList";
import Navbar from "../_components/navBar";
import styles from "../_style";
import MyDateTimePicker from "../_components/MyDateTimePicker";

const Todo = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [type, setType] = useState("default");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleDateTimeSelect = (selectedDateTime) => {
    setDate(selectedDateTime);
  };

  const handleTypePress = (value) => {
    setType(value);
  };

  const handleAddButtonPress = async () => {
    if (name && type && date) {
      const newItem = {
        id: new Date().getTime(), // You can use a more appropriate unique identifier
        name: name,
        type: type,
        date: date,
      };

      // Save the new item in AsyncStorage
      try {
        const existingItems = await AsyncStorage.getItem("items");
        const itemsArray = existingItems ? JSON.parse(existingItems) : [];
        itemsArray.push(newItem);
        await AsyncStorage.setItem("items", JSON.stringify(itemsArray));
        alert("activity added ✅");
        const getData = async () => {
          try {
            const data = await AsyncStorage.getItem("items");
            const parsedData = data ? JSON.parse(data) : [];
            setItems(parsedData);
          } catch (error) {
            console.log("Error retrieving data:", error);
          }
        };
    
        getData();
        
      } catch (error) {
        alert("Error saving item:", error);
      }
      setShowPopup(false);
    } else {
      alert("Please fill in all the fields");
    }
  };

  const handlePopupClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  //   const items = [
  //     {
  //       id: 1,
  //       name: "Meeting with Anne",
  //       time: "10:30 AM",
  //       type: "business",
  //       date: "01 August 2023",
  //     },
  //     {
  //       id: 2,
  //       name: "Go shopping",
  //       time: "3:30 PM",
  //       type: "personal",
  //       date: "05 August 2023",
  //     },
  //     {
  //       id: 3,
  //       name: "Go eat",
  //       time: "2:30 PM",
  //       type: "work",
  //       date: "05 August 2023",
  //     },
  //     {
  //       id: 4,
  //       name: "Hospital Appointment",
  //       time: "9:15 AM",
  //       type: "urgent",
  //       date: "05 August 2023",
  //     },
  // {
  //     id: 5,
  //     name: "Meeting with Client",
  //     time: "2:30 PM",
  //     type: "business",
  //     date: "10 August 2023",
  //   },
  //   {
  //     id: 6,
  //     name: "Grocery Shopping",
  //     time: "4:00 PM",
  //     type: "personal",
  //     date: "15 August 2023",
  //   },
  //   {
  //     id: 7,
  //     name: "Birthday Party",
  //     time: "6:00 PM",
  //     type: "personal",
  //     date: "20 August 2023",
  //   },
  //   {
  //     id: 8,
  //     name: "Workout Session",
  //     time: "7:30 AM",
  //     type: "urgent",
  //     date: "22 August 2023",
  //   },
  //   {
  //     id: 9,
  //     name: "Project Deadline",
  //     time: "11:59 PM",
  //     type: "work",
  //     date: "25 August 2023",
  //   },
  //   {
  //     id: 10,
  //     name: "Dentist Appointment",
  //     time: "10:45 AM",
  //     type: "urgent",
  //     date: "30 August 2023",
  //   },
  //   {
  //     id: 11,
  //     name: "Family Picnic",
  //     time: "12:00 PM",
  //     type: "personal",
  //     date: "02 September 2023",
  //   }

  //     // Add more items as needed
  //   ];

  const saveData = async () => {
    try {
      await AsyncStorage.setItem("items", JSON.stringify(items));
    } catch (error) {
      console.log("Error saving data:", error);
    }
  };

  // Call the saveData function to store the data in AsyncStorage
    saveData();

  const [items, setItems] = useState([]);

  useEffect(() => {
    // Retrieve data from AsyncStorage
    const getData = async () => {
      try {
        const data = await AsyncStorage.getItem("items");
        const parsedData = data ? JSON.parse(data) : [];
        setItems(parsedData);
      } catch (error) {
        console.log("Error retrieving data:", error);
      }
    };

    getData();
  }, []);

  const saveItemsToAsyncStorage = async (updatedItems) => {
    try {
      await AsyncStorage.setItem("items", JSON.stringify(updatedItems));
      console.log("Items saved to AsyncStorage");
    } catch (error) {
      console.error("Error saving items to AsyncStorage:", error);
    }
  };

  const handleDeleteItem = async (itemId) => {
    // Filter out the item with the given itemId and update AsyncStorage
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
    saveItemsToAsyncStorage(updatedItems);
    alert("activity removed ✅");
  };

  const handleToggleDone = async (itemId) => {
    // Find the item with the given itemId and toggle its done status
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, done: !item.done } : item
    );
    setItems(updatedItems);
    saveItemsToAsyncStorage(updatedItems);
  };

  const getBackgroundColor = (type) => {
    switch (type) {
      case "personal":
        return "#28a745";
      case "urgent":
        return "#dc3545";
      case "business":
        return "#17a2b8";
      default:
        return "#ffc107";
    }
  };

  


  return (
    <View style={styles.container}>
      <View style={todoStyle.main}>
      {!showPopup ? (
        <View style={todoStyle.todo}>
          <View style={todoStyle.todomain}>
            <View style={todoStyle.todo.top}>
              <Text style={{ color: "#fff", fontSize: 25, fontWeight: 600 }}>
                Today's reminders
              </Text>
              <Ionicons
                name="notifications"
                style={{ color: "#f58468", fontSize: 40, fontWeight: 600 }}
                size={30}
              />
            </View>
            <Text style={{ color: "#fff", fontSize: 17, fontWeight: 600 }}>
              Meeting with Anne
            </Text>
            <Text style={{ color: "#fff", fontSize: 15, fontWeight: 600 }}>
              10:30 AM
            </Text>
          </View>
          <View style={todoStyle.todo.mid}>
            <View style={todoStyle.todo.top}>
              <Text style={{ color: "#fff", fontSize: 20, fontWeight: 600 }}>
                Reminders
              </Text>
              <Pressable
                style={todoStyle.todo.mid.icon}
                onPress={handlePopupClick}
              >
                <Ionicons
                  name="add-circle-outline"
                  style={{ color: "#fff", fontSize: 40, fontWeight: 600 }}
                  size={40}
                />
              </Pressable>
            </View>
          </View>
          <View style={todoStyle.t_scroll.container}>
            <View style={todoStyle.t_scroll.scrollViewContainer}>
              <ScrollView
                contentContainerStyle={todoStyle.t_scroll.scrollViewContent}
              >
                {items.map((item) => (
                  <View key={item.id} style={todoStyle.t_scroll.item}>
                    <View style={todoStyle.t_scroll.itemLeft}>
                      <View
                        style={{
                          backgroundColor: getBackgroundColor(item.type),
                          height: "100%",
                          width: 5,
                          borderBottomStartRadius: 5,
                          borderTopStartRadius: 5,
                        }}
                      ></View>
                      <View style={todoStyle.t_scroll.itemText}>
                        <Text
                          style={[
                            {
                              color: "#fff",
                              fontSize: 17,
                              fontWeight: 600,
                              textDecorationLine: item.done
                                ? "line-through"
                                : "none",
                            },
                          ]}
                        >
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 15,
                            fontWeight: 600,
                          }}
                        >
                          {item.date}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        gap: 4,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => handleToggleDone(item.id)}
                      >
                        <Text style={[todoStyle.todo.doneBtn]}>
                          <Ionicons
                            name="checkbox-outline"
                            style={{
                              color: "#ffc107",
                              fontSize: 25,
                              fontWeight: 800,
                            }}
                          />
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => handleDeleteItem(item.id)}
                      >
                        <Text style={[todoStyle.todo.doneBtn]}>
                          <Ionicons
                            name="trash-outline"
                            style={{
                              color: "#dc3545",
                              fontSize: 25,
                              fontWeight: 800,
                            }}
                          />
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </View>
      ) : (
        <Modal animationType="fade" transparent={true} visible={showPopup}>
        <View style={todoStyle.popup.popupContainer}>
          <View style={todoStyle.popup.popupContent}>
            <View style={todoStyle.popup.add}>
              <TextInput
                style={todoStyle.popup.input}
                placeholder="Add a activity"
                value={name}
                onChangeText={setName}
              />
              <TouchableOpacity onPress={handleAddButtonPress}>
                <Text style={todoStyle.popup.addBtn}>ADD</Text>
              </TouchableOpacity>
            </View>
            <View style={todoStyle.popup.add}>
              <TouchableOpacity onPress={()=> handleTypePress('default')}>
                <Text
                  style={[
                    todoStyle.popup.catBtn,
                    { backgroundColor: "#ffc107" , borderColor: "#1e293b" },
                    { borderWidth: type === 'default' ? 2 : undefined}
                  ]}
                >
                  default
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> handleTypePress('business')}>
                <Text
                  style={[
                    todoStyle.popup.catBtn,
                    { backgroundColor: "#17a2b8", borderColor: "#1e293b" },
                    { borderWidth: type === 'business' ? 2 : undefined}
                  ]}
                >
                  business
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> handleTypePress('personal')}>
                <Text
                  style={[
                    todoStyle.popup.catBtn,
                    { backgroundColor: "#28a745", borderColor: "#1e293b" },
                    { borderWidth: type === 'personal' ? 2 : undefined}
                  ]}
                >
                  personal
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> handleTypePress('urgent')}>
                <Text
                  style={[
                    todoStyle.popup.catBtn,
                    { backgroundColor: "#dc3545", borderColor: "#1e293b" },
                    { borderWidth: type === 'urgent' ? 2 : undefined}
                  ]}
                >
                  urgent
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                display: "flex",
                alignItems: "start",
                justifyContent: "center",
                width: "100%",
                marginVertical: 7,
                gap: 10,
              }}
            >
              <Text  style={{ fontSize: 20, fontWeight: 600 }}>Select date: </Text>
              <MyDateTimePicker onDateTimeSelect={handleDateTimeSelect} />
            </View>
            <TouchableOpacity
              onPress={handleClosePopup}
              style={[todoStyle.popup.catBtn]}
            >
              <Text style={todoStyle.popup.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      )}
    </View>
    <Navbar />
    </View>
  );
};

export default Todo;
