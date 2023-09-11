import Header from "./Header";
import Content from "./Content";
import { useState } from "react";

export default function App() {
    const [data,setData] = useState({day:"--",month:"--",year:"--"})

  function putData(day,month,year) {
    setData({day:day,month:month,year:year})
  }
  return (
    <main>
      <Header func={putData} />
      <Content obj={data} />
    </main>
  );
}
