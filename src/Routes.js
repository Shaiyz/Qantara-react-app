import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import {
  HomeScreen,
  // CheckoutScreen,
  ShopScreen,
  Contact,
  Terms,
  // DashboardScreen,
  LoginScreen,
  RegisterScreen,
  PrivacyPolicy,
  Subcategory,
  Category,
  ProductDetails,
  CartScreen,
  CheckoutScreen,
} from "./views";
import { RouteWithLayout } from "./components";
import { MainLayout, MinimalLayout } from "./layout";

function Routes() {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <RouteWithLayout
          path="/"
          exact
          component={HomeScreen}
          layout={MinimalLayout}
        />
        <RouteWithLayout
          path="/contact"
          exact
          component={Contact}
          layout={MainLayout}
        />
        <RouteWithLayout
          path="/terms"
          exact
          component={Terms}
          layout={MainLayout}
        />
        <RouteWithLayout
          path="/privacy-policy"
          exact
          component={PrivacyPolicy}
          layout={MainLayout}
        />
        <RouteWithLayout
          path="/shop"
          exact
          component={ShopScreen}
          layout={MainLayout}
        />
        <RouteWithLayout
          path="/product-category/:catId/:subId"
          exact
          component={Subcategory}
          layout={MainLayout}
        />
        <RouteWithLayout
          path="/product-category/:catId"
          exact
          component={Category}
          layout={MainLayout}
        />
        <RouteWithLayout
          path="/login"
          exact
          component={LoginScreen}
          layout={MainLayout}
        />
        <RouteWithLayout
          path="/register"
          exact
          component={RegisterScreen}
          layout={MainLayout}
        />
        <RouteWithLayout
          path="/product/:id"
          exact
          component={ProductDetails}
          layout={MainLayout}
        />
        <RouteWithLayout
          path="/cart"
          exact
          component={CartScreen}
          layout={MainLayout}
        />
        <RouteWithLayout
          path="/checkout"
          exact
          component={CheckoutScreen}
          layout={MainLayout}
        />

        {/* <RouteWithLayout
          path="/dashboard/:role"
          exact
          component={DashboardScreen}
          layout={Layout}
          requireAuthentication={true}
          authenticated={sessionStorage.getItem("Token")}
        /> */}

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
