// App.js
import React from 'react';
import { NativeRouter, Route } from 'react-router-native';

import HomeScreen from './HomeScreen';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';

const Page = () => {
  return (
    <NativeRouter>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/screen1" component={Screen1} />
      <Route path="/screen2" component={Screen2} />
      <Route path="/screen3" component={Screen3} />
    </NativeRouter>
  );
};

export default Page;
