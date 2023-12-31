import React from "react";
import Room from "./Room";

export default function RoomList({ rooms }) {
  if (!rooms.length) {
    return (
      <div className="empty-search">
        <h3> unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((item, index) => (
          <Room key={index} room={item} />
        ))}
      </div>
    </section>
  );
}
