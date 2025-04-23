import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";
import TabButton from "./TabButton.jsx";
import { useState } from "react";
import TabContent from "./TabContent.jsx";

export default function MainSection() {
  const [tabContent, setTabContent] = useState(
    <TabContent topic="components" />
  );

  const selectHandler = (selectedTopic) => {
    setTabContent(<TabContent topic={selectedTopic} />);
  };

  return (
    <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((concept) => {
            return (
              <CoreConcept
                key={concept.title}
                title={concept.title}
                description={concept.description}
                image={concept.image}
              />
            );
          })}
        </ul>
      </section>

      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={() => selectHandler("components")}>
            Components
          </TabButton>
          <TabButton onSelect={() => selectHandler("jsx")}>JSX</TabButton>
          <TabButton onSelect={() => selectHandler("props")}>Props</TabButton>
          <TabButton onSelect={() => selectHandler("state")}>State</TabButton>
        </menu>
        <div id="tab-content">{tabContent}</div>
      </section>
    </main>
  );
}
