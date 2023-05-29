type AppError = IPValidationError;

type IPV4 = [number, number, number, number]
type Mask = number
type CIDR = [IPV4, Mask]

interface IPValidationError {
    kind: 'IP_VALIDATION_ERROR';
    msg: string;
}