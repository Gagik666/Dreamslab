import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../../ui/home/Home';
import { Courses } from '../../ui/courses/Courses';
import { DrawerContent } from './drawerContent/DrawerContent';
import { Programs } from '../../ui/programs/Programs';
import { Discussions } from '../../ui/discussions/Discussions';
import { Certificat } from '../../ui/certificat/Certificat';

const Drawer = createDrawerNavigator();

export const DraverNavigation = () => {
    return (
      <Drawer.Navigator   drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Courses" component={Courses} />
        <Drawer.Screen name="Programs" component={Programs} />
        <Drawer.Screen name="Certificat" component={Certificat} />
        <Drawer.Screen name="Discussions" component={Discussions} />
      </Drawer.Navigator>
    );
  }