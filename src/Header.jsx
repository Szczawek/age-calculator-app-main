import { useState } from "react";

export default function Header({ func }) {
  const [locker, setLocker] = useState({});
  function updataLocker(element, value) {
    setLocker((prev) => {
      prev[element] = value;
      return prev;
    });
  }

  function changeDate() {
    const date = new Date();
    let year = date.getFullYear() - locker["year"];

    // There is a "+1" at the end because January is written as 0.
    let month = date.getMonth() - locker["month"] + 1;
    let day = date.getDate() - locker["day"];
    if (day < 0) {
      month--;
      day += 31;
    }
    if (month < 0) {
      year--;
      month += 12;
    }
    func(day, month, year);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        changeDate();
      }}
      className="input-data">
      <label htmlFor="day">
        DAY
        <input
          onChange={(e) => updataLocker("day", e.target.value)}
          required
          min={1}
          max={31}
          type="number"
          name=""
          id="day"
          placeholder="DD"
        />
      </label>
      <label htmlFor="month">
        MONTH
        <input
          onChange={(e) => updataLocker("month", e.target.value)}
          required
          min={1}
          max={12}
          type="number"
          name=""
          placeholder="MMM"
          id="month"
        />
      </label>
      <label htmlFor="year">
        YEAR
        <input
          placeholder="YYYY"
          onChange={(e) => updataLocker("year", e.target.value)}
          required
          min={1}
          max={2022}
          type="number"
          name=""
          id="year"
        />
      </label>
      <button type="submit">
        <img src="images/icon-arrow.svg" alt="send button" />
      </button>
    </form>
  );
}
