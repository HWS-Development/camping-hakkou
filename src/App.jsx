import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import Home from './pages/Home'
import RoomsPage from './pages/RoomsPage'
import ActivitiesPage from './pages/ActivitiesPage'
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import Conditions from "./pages/Conditions";


export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false)

  return (
    <div className="font-sans text-brand-black bg-white">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />
      <Routes>
        <Route path="/" element={<Home onOpenBooking={() => setBookingOpen(true)} />} />
        <Route path="/stay" element={<RoomsPage onOpenBooking={() => setBookingOpen(true)} />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/conditions-generales" element={<Conditions />} />
      </Routes>
      <Footer />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  )
}
