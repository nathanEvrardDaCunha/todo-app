// NOTE: Implement code coverage to enhance code maintainability (optional for now).
// NOTE: Replace magic value by global constant to enhance code consistency (optional for now).

// NOTE: Use of custom error to quickly find problems root causes.
class DataValidatorError extends Error {
        constructor(message) {
                super(message);
                this.name = 'DataValidatorError';
        }
}

// NOTE: Use of pure function to avoid accidental coupling and side effect.
const DataResult = {
        success: (data) => ({ isSuccess: true, data, error: null }),
        failure: (error) => ({ isSuccess: false, data: null, error }),
};

function isDataString(data) {
        return typeof data === 'string';
}

function isDataNull(data) {
        return data === null;
}

function isDataUndefined(data) {
        return data === undefined;
}

function checkDataIsString(data) {
        return isDataString(data) ? DataResult.success(data) : DataResult.failure(`Data is not a string !`);
}

function checkDataIsDefined(data) {
        return isDataUndefined(data) ? DataResult.failure(`Data is undefined !`) : DataResult.success(data);
}

function checkDataIsNonNull(data) {
        return isDataNull(data) ? DataResult.failure(`Data is null !`) : DataResult.success(data);
}

function checkData(data) {
        const nullResult = checkDataIsNonNull(data);
        if (!nullResult.isSuccess) return nullResult;

        const definedResult = checkDataIsDefined(data);
        if (!definedResult.isSuccess) return definedResult;

        return checkDataIsString(data);
}

// NOTE: Use of impure function to communicate with the system.
export function validateData(data) {
        const result = checkData(data);
        if (!result.isSuccess) throw new DataValidatorError(result.error);
        return true;
}
