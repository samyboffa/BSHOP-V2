import "./App.css";
import Header from "./Components/Header";
import { GiftCards } from "./Components/GiftCards";
import { Home } from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Games } from "./Components/Games";
import { TopUp } from "./Components/TopUp";
import { LoginSignUp } from "./Components/Login";
import { SignUp } from "./Components/SignUp";
import { GiftCardDetail } from "./Components/GiftCardDetail";
import { TopUpDetails } from "./Components/TopUpDetails";
import { Profile } from "./Components/Profile";
import { Cart } from "./Components/Cart";
import { MyOrders } from "./Components/MyOrders";
import { AdminPanel } from "./Components/adminPanel/AdminPanel";
import { AdminPanelProducts } from "./Components/adminPanel/AdminPanelProducts";
import { AdminPanelOrders } from "./Components/adminPanel/AdminPanelOrders";
import MyNotifications from "./Components/MyNotifications";
import PrivateRoute from "./Components/PrivateRoute";
import AdminRoute from "./Components/AdminRoute";
import AdminGiftCardDetail from "./Components/adminPanel/AdminGiftCardDetail";
import AdminPanelAddPage from "./Components/adminPanel/AdminPanelAddPage";
import AdminOrderDetail from "./Components/adminPanel/AdminOrderDetail";
import Footer from "./Components/Footer";
function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Header />
                        <Home />
                    </Route>
                    <Route path="/games">
                        <Header />
                        <Games />
                    </Route>
                    <Route exact path="/topup">
                        <Header />
                        <TopUp />
                    </Route>
                    <Route exact path="/giftcards">
                        <Header />
                        <GiftCards />
                    </Route>
                    <Route path="/login" component={LoginSignUp} />
                    <Route path="/signup" component={SignUp} />

                    <Route
                        path="/giftcards/:id"
                        render={({ match }) => <GiftCardDetail match={match} />}
                    ></Route>
                    <Route
                        path="/topup/:gameName"
                        render={({ match }) => <TopUpDetails match={match} />}
                    ></Route>

                    <PrivateRoute path="/profile">
                        {/*Private */}
                        <Header />
                        <Profile />
                    </PrivateRoute>

                    <PrivateRoute path="/cart">
                        {/*Private */}
                        <Header />
                        <Cart />
                    </PrivateRoute>

                    <PrivateRoute path="/myorders">
                        {/*Private */}
                        <Header />
                        <MyOrders />
                    </PrivateRoute>

                    <PrivateRoute path="/notif">
                        {/*Private */}
                        <Header />
                        <MyNotifications />
                    </PrivateRoute>

                    <AdminRoute
                        path="/adminPanel"
                        exact
                        render={(props) => (
                            <>
                                {" "}
                                <Header {...props} />
                                <AdminPanel {...props} />
                            </>
                        )}
                    />

                    <AdminRoute path="/AdminPanelPoductsMngmt">
                        <Header />
                        <AdminPanelProducts />
                    </AdminRoute>
                    <AdminRoute
                        path="/adminGiftCard/:id"
                        render={({ match }) => (
                            <AdminGiftCardDetail match={match} />
                        )}
                    ></AdminRoute>
                    <AdminRoute path="/AdminPanelAddProduct">
                        <Header />
                        <AdminPanelAddPage />
                    </AdminRoute>

                    <AdminRoute path="/AdminPanelOrdersMngmt" exact>
                        {/*Admin */}
                        {/*done  */}
                        <Header />
                        <AdminPanelOrders />
                    </AdminRoute>
                    <AdminRoute
                        exact
                        path="/AdminPanelOrdersMngmt/:orderNumber"
                        render={({ match }) => (
                            <AdminOrderDetail match={match} />
                        )}
                    ></AdminRoute>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
