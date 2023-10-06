import React, {useState, useEffect} from "react";
import { View, Text, Alert } from "react-native";
import Logo from "./logo";
import CardChip from "./chip";
import Contactless from "./contactless";
import credit from "../_styles/creditcardStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CreditCard() {
  const [creditAmount, setCreditAmount] = useState(0);

  // const saveData = async () => {
  //   try {
  //     await AsyncStorage.setItem("creditAmount", String(850));
  //   } catch (error) {
  //     console.log("Error saving data:", error);
  //   }
  // };


  useEffect(() => {
    loadCreditAmount();
    Alert.alert(
      'Update Credit',
      'Do you want to update ?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Update',
          onPress: async () => {
            const newCreditAmount = creditAmount + 450;
            setCreditAmount(newCreditAmount);
          }
        }
      ]
    )
  }, []);

  const loadCreditAmount = async () => {
    try {
      const storedCreditAmount = await AsyncStorage.getItem('creditAmount');
      if (storedCreditAmount !== null) {
        setCreditAmount(parseInt(storedCreditAmount));
      }
    } catch (error) {
      console.error('Error loading credit amount:', error);
    }
  };


    

  // const handleUpdate = () => {
  //   Alert.alert(
  //     'Update Credit',
  //     'Do you want to update your credit by adding $400?',
  //     [
  //       { text: 'Cancel', style: 'cancel' },
  //       {
  //         text: 'Update',
  //         onPress: () => {
  //           const updatedAmount = creditAmount + 400;
  //           setCreditAmount(updatedAmount);
  //           updateCreditAmount(updatedAmount);
  //         },
  //       },
  //     ]
  //   );
  // };



 
    return (
        <View style={{width: 380, display: "flex", alignItems: "center", justifyContent: "center"}}>
          <View style={credit.CreditCard}>
          <Text style={credit.CreditCard.heading}>iCARD</Text>
          <Logo />
          <Text style={credit.CreditCard.c_number}>9759 2484 5269 6576</Text>
          <Text style={credit.CreditCard.c_valid}>BALANCE</Text>
          <Text style={credit.CreditCard.c_date}>{`$ ${creditAmount}`}</Text>
          <Text style={credit.CreditCard.c_name}>De Teddy</Text>
        </View>
        </View>
    );
  }