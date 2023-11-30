import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Loading } from "../components/Loading";
import { Route, Routes } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import GlobalStyles from "../globalStyles";
import ScrollToTop from "../components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import incrementPageView from "../functions/incrementPageView";

// ---> Navbar & Footer Component
const Navbar = lazy(() => import("../components/Navbar/Navbar"));
const Footer = lazy(() => import("../components/Footer/Footer"));

// ---> Static pages
const Home = lazy(() => import("../pages/HomePage/Home"));
const EducationServices = lazy(
  () => import("../pages/EducationServices/EducationServices")
);
// const WebServices = lazy(() => import('../pages/WebServices/WebServices'));

const ContactUs = lazy(() => import("../pages/ContactUs/ContactUs"));

// ---> Misc pages
const PrivacyPolicy = lazy(() => import("../pages/Misc/PrivacyPolicy"));
const TermsAndConditions = lazy(
  () => import("../pages/Misc/TermsAndConditions")
);
const WhatWeDo = lazy(() => import("../pages/Misc/WhatWeDo/WhatWeDo"));
const AboutUs = lazy(() => import("../pages/Misc/AboutUs/AboutUs"));

{
  /* <FooterLink to="/what-we-do">What We Do ?</FooterLink>
<FooterLink to="/about-us">About Us</FooterLink>
<FooterLink to="/careers">Careers</FooterLink>
            <Route path="/terms-and-conditions" element={<ContactUs />} /> */
}

// ---> Error pages
const NotFound = lazy(() => import("../components/Error/NotFound"));

const helmetContext = {};

function PageViewCounter({ url, children }) {
  useEffect(() => {
    // Increment the view count when the page loads
    incrementPageView(url);
  }, [url]);

  return children;
}

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ScrollToTop />
      <Navbar />

      <HelmetProvider context={helmetContext}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Kruxigen - Tech Teaching & Web Development</title>
          <meta
            name="description"
            content="Learn coding, math, physics, and web development with us."
          />
          <meta
            name="keywords"
            content="coding, math, physics, web development, teaching, education"
          />
          <meta name="author" content="Animesh Raj" />
          <link rel="canonical" href="http://kruxigen.tech/" />
          <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
        </Helmet>

        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Static pages routes */}
            <Route
              path="/"
              element={
                <PageViewCounter url="/">
                  <Home />
                </PageViewCounter>
              }
            />
            <Route
              path="/education-services"
              element={
                <PageViewCounter url="/education-services">
                  <EducationServices />
                </PageViewCounter>
              }
            />
            {/* <Route
              path="/web-services"
              element={
                <PageViewCounter url="/web-services">
                  <WebServices />
                </PageViewCounter>
              }
            /> */}
            <Route
              path="/contact-us"
              element={
                <PageViewCounter url="/contact-us">
                  <ContactUs />
                </PageViewCounter>
              }
            />
            <Route
              path="/what-we-do"
              element={
                <PageViewCounter url="/what-we-do">
                  <WhatWeDo />
                </PageViewCounter>
              }
            />
            <Route
              path="/about-us"
              element={
                <PageViewCounter url="/about-us">
                  <AboutUs />
                </PageViewCounter>
              }
            />

            {/* Misc pages routes */}
            <Route
              path="/privacy-policy"
              element={
                <PageViewCounter url="/privacy-policy">
                  <PrivacyPolicy />
                </PageViewCounter>
              }
            />
            <Route
              path="/terms-and-conditions"
              element={
                <PageViewCounter url="/terms-and-conditions">
                  <TermsAndConditions />
                </PageViewCounter>
              }
            />

            {/* Not Found pages routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </HelmetProvider>

      <Footer />

      <Toaster
        toastOptions={{
          className: "custom-toast",
          style: {
            background: "#1f1f1f",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
          },
        }}
      />
    </BrowserRouter>
  );
};
