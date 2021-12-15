import React, { useState, useEffect } from "react";

import CardsList from "../components/Card-List/CardsList.js";
import Card from "../components/Card/Card.js";
import SearchBar from "../components/SearchBar/SearchBar.js";
import Loader from "../components/Loading/Loading.js";

import speakersArray from "../lib/speakers.js";

let loading = true;

const Speakers = () => {
  const [speakers, setSpeakers] = useState(speakersArray);
  const [userInput, setUserInput] = useState("");
  const [filteredSpeakers, setFilteredSpeakers] = useState([]);

  useEffect(() => {
    loading = true;
    const timer = setTimeout(() => {
      loading = false;
      setFilteredSpeakers(speakersArray);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setFilteredSpeakers(
      speakers.filter((speaker) =>
        speaker.name.toLowerCase().includes(userInput.toLowerCase())
      )
    );
  }, [userInput]);

  const displaySpeakers = () => {
    return (
      <CardsList>
        {filteredSpeakers.map((speaker) => (
          <Card
            key={speaker.id}
            type="speaker"
            name={speaker.name}
            about={speaker.about}
          />
        ))}
      </CardsList>
    );
  };

  return (
    <>
      <h1 className="title">Sudionici</h1>
      <SearchBar
        placeholder="Search speakers..."
        getUserInput={(e) => setUserInput(e.target.value)}
      />
      {loading ? <Loader /> : displaySpeakers()}
    </>
  );
};

export default Speakers;
