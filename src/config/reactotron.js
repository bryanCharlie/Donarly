import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

Reactotron
    .configure() // controls connection & communication settings
    .use(reactotronRedux())
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!
