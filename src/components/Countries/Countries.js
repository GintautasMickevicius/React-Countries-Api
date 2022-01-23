import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filter from "../Filter/Filter";
import { Card } from "react-bootstrap";

const url = "https://restcountries.com/v2/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(url);
      const countries = await response.json();
      setCountries(countries);
      setIsLoading(false);
    };

    fetchCountries();
  }, []);

  return (
    <>
      <Filter
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setFiltered={setFiltered}
        setCountries={setCountries}
        countries={countries}
      />
      {isLoading ? (
        <h1 className="loading">Loading..</h1>
      ) : searchInput.length > 1 ? (
        <section className="countries">
          {filtered.map((country) => {
            const { numericCode, name, flag, region } = country;

            return (
              <Link
                to={`/countries/${name}`}
                key={numericCode}
                style={{ textDecoration: "none" }}
              >
             <Card className='bg-dark' style={{color: 'white', width: "18rem" }}>
                  <Card.Img variant="top" src={flag} alt={name} />
                  <Card.Body>
                    <Card.Text> Country: {name} </Card.Text>
                    <Card.Text> Region: {region} </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            );
          })}
        </section>
      ) : (
        <section className="countries">
          {countries.map((country) => {
            const { numericCode, name, flag, region } = country;

            return (
              <Link
                to={`/countries/${name}`}
                key={numericCode}
                style={{ textDecoration: "none" }}
              >
                <Card className='bg-dark' style={{color: 'white', width: "18rem" }}>
                  <Card.Img variant="top" src={flag} alt={name} />
                  <Card.Body>
                    <Card.Text> Country: {name} </Card.Text>
                    <Card.Text> Region: {region} </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            );
          })}
        </section>
      )}
    </>
  );
};

export default Countries;
