import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import main from "../_styles/mainStyle";
import ClearImg from "../assets/icons/clear";
import CloudImg from "../assets/icons/cloud";
import HazeImg from "../assets/icons/haze";
import RainImg from "../assets/icons/rain";
import SnowImg from "../assets/icons/snow";
import StormImg from "../assets/icons/storm";
const LocationTemperature = () => {
    const [currentMonth, setcurrentMonth] = useState("");
    const [currentYear, setCurrentYear] = useState("");
    const [currentDay, setCurrentDay] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [wlcMsg, setWlcMsg] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");
  const [weatherId, setWeatherId] = useState("")

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


  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === "granted") {
        const location = await Location.getCurrentPositionAsync({});
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
      } else {
        console.log("Location permission denied");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getCityName = async () => {
    try {
      const apiKey = "47dc35b3d4b2404b5638555fdec29645";
      // nicosia coordinates
      const exlat = "35.1748976";
      const exlng = "33.3638568";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
      );
    //   console.log("API Response:", response.data);

      if (response) {
        setCity(response.data.name);
        setTemperature((response.data.main.temp - 273.15).toFixed(0));
        setWeatherId(response.data.weather[0].id);
        // console.log(weatherId)

        if(weatherId == 800){
            setWeatherIcon(<ClearImg style={main.iconImg} />)
            
        }else if(weatherId >= 200 && weatherId <= 232){
            setWeatherIcon(<StormImg style={main.iconImg} />)
            
        }else if(weatherId >= 600 && weatherId <= 622){
            setWeatherIcon(<SnowImg style={main.iconImg} />)
            
        }else if(weatherId >= 701 && weatherId <= 781){
           setWeatherIcon(<HazeImg style={main.iconImg} />)
           
        }else if(weatherId >= 801 && weatherId <= 804){
            setWeatherIcon(<CloudImg style={main.iconImg} />)
            
        }else if((weatherId >= 500 && weatherId <= 531) || (weatherId >= 300 && weatherId <= 321)){
           setWeatherIcon(<RainImg style={main.iconImg} />)
           
        }


      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      getCityName();
    }
  }, [latitude, longitude]);

  return (
    <View style={main.midText}>
      <Text style={main.helloText.text}>
        {currentDate || "Thursday, July 13, 2023"}
      </Text>
      <Text style={main.timeText}>{currentTime || "10:21:13 AM"}</Text>
      {weatherIcon || <CloudImg style={main.iconImg} />}

      <Text style={main.textTemp}>{temperature + "℃" || "13 ℃"}</Text>
      <Text style={main.dateText}>{city || "Location"}</Text>
    </View>
  );
};

export default LocationTemperature;
