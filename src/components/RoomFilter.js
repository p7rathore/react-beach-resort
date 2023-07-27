import React, { useContext } from "react";
import { RoomConsumer } from "../context";
import Title from "./Title";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomFilter({ rooms }) {
  const context = useContext(RoomConsumer);
  const {
    handleChange,
    type,
    capacity,
    price,
    maxPrice,
    minPrice,
    maxSize,
    minSize,
    pets,
    breakfast,
  } = context;

  // const getUniqueTypes = (rooms, keyName) => {
  //   // let types = [...new Set(rooms.map((room) => room[keyName]))];
  //   // types = ["all", ...types];
  //   // types = types.map((type) => <option>{type}</option>);
  //   // return types;

  //   //Mine code
  //   const types = [...new Set(rooms.map((room) => room[keyName]))];
  //   types.unshift("all");
  //   return types.map((type) => <option>{type}</option>);
  // };
  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ));

  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ));

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        <div className="form-group">
          <lable htmlFor="type">room type</lable>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="capacity">guests</label>
          <select
            name="capacity"
            value={capacity}
            id="capacity"
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        <div className="form-group">
          <lable htmlFor="price">room price: ${price}</lable>
          <input
            type="range"
            id="price"
            name="price"
            className="form-control"
            value={price}
            max={maxPrice}
            min={minPrice}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        <div className="form-control">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <lable htmlFor="breakfast">breakfast</lable>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <lable htmlFor="pets">pets</lable>
          </div>
        </div>
      </form>
    </section>
  );
}
