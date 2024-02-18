import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Forget from "./Components/Auth/Forget";
import UpdatePassword from "./Components/Auth/UpdatePassword";
import ResetPassword from "./Components/Auth/ResetPassword";
import VerifyEmail from "./Components/Auth/Verify-Email";
import Profile from "./Components/Admin/Profile";
import Users from "./Components/Admin/User";
import Notifications from "./Components/Admin/Notification";
import PublicLayout from "./Components/PublicLayout/PublicLayout";
import AdminLayout from "./Components/AdminLayout/Layout";
import Home from "./Components/Public/Home";
import About from "./Components/Public/About";
import Thank_you from "./Components/Auth/Thank-you";
import Contact from "./Components/Public/Contact";
import Services from "./Components/Public/Services";
import Test_page from "./Components/Admin/Test-page";
import Dashboard from "./Components/Admin/Dashboard";
import Events from "./Components/Admin/Events";
import MemorialFlower from "./Components/Admin/MemorialFlower";

import FamilyDetail from "./Components/Admin/FamilyDetail";
import EventsList from "./Components/Admin/EventsList";
import FamilyDetail_List from "./Components/Admin/FamilyDetail-List";
import MemorialFlower_List from "./Components/Admin/MemorialFlower-List";
import ProtectedRoute from "./Components/Routing/ProtectRoute";
import PageNotFound from "./PageNotFound";
import AllUserList from "./Components/Admin/AllUserList";
import NewAccountLogin from "./Components/Admin/NewAccountLogin";
import Pre_plan from "./Components/Public/Pre-plan";
import PublicRoute from "./Components/Routing/ProtectRoute/PublicRoute";
import Partner_request from "./Components/Admin/Partner-request";
import Legacy from "./Components/Admin/Legacy";
import Legacy_detailsShow from "./Components/Admin/Legacy-detailsShow";
import Edit_Lagacy from "./Components/Admin/Edit-Lagacy";
import Famil_Todo from "./Components/Admin/Family-Todo";
import Family_Todo_List from "./Components/Admin/Family-Todo-List";
import Blog from "./Components/Public/Blog";
import Memorial_List from "./Components/Admin/Memorial-List";
import Member_relation_legacyShow from "./Components/Admin/Member-relation-legacyShow";
import Parnter_Vender_profile from "./Components/Admin/Parnter-Vender-profile";
import Todo_details_page from "./Components/Admin/Todo-details-page";
import EventDetailShow from "./Components/Admin/EventDetailShow";
import Meeting from "./Components/Admin/Meeting";
import Update_Legacy_Password from "./Components/Admin/Update-Legacy-Password";
import Forgot_Legacy_Password from "./Components/Admin/Forgot-Legacy-Password";
import Sale_property_Add from "./Components/Admin/Sale-Property-Add";
import Sale_Property_List from "./Components/Admin/Sale-Property-List";
import Sales from "./Components/Partner/Sales";
import Partner_Chat from "./Components/Partner/Partner-Chat";
import Gallery from "./Components/Admin/Gallery";
import Partners_listShow from "./Components/Admin/Partners-listShow";
import AddImage_Gallery from "./Components/Admin/AddImage-Gallery";
import Partner_Register from "./Components/Partner/Partner-Register";
import Partner_products from "./Components/Partner/Partner-products";
import Partner_profile from "./Components/Partner/Partner-profile";
import Partner_products_detailpage from "./Components/Partner/Partner-products-detailpage";
import Partner_thankyou from "./Components/Partner/Partner-thankyou";
import Partner_Active_contract from "./Components/Partner/Partner-Active-contract";
import Partner_venue from "./Components/Partner/Partner-venue";
import Partner_Edit_Venue from "./Components/Partner/Partner-Edit-Venue";
import Partner_venue_List from "./Components/Partner/Partner-venue-List";
import Partner_SuggestionAdd from "./Components/Partner/partner-SuggestionAdd";
import Partner_Suggestion_list from "./Components/Partner/Partner-Suggestion_list";
import Partner_suggestion_Detail from "./Components/Partner/Partner-suggestion-Detail";
import Contact_us_add from "./Components/Admin/Contact-us-add";
import Blog_add from "./Components/Admin/Blog-add";
import Blog_List from "./Components/Admin/Blog-List";
import Family_page from "./Components/Admin/Family-page";
import Partner_add_User from "./Components/Partner/Partner-add-User";
import User_Choose_Plan from "./Components/Partner/User-Choose-Plan";
import TalkToSupport from "./Components/Admin/TalkToSupport";

import Plan_Add from "./Components/Admin/PlanSubscription/plan-Add";
import Plan_list from "./Components/Admin/PlanSubscription/Plan-list";
import PaymentSuccess from "./Components/Admin/PlanSubscription/PaymentSuccess";
import Partner_Own_UsersList from "./Components/Partner/Partner-Own-UsersList";

import Partner_Add_Tutorial from "./Components/Partner/Partner-Add-Tutorial";
import Partner_Tutorial_List from "./Components/Partner/Partner-Tutorial-List";
import AdminPartner_Tutorial_List from "./Components/Partner/AdminPartner-Tutorial-List";
import Partner_Add_Product from "./Components/Partner/Partner-Add-Product";
import Partner_Product_list from "./Components/Partner/Partner-Product-list";
import MyTemplate from "./Components/Admin/Template";
import VenderRegister from "./Components/Vender/VenderRegister";
import VenderProduct from "./Components/Vender/VenderProduct";
import VenderProductList from "./Components/Vender/VenderProductList";
import Subscription_List from "./Components/Vender/VendorSubs";
import Vender_productEdit from "./Components/Vender/Vender-productEdit";
import VenderUserList from "./Components/Vender/VenderUserList";

import VendorContractList from "./Components/Vender/VendorContractList";
import Vender_NotesAdd from "./Components/Vender/Vender-NotesAdd";
import Vender_NotesList from "./Components/Vender/Vender-NotesList";

import StepbyStepQuestion from "./Components/Admin/StepbyStepQuestion";
import Question_add from "./Components/Admin/Question-add";
import { useState } from "react";
import InviteRequests from "./Components/Admin/InviteRequests";
import My_Videos from "./Components/Admin/My-Videos";
import My_videosList from "./Components/Admin/My-VideosList";
import Partner_Status_Add from "./Components/Admin/Partner-Status-Add";
import Partner_Status_List from "./Components/Admin/Partner-Status-List";
import Terms_Condtion from "./Components/Public/Terms&Condtion";
import Partner_Status_Edit from "./Components/Admin/Partner-Status-Edit";
import Careers from "./Components/Public/Careers";
import CareersUserRequestList from "./Components/Admin/CareersUserRequestList";
import CareersJobList from "./Components/Admin/CareersJobList";
import CareersJobAdd from "./Components/Admin/CareersJobAdd";
import SimpleAdminRegister from "./Components/SimpleAdmin/SimpleAdminRegister";
import FuneralPersonAdd from "./Components/User1/FuneralPersonAdd";
import FuneralPersonList from "./Components/User1/FuneralPersonList";
import FuneralPersonEdit from "./Components/User1/FuneralPersonEdit";
import CareersJobApply from "./Components/Admin/CareersJobApply";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/test" element={<Test_page />} />

          <Route
            path="/login"
            element={
              // <PublicRoute>
              <Login />
              // </PublicRoute>
            }
          />
          <Route path="/register" element={<Register />} />

          <Route path="/thank-you" element={<Thank_you />} />

          <Route path="/forget-password" element={<Forget />} />
          <Route path="/update-password" element={<UpdatePassword />} />
          <Route
            path="/reset-password/:token/:uid"
            element={<ResetPassword />}
          />
          <Route
            path="/verify-email/:decodedID/:tokenId"
            element={<VerifyEmail />}
          />
          <Route path="/thankyou/partner" element={<Partner_thankyou />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />

          <Route element={<PublicLayout />}>
            <Route path="/careers" element={<Careers />} />
            <Route
              path="/job/apply/:jobApplyID"
              element={<CareersJobApply />}
            />

            <Route path="/Partner/register" element={<Partner_Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms/condtions" element={<Terms_Condtion />} />

            <Route path="/templates" element={<MyTemplate />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pre-plan" element={<Pre_plan />} />
            <Route path="/blog" element={<Blog />} />

            <Route
              path="/plan"
              element={
                // <ProtectedRoute>
                <User_Choose_Plan />
                // </ProtectedRoute>
              }
            />

            <Route
              path="/business/:businesType"
              element={<Partner_products />}
            />
            <Route
              path="/products/detail"
              element={<Partner_products_detailpage />}
            />

            <Route path="/vender/register" element={<VenderRegister />} />
          </Route>

          <Route
            element={<AdminLayout toggle={toggle} setToggle={setToggle} />}
          >
            <Route
              path="/funeral/add"
              element={
                <ProtectedRoute>
                  <FuneralPersonAdd />
                </ProtectedRoute>
              }
            />

            <Route
              path="/funeral/edit/:FuneralPersonId"
              element={
                <ProtectedRoute>
                  <FuneralPersonEdit />
                </ProtectedRoute>
              }
            />

            <Route
              path="/funeral/data"
              element={
                <ProtectedRoute>
                  <FuneralPersonList />
                </ProtectedRoute>
              }
            />

            <Route
              path="/user/admin/register"
              element={
                <ProtectedRoute>
                  <SimpleAdminRegister />
                </ProtectedRoute>
              }
            />

            <Route
              path="/user/request/job"
              element={
                <ProtectedRoute>
                  <CareersUserRequestList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/alljob/list"
              element={
                <ProtectedRoute>
                  <CareersJobList />
                </ProtectedRoute>
              }
            />

            <Route
              path="/alljob/add"
              element={
                <ProtectedRoute>
                  <CareersJobAdd />
                </ProtectedRoute>
              }
            />

            <Route
              path="/alljob/edit/:jobID"
              element={
                <ProtectedRoute>
                  <CareersJobAdd />
                </ProtectedRoute>
              }
            />

            <Route
              path="/myvideo"
              element={
                <ProtectedRoute>
                  <My_Videos />
                </ProtectedRoute>
              }
            />

            <Route
              path="/partner/status/add"
              element={
                <ProtectedRoute>
                  <Partner_Status_Add />
                </ProtectedRoute>
              }
            />

            <Route
              path="/partner/status/list"
              element={
                <ProtectedRoute>
                  <Partner_Status_List />
                </ProtectedRoute>
              }
            />

            <Route
              path="/partner/status/edit/:statusID"
              element={
                <ProtectedRoute>
                  <Partner_Status_Edit />
                </ProtectedRoute>
              }
            />

            <Route
              path="/myvideo/:videoId"
              element={
                <ProtectedRoute>
                  <My_Videos />
                </ProtectedRoute>
              }
            />
            <Route
              path="/myvideo/list"
              element={
                <ProtectedRoute>
                  <My_videosList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/invite/requests"
              element={
                <ProtectedRoute>
                  <InviteRequests />
                </ProtectedRoute>
              }
            />

            <Route
              path="/question"
              element={
                <ProtectedRoute>
                  <StepbyStepQuestion />
                </ProtectedRoute>
              }
            />
            <Route
              path="/question-add"
              element={
                <ProtectedRoute>
                  <Question_add />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile/info/:profileId"
              element={
                <ProtectedRoute>
                  <Partner_products_detailpage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/all/venders"
              element={
                <ProtectedRoute>
                  <VenderUserList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/vender/shop"
              element={
                <ProtectedRoute>
                  <VenderProduct />
                </ProtectedRoute>
              }
            />
            <Route
              path="/vender/shop/:venderPoductId"
              element={
                <ProtectedRoute>
                  <Vender_productEdit />
                </ProtectedRoute>
              }
            />
            <Route
              path="/vender/product/list"
              element={
                <ProtectedRoute>
                  <VenderProductList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/vendor-subscription"
              element={
                <ProtectedRoute>
                  <Subscription_List />
                </ProtectedRoute>
              }
            />
            <Route
              path="/vender/notes"
              element={
                <ProtectedRoute>
                  <Vender_NotesAdd />
                </ProtectedRoute>
              }
            />

            <Route
              path="/vender/notes/:venderNoteId"
              element={
                <ProtectedRoute>
                  <Vender_NotesAdd />
                </ProtectedRoute>
              }
            />
            <Route
              path="/vender/notes/list"
              element={
                <ProtectedRoute>
                  <Vender_NotesList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/support/chat"
              element={
                <ProtectedRoute>
                  <TalkToSupport />
                </ProtectedRoute>
              }
            />
            <Route
              path="/partner/profile"
              element={
                <ProtectedRoute>
                  <Partner_profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/parter/users"
              element={
                <ProtectedRoute>
                  <Partner_Own_UsersList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add-user"
              element={
                <ProtectedRoute>
                  <Partner_add_User />
                </ProtectedRoute>
              }
            />
            <Route
              path="/todo"
              element={
                <ProtectedRoute>
                  <Famil_Todo />
                </ProtectedRoute>
              }
            />
            <Route
              path="/todo/:todoId"
              element={
                <ProtectedRoute>
                  <Famil_Todo />
                </ProtectedRoute>
              }
            />
            <Route
              path="/blog-add"
              element={
                <ProtectedRoute>
                  <Blog_add />
                </ProtectedRoute>
              }
            />
            <Route
              path="/blog/edit/:blogId"
              element={
                <ProtectedRoute>
                  <Blog_add />
                </ProtectedRoute>
              }
            />
            <Route
              path="/blog-list"
              element={
                <ProtectedRoute>
                  <Blog_List />
                </ProtectedRoute>
              }
            />
            <Route
              path="/todo-list"
              element={
                <ProtectedRoute>
                  <Family_Todo_List />
                </ProtectedRoute>
              }
            />
            <Route
              path="/family"
              element={
                <ProtectedRoute>
                  <Family_page />
                </ProtectedRoute>
              }
            />
            <Route
              path="/todo-details/:todoId"
              element={
                <ProtectedRoute>
                  <Todo_details_page />
                </ProtectedRoute>
              }
            />
            <Route
              path="/meeting"
              element={
                <ProtectedRoute>
                  <Meeting />
                </ProtectedRoute>
              }
            />
            <Route
              path="/update-legacy-password"
              element={
                <ProtectedRoute>
                  <Update_Legacy_Password />
                </ProtectedRoute>
              }
            />
            <Route
              path="/sale-property"
              element={
                <ProtectedRoute>
                  <Sale_property_Add />
                </ProtectedRoute>
              }
            />
            <Route
              path="/sale-property/:propertyId"
              element={
                <ProtectedRoute>
                  <Sale_property_Add />
                </ProtectedRoute>
              }
            />
            <Route
              path="/sale-property-list"
              element={
                <ProtectedRoute>
                  <Sale_Property_List />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contract-list"
              element={
                <ProtectedRoute>
                  <VendorContractList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/forgot-legacy-password"
              element={
                <ProtectedRoute>
                  <Forgot_Legacy_Password />
                </ProtectedRoute>
              }
            />
            <Route
              path="/events-detail/:eventId"
              element={
                <ProtectedRoute>
                  <EventDetailShow />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit-legacy/:legacyID"
              element={
                <ProtectedRoute>
                  <Edit_Lagacy />
                </ProtectedRoute>
              }
            />
            {/* <Route
              path="/legacy"
              element={
                <ProtectedRoute>
                  <Legacy_detailsShow />
                </ProtectedRoute>
              }
            /> */}
            <Route
              path="/legacy"
              element={
                <ProtectedRoute>
                  <Legacy />
                </ProtectedRoute>
              }
            />
            <Route
              path="/legacyinfo/:legacyIdGet/:ownerId"
              element={
                <ProtectedRoute>
                  <Member_relation_legacyShow />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user-profile/:userId"
              element={
                <ProtectedRoute>
                  <Parnter_Vender_profile />
                </ProtectedRoute>
              }
            />
            {/* 
            <Route
              path="/legacy"
              element={
                <ProtectedRoute>
                  <Common_lagacy_Comp />
                </ProtectedRoute>
              }
            /> */}
            <Route
              path="/memorial-list"
              element={
                <ProtectedRoute>
                  <Memorial_List />
                </ProtectedRoute>
              }
            />
            <Route
              path="/users"
              element={
                <ProtectedRoute>
                  <Users />
                </ProtectedRoute>
              }
            />
            <Route
              path="/notifications"
              element={
                <ProtectedRoute>
                  <Notifications />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/events"
              element={
                <ProtectedRoute>
                  <Events />
                </ProtectedRoute>
              }
            />
            <Route
              path="/events-list"
              element={
                <ProtectedRoute>
                  <EventsList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/all-partners"
              element={
                <ProtectedRoute>
                  <Partners_listShow />
                </ProtectedRoute>
              }
            />
            <Route
              path="/gallery"
              element={
                <ProtectedRoute>
                  <Gallery />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tutorial"
              element={
                <ProtectedRoute>
                  <Partner_Add_Tutorial />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tutorial/show"
              element={
                <ProtectedRoute>
                  <AdminPartner_Tutorial_List />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tutorial/:tutorialId"
              element={
                <ProtectedRoute>
                  <Partner_Add_Tutorial />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tutorial/list"
              element={
                <ProtectedRoute>
                  <Partner_Tutorial_List />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contact-us-add"
              element={
                <ProtectedRoute>
                  <Contact_us_add />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add-image-gallery"
              element={
                <ProtectedRoute>
                  <AddImage_Gallery />
                </ProtectedRoute>
              }
            />
            <Route
              path="/flower"
              element={
                <ProtectedRoute>
                  <MemorialFlower />
                </ProtectedRoute>
              }
            />
            <Route
              path="/flower-list"
              element={
                <ProtectedRoute>
                  <MemorialFlower_List />
                </ProtectedRoute>
              }
            />
            <Route
              path="/sales"
              element={
                <ProtectedRoute>
                  <Sales />
                </ProtectedRoute>
              }
            />
            <Route
              path="/partner/chat"
              element={
                <ProtectedRoute>
                  <Partner_Chat />
                </ProtectedRoute>
              }
            />
            <Route
              path="/partner/chat/:chatId"
              element={
                <ProtectedRoute>
                  <Partner_Chat />
                </ProtectedRoute>
              }
            />
            <Route
              path="/active/contract"
              element={
                <ProtectedRoute>
                  <Partner_Active_contract />
                </ProtectedRoute>
              }
            />
            <Route
              path="/partner/venue"
              element={
                <ProtectedRoute>
                  <Partner_venue />
                </ProtectedRoute>
              }
            />
            <Route
              path="/partner/venue/list"
              element={
                <ProtectedRoute>
                  <Partner_venue_List />
                </ProtectedRoute>
              }
            />
            <Route
              path="/suggestion/add"
              element={
                <ProtectedRoute>
                  <Partner_SuggestionAdd />
                </ProtectedRoute>
              }
            />
            <Route
              path="/suggestion/list/"
              element={
                <ProtectedRoute>
                  <Partner_Suggestion_list />
                </ProtectedRoute>
              }
            />
            <Route
              path="/suggestion/detail/:SuggestionId"
              element={
                <ProtectedRoute>
                  <Partner_suggestion_Detail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit/partner/venue/:venuId"
              element={
                <ProtectedRoute>
                  <Partner_Edit_Venue />
                </ProtectedRoute>
              }
            />
            <Route
              path="/product/add"
              element={
                <ProtectedRoute>
                  <Partner_Add_Product />
                </ProtectedRoute>
              }
            />
            <Route
              path="/product/edit/:prodID"
              element={
                <ProtectedRoute>
                  <Partner_Add_Product />
                </ProtectedRoute>
              }
            />

            <Route
              path="partner/products/list"
              element={
                <ProtectedRoute>
                  <Partner_Product_list />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user-request"
              element={
                <ProtectedRoute>
                  <Partner_request />
                </ProtectedRoute>
              }
            />
            <Route
              path="/family-message"
              element={
                <ProtectedRoute>
                  <FamilyDetail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/family-message-list"
              element={
                <ProtectedRoute>
                  <FamilyDetail_List />
                </ProtectedRoute>
              }
            />
            <Route
              path="/all-userlist"
              element={
                <ProtectedRoute>
                  <AllUserList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/all-newUsers"
              element={
                <ProtectedRoute>
                  <NewAccountLogin />
                </ProtectedRoute>
              }
            />
            <Route
              path="/plan-add"
              element={
                <ProtectedRoute>
                  <Plan_Add />
                </ProtectedRoute>
              }
            />
            <Route
              path="/plan-list"
              element={
                <ProtectedRoute>
                  <Plan_list />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
