import { CORE_CONCEPTS } from "../data";
import { CoreConcept } from "./CoreConcept";
import Section from "./Section";

export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((concept, index) => (
          // <CoreConcept image={concept.image} title={concept.title} description={concept.description} />
          <CoreConcept key={index} {...concept}  />
        ))}
      </ul>
    </Section>
  );
}