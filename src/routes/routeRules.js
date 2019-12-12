import Signup from '../containers/Signup';
import Login from '../containers/Login';
import ListingData from '../containers/ListingData';
import Messages from '../containers/whatsapp/Messages';
import LadningPage from '../containers/whatsapp/LadningPage';
import TabViewExample from '../containers/whatsapp/TabViewExample';

const routeRules = {

    Signup: {screen: Signup},
    Login: {screen: Login},
    ListingData: {screen: ListingData},
    Messages: {screen: Messages},
    LandingPage: {screen: LadningPage},
    TabView: {screen: TabViewExample},
};

export default routeRules;
