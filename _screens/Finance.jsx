import React, { useState } from "react";
import { Text, View, TouchableOpacity, Modal } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import CreditCard from "../_components/CreditCard";
import credit from "../_styles/creditcardStyle";
import TransactionList from "../_components/TransactionList";
import Navbar from "../_components/navBar";
import styles from "../_style";

export default function Finance() {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <View style={styles.container}>
      <View style={credit.page}>
      {!showPopup ? (
        <View>
          <View >
            <CreditCard />
            <View style={credit.c_transaction}>
              <Text style={{ color: "#fff", fontSize: 25 }}>
                Transactions :
              </Text>
              <TouchableOpacity onPress={handlePopupClick} style={credit.c_transaction.main}>
                <Ionicons
                  name="add-circle-outline"
                  style={{ color: "#fff", fontSize: 25 }}
                  size={15}
                />
                <View>
                  <Text style={credit.c_transaction.plus}>NEW</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TransactionList />
          </View>
        </View>
      ) : (
        <Modal animationType="fade" transparent={true} visible={showPopup}>
          <View style={credit.popup.popupContainer}>
            <View style={credit.popup.popupContent}>
              <Text style={credit.popup.popupText}>Popup Transaction Add</Text>
              <Text>Follow this to process new transactions</Text>
              <TouchableOpacity
                onPress={handleClosePopup}
                style={credit.popup.closeButton}
              >
                <Text style={credit.popup.closeButtonText}>Close Popup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
    <Navbar />
    </View>
  );
}
