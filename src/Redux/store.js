import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

// import rootReducer from "./reducers";
import { combineReducers } from "redux";

import {
  LoginReducer,
  RegisterReducer,
  VerifyEmailReducer,
  ChangePasswordReducer,
  ForgotPasswordReducer,
  SetForgotPasswordAction,
  EditRegisterDataReducer,
  forgetreducer,
} from "./reducers/AuthReducer";
import {
  EventsPostReducer,
  FlowermomorialReducer,
  propertyaddReducer,
  FamilyDetailPostReducer,
  MemorialPersondetailPostReducer,
  EventsListGetReducer,
  EventsDeleteReducer,
  FamilyDetailListReducer,
  EventsDetailShowbyIDReducer,
  Ctegoryreducer,
} from "./reducers/EventsReducer";

import {
  AllUserListReducer,
  NewUserLoginListReducer,
  ProfileUpadteReducer,
  ProfileDetailsGetReducer,
  PartnerRegsiterReducer,
  PartneruserListGetReducer,
  PendingPartneruserListReducer,
  PartnerRequestReducer,
  InviteUserReducer,
  AllRoleGetReducer,
  AllInviteMemberListReducer,
  InviteUserRequestAcceptReducer,
  ContactusDetailsAddReducer,
  ContactusDetailGetReducer,
  UserContactwithAdminReducer,
  UserUpdatePasswordReducer,
  RelTimeNotificationReducer,
  RelTimeNotificationUpdateReducer,
  getUserPartnerReducer,
} from "./reducers/UserReducer";

import {
  LegacyAddReducer,
  LegacyListShowReducer,
  DeleteLegacyReducer,
  LegacyListUpdateReducer,
  LegacyDetailsGetByIDReducer,
  FamilyTodoAddReducer,
  FamilyTodoListShowReducer,
  FamilyTodoDeleteListReducer,
  FamilyTodoGetListByIdReducer,
  FamilyTodoListUpdateReducer,
  LagacyCodeAddReducer,
  OtpVerficationReducer,
  EnterPasswordVerficationReducer,
  MemorialInformationListReducer,
  LegacyDataShowMemberReducer,
  MemberListshowLegacyReducer,
  MemberPermissionGrantReducer,
  GetPermissionListReducer,
  DeletePermissionListReducer,
  GivePermissionLegacypagePostReducer,
  LegacyDeleteAllDataReducer,
  LegacyDeleteOnByOneModalReducer,
  UpadteLegacyPasswordReducer,
  forgotLegacyPasswordReducer,
  ResetLegacyPasswordReducer,
  ListGetSalePropertyPostReducer,
  SalePropertyDeleteReducer,
  SalePropertyEditReducer,
  GetPropertyDataByIDReducer,
  AddImagegalleryReducer,
  GetImagesgalleryReducer,
  DeleteimagesgalleryReducer,
  SalePropertyPostReducer,
  AdminaddBlogReducer,
  AdminShowBlogListReducer,
  AdminShowBlogDeleteReducer,
  AdminGetByIdBlogDataRedcuer,
  AdminShowBlogEditReducer,
  UserSeehisfamilymemberRedcuer,
} from "./reducers/LegacyReducer";

import {
  PartnerAddReducer,
  ActivePartnerShowReducer,
  UserCahtwithPartnerListReducer,
  OverAllChatCountAction,
  ChatSeenReducer,
  UserChatwithPartnerPostReducer,
  PartnerSearchFilterReducer,
  PartnerProfileUpdateReducer,
  PartnerOwnEventsPostReducer,
  PartnerVenueEventGetReducer,
  PartnerVenueEventUpdateReducer,
  PartnerVenueEventDeleteReducer,
  PartnerProfileGetDataReducer,
  PartnerVenuDataGetByIdReducer,
  partnerPlatfromSuggestionPostReducer,
  PartnerPlatfromSuggestionGetReducer,
  AdminDeletePartnerSuggestionReducer,
  PartnerSuggestionGetByIDReducer,
  SupportChatPostReducer,
  SupportChatListGetReducer,
  PartnerAddUserReducer,
  PartnerSeeHisUserListReducer,
  UserHelpListAllMessageReducer,
  AllChatGetBYIdReducr,
  PartnersOwnUsersReducer,
  PartnerTutorialListReducer,
  PartnerAddTutorialReducer,
  PartnerTutorialDeleteReducer,
  IsVerifiedVedioSeeUserRedcuer,
  IsVerifiedUserListRedcuer,
  PartnerTutorialUpdateReducer,
  PartnerTutorialGetDataByidReducer,
  PartnerAddProductReducer,
  PartnerProductAllistReducer,
  PartnerProductDeleteReducer,
  PartnerProductGetDataReducer,
  PartnerProductUpdateReducer,
  UserMessageChatSelectRedcuer,
  GetAllChatListWithUserReducer,
  GetAllUserDataByIdReducer,
  GetHiredPersonListReducer,
  GetAllPersonListReducer,
  GetHirePersonDetailsReducer,
  MyVideoAddReducer,
  MyVideoEditReducer,
  MyVideoGetAllListReducer,
  MyVideoGetDataByIdReducer,
  MyVideoDeleteReducer,
  myUserShowPartnerloginReducer,
} from "./reducers/PartnerReducer";

import {
  AdminCreatePlanReducer,
  AdminShowPlanListReducer,
  AdminDeletePlanReducer,
  PurchasePlanRedcuer,
  SubscriptionCheckReducer,
  paymentOfContractReducer,
  getWalletBalanceReducer,
  VendorBuyPlanReducer,
  getVendorSubsReducer,
} from "./reducers/paymentReducer";

import {
  VenderRegisterReducer,
  VenderAddProdcutRecuer,
  VenderdProdcutListRecuer,
  AllVenderListShowToAdminReducer,
  VenderProdcutDeleteRecuer,
  VenderProdcutGetByIDRecuer,
  VenderUpdateProdcutRecuer,
  VenderAddNotesRecuer,
  VenderNotesListRecuer,
  VenderGetNotesDataByIDReducer,
  VenderNotesUpdateReducer,
  VenderNotesDeleteReducer,
  UserHirePartnerAndVenderReducer,
  UserGetHiredPatnerReducer,
  UserRemovedHiredParterVenderReducer,
  UserAddRatingReducer,
  GetAllRatingsReducer,
  VenderUpdateProdcutReducer,
  EndTheContractReducer,
} from "./reducers/VenderReducer";

import {
  AddFileStatusReducer,
  FileDataGetReducer,
  StateChangeUserReducer,
  GetFileDataByIDReducer,
  DeleteFileReducer,
  UserSendJobInqueryReducer,
  GetUserSendJobInqueryReducer,
  DeleteUserSendJobInqueryReducer,
  AdminAddJobReducer,
  AdminGetAllJobReducer,
  AdminGetByIDJobReducer,
  AdminUpdateJobReducer,
  AdminDeleteJobReducer,
  FuneralPersonAddReducer,
  FuneralPersonGetDataReducer,
  FuneralPersonDataDeleteReducer,
  FuneralPersonDataUpdateReducer,
  UserApplyjobReducer,
  GetApplyAllJobReducer,
  ApplyJobSeeDetailReducer,
  GetAppliedJobDetailReducer,
  StatusUpdateReducer,
} from "./reducers/SuperAdminReducer";

const reducer = combineReducers({
  authReducer: LoginReducer,
  RegisterReducer,
  VerifyEmailReducer,
  ChangePasswordReducer,
  ForgotPasswordReducer,
  SetForgotPasswordAction,
  EditRegisterDataReducer,
  EventsPostReducer,
  FlowermomorialReducer,
  propertyaddReducer,
  FamilyDetailPostReducer,
  MemorialPersondetailPostReducer,
  EventsListGetReducer,
  EventsDeleteReducer,
  FamilyDetailListReducer,
  AllUserListReducer,
  NewUserLoginListReducer,
  ProfileUpadteReducer,
  ProfileDetailsGetReducer,
  PartneruserListGetReducer,
  PartnerRegsiterReducer,
  PendingPartneruserListReducer,
  PartnerRequestReducer,
  InviteUserReducer,
  AllRoleGetReducer,
  AllInviteMemberListReducer,
  InviteUserRequestAcceptReducer,
  LegacyAddReducer,
  LegacyListShowReducer,
  DeleteLegacyReducer,
  LegacyListUpdateReducer,
  LegacyDetailsGetByIDReducer,
  FamilyTodoAddReducer,
  FamilyTodoListShowReducer,
  FamilyTodoDeleteListReducer,
  FamilyTodoGetListByIdReducer,
  FamilyTodoListUpdateReducer,
  LagacyCodeAddReducer,
  OtpVerficationReducer,
  EnterPasswordVerficationReducer,
  MemorialInformationListReducer,
  LegacyDataShowMemberReducer,
  MemberListshowLegacyReducer,
  MemberPermissionGrantReducer,
  GetPermissionListReducer,
  DeletePermissionListReducer,
  GivePermissionLegacypagePostReducer,
  EventsDetailShowbyIDReducer,
  LegacyDeleteAllDataReducer,
  LegacyDeleteOnByOneModalReducer,
  UpadteLegacyPasswordReducer,
  forgotLegacyPasswordReducer,
  ResetLegacyPasswordReducer,
  ListGetSalePropertyPostReducer,
  SalePropertyDeleteReducer,
  SalePropertyEditReducer,
  GetPropertyDataByIDReducer,
  PartnerAddReducer,
  ActivePartnerShowReducer,
  AddImagegalleryReducer,
  GetImagesgalleryReducer,
  DeleteimagesgalleryReducer,
  UserCahtwithPartnerListReducer,
  OverAllChatCountAction,
  ChatSeenReducer,
  UserChatwithPartnerPostReducer,
  PartnerSearchFilterReducer,
  PartnerProfileUpdateReducer,
  SalePropertyPostReducer,
  PartnerOwnEventsPostReducer,
  PartnerVenueEventGetReducer,
  PartnerVenueEventUpdateReducer,
  PartnerVenueEventDeleteReducer,
  PartnerProfileGetDataReducer,
  Ctegoryreducer,
  PartnerVenuDataGetByIdReducer,
  partnerPlatfromSuggestionPostReducer,
  PartnerPlatfromSuggestionGetReducer,
  AdminDeletePartnerSuggestionReducer,
  PartnerSuggestionGetByIDReducer,
  SupportChatPostReducer,
  SupportChatListGetReducer,
  ContactusDetailsAddReducer,
  ContactusDetailGetReducer,
  UserContactwithAdminReducer,
  AdminaddBlogReducer,
  forgetreducer,
  AdminShowBlogListReducer,
  AdminShowBlogDeleteReducer,
  AdminGetByIdBlogDataRedcuer,
  AdminShowBlogEditReducer,
  PartnerAddUserReducer,
  PartnerSeeHisUserListReducer,
  UserUpdatePasswordReducer,
  UserHelpListAllMessageReducer,
  AllChatGetBYIdReducr,
  AdminCreatePlanReducer,
  AdminShowPlanListReducer,
  AdminDeletePlanReducer,
  PurchasePlanRedcuer,
  PartnersOwnUsersReducer,
  PartnerTutorialListReducer,
  PartnerAddTutorialReducer,
  PartnerTutorialDeleteReducer,
  IsVerifiedVedioSeeUserRedcuer,
  IsVerifiedUserListRedcuer,
  PartnerTutorialUpdateReducer,
  PartnerTutorialGetDataByidReducer,
  PartnerAddProductReducer,
  PartnerProductAllistReducer,
  PartnerProductDeleteReducer,
  PartnerProductGetDataReducer,
  PartnerProductUpdateReducer,
  UserMessageChatSelectRedcuer,
  GetAllChatListWithUserReducer,
  GetAllUserDataByIdReducer,
  VenderRegisterReducer,
  VenderAddProdcutRecuer,
  VenderdProdcutListRecuer,
  AllVenderListShowToAdminReducer,
  VenderProdcutDeleteRecuer,
  VenderProdcutGetByIDRecuer,
  VenderUpdateProdcutRecuer,
  VenderAddNotesRecuer,
  VenderNotesListRecuer,
  VenderGetNotesDataByIDReducer,
  VenderNotesUpdateReducer,
  VenderNotesDeleteReducer,
  UserHirePartnerAndVenderReducer,
  UserGetHiredPatnerReducer,
  UserRemovedHiredParterVenderReducer,
  UserAddRatingReducer,
  GetAllRatingsReducer,
  GetHiredPersonListReducer,
  GetAllPersonListReducer,
  GetHirePersonDetailsReducer,
  RelTimeNotificationReducer,
  RelTimeNotificationUpdateReducer,
  VenderUpdateProdcutReducer,
  EndTheContractReducer,
  MyVideoAddReducer,
  MyVideoEditReducer,
  MyVideoGetAllListReducer,
  MyVideoGetDataByIdReducer,
  MyVideoDeleteReducer,
  myUserShowPartnerloginReducer,
  AddFileStatusReducer,
  FileDataGetReducer,
  StateChangeUserReducer,
  GetFileDataByIDReducer,
  DeleteFileReducer,
  AddFileStatusReducer,
  FileDataGetReducer,
  StateChangeUserReducer,
  GetFileDataByIDReducer,
  DeleteFileReducer,
  UserSendJobInqueryReducer,
  GetUserSendJobInqueryReducer,
  DeleteUserSendJobInqueryReducer,
  SubscriptionCheckReducer,
  AdminAddJobReducer,
  AdminGetAllJobReducer,
  AdminGetByIDJobReducer,
  AdminUpdateJobReducer,
  AdminDeleteJobReducer,
  paymentOfContractReducer,
  getWalletBalanceReducer,
  UserSeehisfamilymemberRedcuer,
  getUserPartnerReducer,
  FuneralPersonAddReducer,
  FuneralPersonGetDataReducer,
  FuneralPersonDataDeleteReducer,
  FuneralPersonDataUpdateReducer,
  UserApplyjobReducer,
  GetApplyAllJobReducer,
  ApplyJobSeeDetailReducer,
  VendorBuyPlanReducer,
  getVendorSubsReducer,
  GetAppliedJobDetailReducer,
  StatusUpdateReducer,
});
const userDataLocal = localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData"))
  : null;

const initialState = {
  authReducer: { userData: userDataLocal },
};
const store = configureStore({
  reducer,
  middleware: [thunk],
  preloadedState: initialState,
});

export default store;
