import React, {useEffect, useState} from "react";
import axios from "axios";
import { View, Text } from "react-native";
import main from "../_styles/mainStyle";

export default function CurrrencyCard() {

    const [exchangeRatesUsd, setExchangeRatesUsd] = useState({});
    const [exchangeRatesEuro, setExchangeRatesEuro] = useState({});
    const [exchangeRatesGbp, setExchangeRatesGbp] = useState({});
    
    useEffect(() => {
      const fetchExchangeRatesUsd = async () => {
        try {
          const response = await axios.get(
            'https://open.er-api.com/v6/latest/usd'
          );
         // console.log(response);
          setExchangeRatesUsd(response.data.rates);
        } catch (error) {
          console.log('Error fetching exchange rates:', error);
        }
      };
      fetchExchangeRatesUsd();
  
      const fetchExchangeRatesEuro = async () => {
        try {
          const response = await axios.get(
            'https://open.er-api.com/v6/latest/eur'
          );
         // console.log(response);
          setExchangeRatesEuro(response.data.rates);
        } catch (error) {
          console.log('Error fetching exchange rates:', error);
        }
      };
      fetchExchangeRatesEuro();
  
      const fetchExchangeRatesGbp = async () => {
        try {
          const response = await axios.get(
            'https://open.er-api.com/v6/latest/gbp'
          );
         // console.log(response);
          setExchangeRatesGbp(response.data.rates);
        } catch (error) {
          console.log('Error fetching exchange rates:', error);
        }
      };
      fetchExchangeRatesGbp();
  
    }, []);
    const formatRate = (rate) => {
      return parseFloat(rate).toFixed(2);
    };
    const USDtoTL = formatRate(exchangeRatesUsd.TRY);
    const EURtoTL = formatRate(exchangeRatesEuro.TRY);
    const GBPtoTL = formatRate(exchangeRatesGbp.TRY);
    return (
        <View style={main.exchange}>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>Today's exchange rates</Text>
          
        <View style={main.exchange.view}>
            <View style={main.exchange.sm_view}>
              <Text >USD - TRY</Text>
              <Text style={main.exchange.title}>{USDtoTL} TL</Text>
            </View>
            <View style={main.exchange.sm_view}>
              <Text >GBP - TRY</Text>
              <Text style={main.exchange.title}>{GBPtoTL} TL</Text>
            </View>
            <View style={main.exchange.sm_view}>
              <Text >EUR - TRY</Text>
              <Text style={main.exchange.title}>{EURtoTL}TL</Text>
            </View>
          </View>
          
        </View>
    );
}