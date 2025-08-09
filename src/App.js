import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DexPalPartnershipDashboard from "./components/DexPalPartnershipDashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Default route redirects to overview */}
          <Route path="/" element={<Navigate to="/overview" replace />} />

          {/* Partnership Overview routes */}
          <Route path="/overview" element={<DexPalPartnershipDashboard />} />
          <Route
            path="/dexpal-overview"
            element={<DexPalPartnershipDashboard />}
          />
          <Route
            path="/market-opportunity"
            element={<DexPalPartnershipDashboard />}
          />
          <Route
            path="/partner-benefits"
            element={<DexPalPartnershipDashboard />}
          />

          {/* Partnership Details routes */}
          <Route
            path="/integration-requirements"
            element={<DexPalPartnershipDashboard />}
          />
          <Route
            path="/pricing-and-incentives"
            element={<DexPalPartnershipDashboard />}
          />
          <Route
            path="/partner-ecosystem"
            element={<DexPalPartnershipDashboard />}
          />
          <Route
            path="/product-roadmap"
            element={<DexPalPartnershipDashboard />}
          />

          {/* Resources & Knowledge routes */}
          <Route
            path="/onboarding-process"
            element={<DexPalPartnershipDashboard />}
          />
          <Route
            path="/technical-support"
            element={<DexPalPartnershipDashboard />}
          />
          <Route
            path="/co-marketing"
            element={<DexPalPartnershipDashboard />}
          />
          <Route
            path="/contact-and-apply"
            element={<DexPalPartnershipDashboard />}
          />

          {/* Catch all route - redirect to overview */}
          <Route path="*" element={<Navigate to="/overview" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
