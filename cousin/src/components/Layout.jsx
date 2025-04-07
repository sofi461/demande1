// components/Layout.jsx
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
