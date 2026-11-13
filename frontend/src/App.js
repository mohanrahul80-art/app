import { Component, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { Toaster } from "sonner";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Warehouses from "./pages/Warehouses";
import Contact from "./pages/Contact";
import "./App.css";

let lenis;
function initLenis() {
  if (lenis) return;
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  const raf = (t) => {
    lenis.raf(t);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

function ScrollManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err) {
    console.error(err);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-ink text-bone flex items-center justify-center p-8">
          <div className="text-center">
            <p className="font-display uppercase text-3xl">Something came off the rails</p>
            <button
              data-testid="error-reset-button"
              className="mt-6 inline-flex bg-ember text-ink font-semibold px-6 py-3 rounded-full hover:bg-bone transition-colors"
              onClick={() => {
                this.setState({ hasError: false });
                window.location.href = "/";
              }}
            >
              Back to Home
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  useEffect(() => {
    initLenis();
  }, []);
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollManager />
        <div className="grain-overlay" aria-hidden="true" />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/warehouses" element={<Warehouses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
        <Toaster theme="dark" position="bottom-right" richColors />
      </BrowserRouter>
    </ErrorBoundary>
  );
}
