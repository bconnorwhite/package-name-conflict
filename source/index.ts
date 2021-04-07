
/**
 * Matches `.`, `-`, or `_`
 */
const punctuationRegex = /[.\-_]/g;

export function transform(name: string) {
  return name.replace(punctuationRegex, "").toLowerCase();
}

export function conflicts(nameA: string, nameB: string) {
  return transform(nameA) === transform(nameB);
}

export function conflictsAny(name: string, names: string[]) {
  const nameTransform = transform(name);
  return names.find((item) => nameTransform === transform(item)) ?? false;
}
