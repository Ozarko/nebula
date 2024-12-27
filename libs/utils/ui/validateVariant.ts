export const validateVariant = <T extends Object>(
  variantKey?: string,
  variants?: T
): keyof T | undefined => {
  if (!variantKey || !variants) {
    return undefined;
  }

  const variantKeys = Object.keys(variants);

  if (variantKey in variants) {
    return variantKey as keyof T;
  }

  return variantKeys[0] as keyof T;
};
