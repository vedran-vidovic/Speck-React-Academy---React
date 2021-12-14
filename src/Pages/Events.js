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
  const [filteredEvents, setFilteredEvents] = useState(eventsArray);
  //loading
  useEffect(() => {
    const timer = setTimeout(() => {
      loading = false;
    }, 1000);
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

  if (loading === true) {
    return (
      <>
        <h1 className="title">Događanja</h1>
        <Loader />
      </>
    );
  } else {
    return (
      <>
        <h1 className="title">Događadnja</h1>
        <SearchBar
          placeholder="Search events..."
          getUserInput={(e) => setUserInput(e.target.value)}
        />

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
      </>
    );
  }
};

export default Events;
