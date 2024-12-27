import { ComponentType, Suspense } from "react";

import { getDisplayName } from "@utils/ui/getDisplayName";

export const withSuspense = <P extends Object>(
  WrappedComponent: ComponentType<P>,
  Loader?: ComponentType,
) => {
  const WithSuspense = (props: P) => {
    return (
      <Suspense fallback={Loader ? <Loader /> : null}>
        <WrappedComponent {...props} />
      </Suspense>
    );
  };

  WithSuspense.displayName = `WithLiteralReplacement(${getDisplayName(WrappedComponent)})`;

  return WithSuspense;
};
