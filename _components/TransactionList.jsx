import React from "react";
import { View, ScrollView, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import transaction from "../_styles/transactionStyle";

const TransactionList = () => {
  return (
    <View style={transaction.scroll.container}>
      <View style={transaction.scroll.scrollViewContainer}>
        <ScrollView
          contentContainerStyle={transaction.scroll.scrollViewContent}
        >
          <View style={transaction.scroll.item}>
            <View style={transaction.scroll.itemLeft}>
              <View
                style={{
                  backgroundColor: "#c1d8e8",
                  padding: 5,
                  borderRadius: 10,
                  marginRight: 15,
                }}
              >
                <Ionicons
                  name="fast-food-outline"
                  style={{ color: "#151515", fontSize: 40, fontWeight: 800 }}
                  size={25}
                />
              </View>
              <View>
                <Text style={transaction.scroll.itemText}>Food & Drinks</Text>
                <Text style={transaction.scroll.itemText}>Jul 20</Text>
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 20, color: "#f45757" }}>- $ 47,5</Text>
            </View>
          </View>
          <View style={transaction.scroll.item}>
            <View style={transaction.scroll.itemLeft}>
              <View
                style={{
                  backgroundColor: "#c1d8e8",
                  padding: 5,
                  borderRadius: 10,
                  marginRight: 15,
                }}
              >
                <Ionicons
                  name="cash"
                  style={{ color: "#151515", fontSize: 40, fontWeight: 800 }}
                  size={25}
                />
              </View>
              <View>
                <Text style={transaction.scroll.itemText}>Cash</Text>
                <Text style={transaction.scroll.itemText}>Jul 20</Text>
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 20, color: "#60d960" }}>+ $ 200,05</Text>
            </View>
          </View>
          <View style={transaction.scroll.item}>
            <View style={transaction.scroll.itemLeft}>
              <View
                style={{
                  backgroundColor: "#c1d8e8",
                  padding: 5,
                  borderRadius: 10,
                  marginRight: 15,
                }}
              >
                <Ionicons
                  name="logo-xbox"
                  style={{ color: "#238d23", fontSize: 40, fontWeight: 800 }}
                  size={25}
                />
              </View>
              <View>
                <Text style={transaction.scroll.itemText}>Games</Text>
                <Text style={transaction.scroll.itemText}>Jul 17</Text>
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 20, color: "#f45757" }}>- $ 107,5</Text>
            </View>
          </View>
          <View style={transaction.scroll.item}>
            <View style={transaction.scroll.itemLeft}>
              <View
                style={{
                  backgroundColor: "#c1d8e8",
                  padding: 5,
                  borderRadius: 10,
                  marginRight: 15,
                }}
              >
                <Ionicons
                  name="fast-food-outline"
                  style={{ color: "#151515", fontSize: 40, fontWeight: 800 }}
                  size={25}
                />
              </View>
              <View>
                <Text style={transaction.scroll.itemText}>Food & Drinks</Text>
                <Text style={transaction.scroll.itemText}>Jul 20</Text>
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 20, color: "#f45757" }}>- $ 47,5</Text>
            </View>
          </View>
          <View style={transaction.scroll.item}>
            <View style={transaction.scroll.itemLeft}>
              <View
                style={{
                  backgroundColor: "#c1d8e8",
                  padding: 5,
                  borderRadius: 10,
                  marginRight: 15,
                }}
              >
                <Ionicons
                  name="cash"
                  style={{ color: "#151515", fontSize: 40, fontWeight: 800 }}
                  size={25}
                />
              </View>
              <View>
                <Text style={transaction.scroll.itemText}>Cash</Text>
                <Text style={transaction.scroll.itemText}>Jul 20</Text>
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 20, color: "#60d960" }}>+ $ 200,05</Text>
            </View>
          </View>
          <View style={transaction.scroll.item}>
            <View style={transaction.scroll.itemLeft}>
              <View
                style={{
                  backgroundColor: "#c1d8e8",
                  padding: 5,
                  borderRadius: 10,
                  marginRight: 15,
                }}
              >
                <Ionicons
                  name="logo-xbox"
                  style={{ color: "#238d23", fontSize: 40, fontWeight: 800 }}
                  size={25}
                />
              </View>
              <View>
                <Text style={transaction.scroll.itemText}>Games</Text>
                <Text style={transaction.scroll.itemText}>Jul 17</Text>
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 20, color: "#f45757" }}>- $ 107,5</Text>
            </View>
          </View>
          <View style={transaction.scroll.item}>
            <View style={transaction.scroll.itemLeft}>
              <View
                style={{
                  backgroundColor: "#c1d8e8",
                  padding: 5,
                  borderRadius: 10,
                  marginRight: 15,
                }}
              >
                <Ionicons
                  name="fast-food-outline"
                  style={{ color: "#151515", fontSize: 40, fontWeight: 800 }}
                  size={25}
                />
              </View>
              <View>
                <Text style={transaction.scroll.itemText}>Food & Drinks</Text>
                <Text style={transaction.scroll.itemText}>Jul 20</Text>
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 20, color: "#f45757" }}>- $ 47,5</Text>
            </View>
          </View>
          <View style={transaction.scroll.item}>
            <View style={transaction.scroll.itemLeft}>
              <View
                style={{
                  backgroundColor: "#c1d8e8",
                  padding: 5,
                  borderRadius: 10,
                  marginRight: 15,
                }}
              >
                <Ionicons
                  name="cash"
                  style={{ color: "#151515", fontSize: 40, fontWeight: 800 }}
                  size={25}
                />
              </View>
              <View>
                <Text style={transaction.scroll.itemText}>Cash</Text>
                <Text style={transaction.scroll.itemText}>Jul 20</Text>
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 20, color: "#60d960" }}>+ $ 200,05</Text>
            </View>
          </View>
          <View style={transaction.scroll.item}>
            <View style={transaction.scroll.itemLeft}>
              <View
                style={{
                  backgroundColor: "#c1d8e8",
                  padding: 5,
                  borderRadius: 10,
                  marginRight: 15,
                }}
              >
                <Ionicons
                  name="logo-xbox"
                  style={{ color: "#238d23", fontSize: 40, fontWeight: 800 }}
                  size={25}
                />
              </View>
              <View>
                <Text style={transaction.scroll.itemText}>Games</Text>
                <Text style={transaction.scroll.itemText}>Jul 17</Text>
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 20, color: "#f45757" }}>- $ 107,5</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default TransactionList;
