type AppError = IPValidationError;

interface IPValidationError {
    kind: 'IP_VALIDATION_ERROR';
    msg: string;
}