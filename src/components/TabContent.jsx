import { EXAMPLES } from "../data.js";

export default function TabContent({ topic }) {
  return (
    <div>
      <h3>{EXAMPLES[topic]["title"]}</h3>
      <p>{EXAMPLES[topic]["description"]}</p>
      <pre>
        <code>{EXAMPLES[topic]["code"]}</code>
      </pre>
    </div>
  );
}
