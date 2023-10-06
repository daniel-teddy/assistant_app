import React, { useState } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const MyDateTimePicker = ({ onDateTimeSelect }) => {
  const [dateTime, setDateTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(true); // Set this to true to show the picker initially

  const handleDateChange = (event, selectedDate) => {
    setShowPicker(Platform.OS === 'ios');
    if (selectedDate) {
      setDateTime(selectedDate);
      onDateTimeSelect(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      {showPicker && (
        <DateTimePicker
          value={dateTime}
          mode="datetime"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'start',
  },
});

export default MyDateTimePicker;
