import Hero from '../components/Hero'
import Booking from '../components/Booking'
import Rooms from '../components/Rooms'
import ImportantInfo from '../components/ImportantInfo'
import HavreDePaix from '../components/HavreDePaix'
import Excursions from '../components/Excursions'
import Restaurant from '../components/Restaurant'
import Reviews from '../components/Reviews'
import Gallery from '../components/Gallery'
import Location from '../components/Location'
import Contact from '../components/Contact'

export default function Home({ onOpenBooking }) {
  return (
    <>
      <Hero onOpenBooking={onOpenBooking} />
      <Booking onOpenBooking={onOpenBooking} />
      <Reviews />
      <Rooms onOpenBooking={onOpenBooking} />
      <ImportantInfo />
      <HavreDePaix />
      <Restaurant />
      <Excursions />
      <Gallery />
      <Location />
      <Contact />
    </>
  )
}
