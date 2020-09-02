
const punctuationRegex = /[\.\-\_]/g; // matches ".", "-", or "_"

export function transform(name: string) {
  return name.replace(punctuationRegex, "").toLowerCase();
}

export function conflicts(nameA: string, nameB: string) {
  return transform(nameA) === transform(nameB);
}

export function conflictsAny(name: string, names: string[]) {
  return names.find((item) => conflicts(name, item)) ?? false;
}
