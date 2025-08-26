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

          {/* Dashboard routes that match the actual sections */}
          <Route path="/overview" element={<DexPalPartnershipDashboard />} />
          <Route path="/benefits" element={<DexPalPartnershipDashboard />} />
          <Route path="/rewards" element={<DexPalPartnershipDashboard />} />
          <Route
            path="/requirements"
            element={<DexPalPartnershipDashboard />}
          />
          <Route path="/api" element={<DexPalPartnershipDashboard />} />
          <Route path="/roadmap" element={<DexPalPartnershipDashboard />} />
          <Route path="/contact" element={<DexPalPartnershipDashboard />} />

          {/* Catch all route - redirect to overview */}
          <Route path="*" element={<Navigate to="/overview" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
