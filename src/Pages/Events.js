import React, { useState, useEffect } from "react";

import CardsList from "../components/Card-List/CardsList.js";
import Card from "../components/Card/Card.js";
import SearchBar from "../components/SearchBar/SearchBar.js";
import Loader from "../components/Loading/Loading.js";

import eventsArray from "../lib/events.js";
let loading = true;

const Events = () => {
  const [events, setEvents] = useState(eventsArray);
  const [userInput, setUserInput] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);
  //loading
  useEffect(() => {
    loading = true;
    const timer = setTimeout(() => {
      loading = false;
      setFilteredEvents(eventsArray);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  //filter items out of the array
  useEffect(() => {
    setFilteredEvents(
      events.filter((event) =>
        event.title.toLowerCase().includes(userInput.toLowerCase())
      )
    );
  }, [userInput]);

  const displayEvents = () => {
    return (
      <CardsList>
        {filteredEvents.map((event) => (
          <Card
            key={event.id}
            type="event"
            title={event.title}
            location={event.location}
            dateTime={event.dateTime}
            about={event.about}
          />
        ))}
      </CardsList>
    );
  };
  return (
    <>
      <h1 className="title">Događanja</h1>
      <SearchBar
        placeholder="Search events..."
        getUserInput={(e) => setUserInput(e.target.value)}
      />
      {loading ? <Loader /> : displayEvents()}
    </>
  );
};

export default Events;
