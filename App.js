
import React from 'react'
import { Navigate } from './src/navigation/Navigate'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './src/ui/home/Home';
import { Courses } from './src/ui/courses/Courses';
const Drawer = createDrawerNavigator();
const App = () => {

  return (
    <>
      <Navigate />
    </>
  )
}

export default App