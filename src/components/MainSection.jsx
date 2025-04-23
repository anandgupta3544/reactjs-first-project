import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";
import TabButton from "./TabButton.jsx";
import { useState } from "react";
import TabContent from "./TabContent.jsx";

export default function MainSection() {
  const [tabContent, setTabContent] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");

  const selectHandler = (selectedTopic) => {
    setTabContent(<TabContent topic={selectedTopic} />);
    setSelectedTopic(selectedTopic);
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
          <TabButton
            onSelect={() => selectHandler("components")}
            isSelected={selectedTopic === "components"}
          >
            Components
          </TabButton>
          <TabButton
            onSelect={() => selectHandler("jsx")}
            isSelected={selectedTopic === "jsx"}
          >
            JSX
          </TabButton>
          <TabButton
            onSelect={() => selectHandler("props")}
            isSelected={selectedTopic === "props"}
          >
            Props
          </TabButton>
          <TabButton
            onSelect={() => selectHandler("state")}
            isSelected={selectedTopic === "state"}
          >
            State
          </TabButton>
        </menu>
        <div id="tab-content">
          {tabContent ? tabContent : "Please select a topic."}
        </div>
      </section>
    </main>
  );
}
