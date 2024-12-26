import { BlockBuilderQuestion } from "@typeslib/survey/page-types";

import { BlockBuilder } from "./block-builder";

export const BlockBuilderPage = ({ components, id }: BlockBuilderQuestion) => {
  return (
    <section className="max-w-sub-container w-full">
      {components.map((component) => {
        return (
          <BlockBuilder key={component.id} {...component} questionId={id} />
        );
      })}
    </section>
  );
};
