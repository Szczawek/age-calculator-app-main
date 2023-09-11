export default function Content({ obj }) {
  return (
    <div className="content">
      <div>
        <span>{obj["year"]}</span>
        <p>year</p>
      </div>
      <div>
        <span>{obj["month"]}</span>
        <p>months</p>
      </div>
      <div>
        <span>{obj["day"]}</span>
        <p>days</p>
      </div>
    </div>
  );
}
