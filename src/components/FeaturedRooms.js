import React, { Component } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
import Loading from "./Loading";
import Room from "./Room";

export default class FeaturedRooms extends Component {
  // static myContext = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map((room) => <Room key={room.id} room={room} />);

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}

FeaturedRooms.contextType = RoomContext;
