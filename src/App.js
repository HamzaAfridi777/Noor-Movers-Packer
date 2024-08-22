import React from "react";
import { Routes,Route} from "react-router-dom";
import BookingProcess from "./Tabs/Showroom/BookingProcess";
import ToyotaSure from "./Tabs/Showroom/ToyotaSure";
import ExpressMaintenance from  "./Tabs/Services/ExpressMaintenance"; 
import MobileService  from "./Tabs/Services/MobileService";
import OnlineAppointment from "./Tabs/Services/OnlineAppointment";
import Warranty from "./Tabs/Services/Warrenty";
import CampaignsPromotions  from "./Tabs/CustomerRelations/CampaignsPromotions";

//////CustomrRelations
import CRActivities from "./Tabs/CustomerRelations/CRActivities";
import CROnlineAppointment from "./Tabs/CustomerRelations/CROnlineAppointment";
import OnlineComplaints from "./Tabs/CustomerRelations/OnlineComplaints";
import Faqs from "./Tabs/CustomerRelations/Faqs";
import AboutUs from "./Tabs/CustomerRelations/AboutUs"

///////Insurance 
import Insurance  from "./Tabs/Insurance/Insurance";
import ApplyNow from "./Tabs/Insurance/ApplyNow";

////career Tab
import Career from "./Tabs/Career/Career";
import ToyotaContact from "./Tabs/Career/ToyotaContact";
import ActivitiesCampaings from "./Tabs/Career/ActivitiesCampaings";
import GetInTouch from "./Tabs/Career/GetInTouch";
import Blog from "./Tabs/Career/Blog";
import Blog2 from "./Tabs/Career/Blog2";
import Blog3 from "./Tabs/Career/Blog3";
import PrivacyPolicy  from "./Tabs/Career/PrivacyPolicy";
import TermsConditions from "./Tabs/Career/TermsConditions";
import CompanyProfile from "./Tabs/Career/CompanyProfile";

//import Layout from "./layouts/layout"; // Add this import
import Home from "./Tabs/Home";
const App = () => {

  return (
    <> 
 <Routes>
 /////Home Tab
<Route path="/" element={<Home/>}/>

/////Showroom
 <Route path="/BookingProcess" element={<BookingProcess/>}/>
 <Route path="/ToyotaSure" element={<ToyotaSure/>}/>
 <Route path="/CampaignsPromotions" element={<CampaignsPromotions/>}/>

/////Services
<Route path="/ResidentialMoving" element={<ExpressMaintenance/>}/>
<Route path="/CommercialRelocation" element={<MobileService />}/>
<Route path="/InternationalMoving" element={<Warranty />}/>

<Route path="/OnlineAppointment" element={<OnlineAppointment />}/>

//////CustomerRelations
<Route path="/CRActivities" element={<CRActivities />}/>
<Route path="/CROnlineAppointment" element={<CROnlineAppointment />}/>
<Route path="/OnlineComplaints" element={<OnlineComplaints/>}/>

<Route path="/Faqs" element={<Faqs/>}/>
<Route path="/AboutUs" element={<AboutUs/>}/>
<Route path="/Insurance" element={<Insurance/>}/>
<Route path="/ApplyNow" element={<ApplyNow/>}/>
<Route path="/Career" element={<Career/>}/>
<Route path="/ToyotaContact" element={<ToyotaContact/>}/>

<Route path="/ActivitiesCampaings" element={<ActivitiesCampaings/>}/>
<Route path="/GetInTouch" element={<GetInTouch/>}/>
<Route path="/Blog" element={<Blog/>}/>
<Route path="/Blog2" element={<Blog2/>}/>
<Route path="/Blog3" element={<Blog3/>}/>
<Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
<Route path="/TermsConditions" element={<TermsConditions/>}/>
<Route path="/CompanyProfile" element={<CompanyProfile/>}/>


</Routes>
 
    </>
  );
};

export default App;
