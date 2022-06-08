import React from 'react';
import './css/Booking.css';
import 'react-router';
import CollapsibleTable from './BookingDatatable'

function Booking() {
  return (
    <div className="booking">
      <CollapsibleTable/>
    </div>
  );
}

export default Booking;
