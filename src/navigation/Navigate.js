import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './stackNavigation/StackNavigation';
import { DraverNavigation } from './drawerNavigation/DraverNavigation';

export const Navigate = () =>  {
    return (
      <NavigationContainer>
         {/* <StackNavigation /> */}
         <DraverNavigation />
      </NavigationContainer>
    );
  }