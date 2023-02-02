import { Routes, Route } from 'react-router-dom';
import ReserveTable from './ReserveTable';
import Testimonials from './Testimonials';
import About from './About';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/About" element={<About />} />
        <Route path="/Reservation" element={<ReserveTable />} />
      </Routes>
    </main>
  );
}

export default Main;