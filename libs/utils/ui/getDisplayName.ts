import { ComponentType } from "react";

export const getDisplayName = <P>(
  WrappedComponent: ComponentType<P>
): string => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};
