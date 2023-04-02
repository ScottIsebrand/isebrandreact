import { useEffect, useState } from 'react';
import WorldHistory from '../assets/world-history-150.png';

function OnThisDay() {
  // Creating a state variable to hold the historical event data
  const [events, setEvents] = useState([]);
  // Creating object (dictionary/library) named 'months' to find name of current month
  const monthsNames = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  };

  // Function to get data from api ???
  let today = new Date();
  // today.getMonth() returns a number, 0 thru 11; January is 0
  let month = String(today.getMonth() + 1).padStart(2, '0');
  let day = String(today.getDate()).padStart(2, '0');
  let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/${month}/${day}`;
  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxNGUyZTEzMzkyNjk5NzFlMjQ2ZmNiZGU4ZGM3ZTBlZCIsImp0aSI6IjQ2OTkwNjA4ZTdlZTgxZDJjYjUwYzliM2JmYzI2MGFmZjc5YzU1OTRmMjc4YjMxYTdjOWY4Y2ZlMmJhY2ZlYmYxNmJhMGQzZDM1ODNkNWJkIiwiaWF0IjoxNjgwMTkxNDA4Ljg1NTYyMSwibmJmIjoxNjgwMTkxNDA4Ljg1NTYyNCwiZXhwIjozMzIzNzEwMDIwOC44NTM0MjgsInN1YiI6IjcyNDIyNDQyIiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.wADBxwLoImqfqBigXlw4RwTHQMZ6XEVEpy6pdJ-BSfXM6rboEazawym3E_KP9u_ZAZxXWLMKuylT8KjGFFbwWpNL4Nfyw-iJioL8qZSErRFs5juF_j5PDTaBEjSclz0hv17VEvV7-SdS0z5or4lZqM5Qgh6R3id5lo3ht8F-Vh27FlDkc-f6UwkLQcJRlA9cCsx6T75GgJioPFQWxYrZSTFoh0RSRMZsedknIdyH3reXDbe4WY7bRrKtBWynSuEcAtdR618-jdkevbplvsYwRewqibb7Z1qPVzgJ7XFwQ6kYbLobqCHmLkjjLU6athbpEDKW9cTR_uKvP-7XxJXNJm0gGJoviOpyykvgvaOKNQbTb2PMUitMZE5Q8G3zamiOhN84QF-vsbYIPtBt2uodMI2XlM9SaXOq6SrFJKbgqloLlBa5dQjPHGwQHQT61Q9zlVioC5cOkSdN3Akf5q-kRDuOoSmGdwcqzxUiWB9ic3NmjeX0cPTDJhsgs4ELzorAVdKARiVhM4HXDbeX4rEZvLvKTaWN53yOsF36uGLwERfFznkPZMttGh2qMu2pDzjXOlKn-tL8lxAjnXcNPnNxrCC8vYR8ly7ZPQjUhZ_LezY1e744AdUPhT0S0Bd29LH4WFIorZP23vnxcLeioiZFS30Y7zVDNkCJJdLQGs84qEg';

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Api-User-Agent':
            'isebrandreact (https://benevolent-youtiao-efa0f5.netlify.app/)',
        },
      });

      const data = await response.json();
      console.log(data);
      setEvents(data.events);
    };
    fetchData();
  }, [url]);

  // Function to return JSX if we have data in state ???
  // const loading = () => <h1>Loading...</h1>;

  return (
    <div className="main-content onthisday">
      <h1 className="main-title">On This Day</h1>

      <div className="onthisday-container">
        <h2>Historical Events API</h2>
        <img
          className="wizards-image"
          src={WorldHistory}
          alt="Four elements symbols"
        />
        <p>I love learning about history.</p>
        <p>
          Read below to discover some of the historical events that occurred on
          this day (#OTD), courtesy of Wikipedia's "On This Day" API.
        </p>
        <div className="on-this-day">
          <h2 className="on-this-day-subheadline">
            {monthsNames[today.getMonth()]} {day}
          </h2>
          {/* If events array is empty, render loading message */}
          {events.length === 0 ? (
            <h3>Please wait while data is loading...</h3>
          ) : (
            events.map((event, index) => {
              return (
                <p key={index}>
                  {event.year}: {event.text}
                </p>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default OnThisDay;
