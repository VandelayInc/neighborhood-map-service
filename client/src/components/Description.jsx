import React from 'react';

const Description = ({
  listing: {
    primary_host: { first_name },
    city,
    state,
    country,
    neighborhood_overview,
    transit,
  },
}) => (
  <div>
    <span>Features:</span>
    <p>{ first_name }'s home is located in <a href="/">{city}</a>,
      <a href="/">{state}</a>, <a href="/">{country}</a>. </p>
    <p>{ neighborhood_overview }</p>
    <span>Getting Around</span>
    <p>{transit}</p>
    <span><a href="/">{first_name}'s Guidebook</a></span>
    <span><a href="/">Things to do in {city}</a></span>
  </div>
);

export default Description;
