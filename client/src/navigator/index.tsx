import React,{Suspense, lazy} from 'react'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import Navbar from '../components/navbar';
import ProtectedRoute from './ProtectedRoute';
import Footer from '../components/common/Footer';

const HomePage = lazy(()=> import("../pages/home/index"))
const SignUp = lazy(() => import("../pages/signup/index"));
const SignIn = lazy(() => import("../pages/signin/index"))
const ListingPage = lazy(()=> import("../pages/listingPage/index"))
const Account = lazy(() => import("../pages/account/index"));
const Order = lazy(() => import("../pages/order/index"));
const Cart = lazy(() => import("../pages/cart/index"));
const Profile = lazy(() => import("../components/profile/index"));
const AccountData = lazy(() => import("../pages/account/AccountData"));
const ForgotPassword = lazy(()=>import("../pages/forgotPassword/index"))

const Navigator = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<Order />} />
              <Route path="/account" element={<Account />}>
                <Route path="" element={<AccountData />} />
                <Route path="profile" element={<Profile />} />
              </Route>
            </Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/listing" element={<ListingPage />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
          {/* <Footer /> */}
    </div>
  );
}

export default Navigator