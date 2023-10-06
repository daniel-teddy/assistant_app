import React, { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";
import styles from "../_style";
import main from "../_styles/mainStyle";
import Calendar from "../_components/Calendar";
import CurrrencyCard from "../_components/currencyCard";
import Navbar from "../_components/navBar";
import CloudImg from "../assets/icons/cloud";
import ClearImg from "../assets/icons/clear";
import HazeImg from "../assets/icons/haze";
import RainImg from "../assets/icons/rain";
import SnowImg from "../assets/icons/snow";
import StormImg from "../assets/icons/storm";
import LocationTemperature from "../_components/LocationTemperature";

export default function Home() {
    const [currentDate, setCurrentDate] = useState("");
    const [currentTime, setCurrentTime] = useState("");
    const [currentMonth, setcurrentMonth] = useState("");
    const [currentYear, setCurrentYear] = useState("");
    const [currentDay, setCurrentDay] = useState("");
    const [wlcMsg, setWlcMsg] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
  
    var monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
  
    useEffect(() => {
      var v_date = new Date().getDate();
      var month = monthNames[new Date().getMonth()];
      var year = new Date().getFullYear();
      setCurrentDate(v_date + " " + month + " " + year);
      setcurrentMonth(month);
      setCurrentYear(year);
      setCurrentDay(v_date);
    });
  
    setInterval(() => {
      const timer = new Date();
      const option = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      };
      const formateTimer = new Intl.DateTimeFormat("en-us", option).format(timer);
      let time = `${`${timer.getHours()}`.padStart(
        2,
        "0"
      )}:${`${timer.getMinutes()}`.padStart(
        2,
        "0"
      )}: ${`${timer.getSeconds()}`.padStart(2, "0")}`;
      setCurrentTime(formateTimer);
      let now = new Date().getHours();
      if (now >= 5 && now < 12) {
        setWlcMsg("Good Morning Teddy, welcome back !!!");
      } else if (now >= 12 && now <= 17) {
        setWlcMsg("Good Afternoon Teddy, welcome back !!!");
      } else if (now > 17 && now <= 22) {
        setWlcMsg("Good evening Teddy, welcome back !!!");
      } else if (now > 22 && now <= 24) {
        setWlcMsg("Hello Teddy, you should consider going to bed  !!!");
      } else {
        setWlcMsg("Hello Teddy,it's past midnight !!!");
      }
    }, 1000);
  
    return (
        <View style={styles.container}>
          <View style={main.page}>
          <View style={main.helloText}>
            <Text style={main.helloText.text}>
              {wlcMsg || "Good morning Teddy, welcome back"}
            </Text>
          </View>
          <LocationTemperature />
          <View style={main.Suggestion}>
            <Text style={main.helloText.text}>Lilith:</Text>
            <Text style={main.helloText.textSm}>
              Always find a way to keep moving forward, that's where the future is
              ...
            </Text>
          </View>
          <View style={main.Calendar}>
            <View style={main.calContain}>
              <Calendar onSelectDate={setSelectedDate} selected={selectedDate} />
            </View>
          </View>
          <CurrrencyCard />
        </View>
        <Navbar />
        </View>
    );
  }
  