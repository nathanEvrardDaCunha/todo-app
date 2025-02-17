// TODO: Write pure function to improve code predicatability.
// NOTE: Implement code coverage to enhance code maintainability (optional for now).
// NOTE: Replace magic value by global constant to enhance code consistency (optional for now).

export function isDataTypeString(data) {
        return typeof data === 'string' ? true : false;
}

export function isDataNull(data) {
        return data === null ? true : false;
}

export function isDataUndefined(data) {
        return data === undefined ? true : false;
}
