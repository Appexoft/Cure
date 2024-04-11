enum ROUTES {
  // Common
  Splash = 'Splash',
  Loading = 'Loading',
  AddReview = 'AddReview',

  // Auth
  WalkThrough = 'WalkThrough',
  SignIn = 'SignIn',
  SignUp = 'SignUp',
  ForgotPassword = 'ForgotPassword',
  VerifyEmail = 'VerifyEmail',
  VerifyMobile = 'VerifyMobile',
  ResetPassword = 'ResetPassword',
  ResetPasswordSuccess = 'ResetPasswordSuccess',
  CreatAccount = 'CreatAccount',

  // App Patient
  FullName = 'FullName',
  Gender = 'Gender',
  BirthDay = 'BirthDay',
  Blood = 'Blood',
  Weight = 'Weight',
  Height = 'Height',
  Home = 'Home',

  // Patient
  Patient_BottomTab = 'Patient_BottomTab',

  Patient_HomePage = 'Patient_HomePage',
  Patient_Detail_Doctor = 'Patient_Detail_Doctor',
  Patient_Detail_Service = 'Patient_Detail_Service',
  Patient_Detail_Hospital = 'Patient_Detail_Hospital',

  Patient_SearchFilters = 'Patient_SearchFilters',

  // Patient Appointments
  Patient_Appointments = 'Patient_Appointments',
  Patient_Appointments_Create = 'Patient_Appointments_Create',

  // Patient Search
  Search = 'Search',
  Patient_Search = 'Patient_Search',
  Patient_MapSearch = 'Patient_MapSearch',

  // Patient favorites
  Patient_Search_Doctors = 'Patient_Search_Doctors',
  Patient_Search_Services = 'Patient_Search_Services',
  Patient_Search_Hospitals = 'Patient_Search_Hospitals',

  // Patient favorites
  Patient_Favorites = 'Patient_Favorites',

  Patient_Favorites_Doctors = 'Patient_Favorites_Doctors',
  Patient_Favorites_Services = 'Patient_Favorites_Services',
  Patient_Favorites_Hospitals = 'Patient_Favorites_Hospitals',

  // Patient account
  Patient_Account_Stack = 'Patient_Account_Stack',
  Patient_Account = 'Patient_Account',
  Patient_Personal_Information = 'Patient_Personal_Information',
  Patient_Personal_Information_Edit = 'Patient_Personal_Information_Edit',
  Patient_Address_Information_Edit = 'Patient_Address_Information_Edit',
  Patient_Settings = 'Patient_Settings',
  Patient_Change_Password = 'Patient_Change_Password',
  Faq_Info = 'Faq_Info',
  About = 'About',

  // Doctor
  Doctor_BottomTab = 'Doctor_BottomTab',

  Doctor_HomePage = 'Doctor_HomePage',
  Doctor_Onboard_Status = 'Doctor_Onboard_Status',
  Doctor_Services = 'Doctor_Services',
  Agenda = 'Agenda',
  Doctor_Services_Create_Work_Location = 'Doctor_Services_Create_Work_Location',
  Doctor_Services_Wizzard = 'Doctor_Services_Wizzard',
  Doctor_Calendar = 'Doctor_Calendar',
  Doctor_Patients = 'Doctor_Patients',
  Doctor_Hospitals = 'Doctor_Hospitals',

  Doctor_Onboarding = 'Doctor_Onboarding',

  // Hospital
  Hospital_BottomTab = 'Hospital_BottomTab',

  Hospital_HomePage = 'Hospital_HomePage',
  Hospital_Services = 'Hospital_Services',
  Hospital_Calendar = 'Hospital_Calendar',
  Hospital_Patients = 'Hospital_Patients',

  // Others
  WithBottomTabsStack = 'WithBottomTabsStack',
  PricePlan = 'PricePlan',
  Menu = 'Menu',
  Services = 'Services',
  DashBoard = 'DashBoard',
  Profile = 'Profile',
  NewsHealthy = 'NewsHealthy',
  Notification = 'Notification',
  UpComing = 'UpComing',
  Past = 'Past',
  AppointmentList = 'AppointmentList',
  AppointmentListTab = 'AppointmentListTab',
  AppointmentCalendar = 'AppointmentCalendar',
  AppointmentDetails = 'AppointmentDetails',
  FindDoctors = 'FindDoctors',
  FindHospital = 'FindHospital',
  ResultFindDoctor = 'Result Find Doctor',
  StaticsHealth = 'StaticsHealth',
  StaticsHealthBottomTab = 'StaticsHealthBottomTab',
  Day = 'Day',
  Week = 'Week',
  Month = 'Month',
  Year = 'Year',
  IndicatorsSettings = 'IndicatorsSettings',
  IndicatorsSettingsTab = 'IndicatorsSettingsTab',
  Devices = 'Devices',
  Indicator = 'Indicator',
  InputTestIndicators = 'InputTestIndicators',
  SetGoal = 'SetGoal',
  GoalSettings = 'GoalSettings',
  Doctors = 'Doctors',
  DoctorsTab = 'DoctorsTab',
  DoctorsBottomTab = 'DoctorsBottomTab',
  Nearby = 'Nearby',
  ListAll = 'ListAll',
  MapsDoctors = 'MapsDoctors',
  DoctorProfile = 'DoctorProfile',
  DoctorInformation = 'DoctorInformation',
  DoctorAddress = 'DoctorAddress',
  DoctorReview = 'DoctorReview',
  DoctorMessage = 'DoctorMessage',
  CallDoctor = 'CallDoctor',
  VideoCall = 'VideoCall',
  UserProfile = 'UserProfile',
  Insurance = 'Insurance ',
  BookAppointment = 'BookAppointment',
  Drugs = 'Drugs',
  DrugsBottomTab = 'DrugsBottomTab',
  ListDrugs = 'ListDrugs',
  AddDrugs = 'AddDrugs',
  DrugDetails = 'DrugsDetails',
  DrugShop = 'DrugsShop',
  DrugShopDetails = 'DrugsShopDetails',
  Cart = 'Cart',
  Billing = 'Billing',
  NewsTab = 'NewsTab',
  News = 'News',
  Explorer = 'Explorer',
  Trends = 'Trends',
  Follow = 'Follow',
  NewsBookmark = 'NewsBookmark',
  NewsDetails = 'NewsDetails',
  NewsComment = 'NewsComment',
  AppStack = 'AppStack',
  DrawerNavigator = 'DrawerNavigator',
  OpenDrawer = 'OPEN_DRAWER',
  DrawerStack = 'DrawerStack',
  Drawer = 'Drawer',

  // Doctor section
  ApplyAsDoctor_Intro = 'ApplyAsDoctor_Intro',
  ApplyAsDoctor_Wizzard = 'ApplyAsDoctor_Wizzard',
  ApplyAsDoctor_PersonalDetails = 'ApplyAsDoctor_PersonalDetails',
  ApplyAsDoctor_Profession = 'ApplyAsDoctor_Profession',
  ApplyAsDoctor_Education = 'ApplyAsDoctor_Education',
  ApplyAsDoctor_EmploymentType = 'ApplyAsDoctor_EmploymentType',
  ApplyAsDoctor_KYC = 'ApplyAsDoctor_KYC',
  ApplyAsDoctor_Services = 'ApplyAsDoctor_Services',
  ApplyAsDoctor_InviteOthers = 'ApplyAsDoctor_InviteOthers',

  // Orgnisation section
  ApplyAsClinique = 'ApplyAsClinique',
  ApplyAsOrg_Intro = 'ApplyAsOrg_Intro',
  ApplyAsOrg_Wizzard = 'ApplyAsOrg_Wizzard',
  ApplyAsOrg_Details = 'ApplyAsOrg_Details',
  ApplyAsOrg_Address = 'ApplyAsOrg_Address',
  ApplyAsOrg_KYC = 'ApplyAsOrg_KYC',
  ApplyAsOrg_Services = 'ApplyAsOrg_Services',
  ApplyAsOrg_InviteOthers = 'ApplyAsOrg_InviteOthers',

  Logout = 'Logout',
}
export default ROUTES;
