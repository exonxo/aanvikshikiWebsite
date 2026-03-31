import { Outlet } from "react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      {/* Spacer to offset the fixed navbar height */}
      <div className="h-[68px] md:h-[76px]" />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
