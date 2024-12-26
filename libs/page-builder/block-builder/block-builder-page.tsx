import { Fragment } from "react";

import { BlockBuilderQuestion } from "@typeslib/questionary";

import { BlockBuilder } from "./block-builder";

export const BlockBuilderPage = ({ components }: BlockBuilderQuestion) => {
  return (
    <Fragment>
      {components.map((component) => {
        return <BlockBuilder key={component.id} {...component} />;
      })}
    </Fragment>
  );
};
