import { Ok, Err, Result } from 'ts-results';

export const isEmpty = (string: string | null | undefined) => {
    return !(string != null && String(string).length > 0);
};

type IPV4 = [number, number, number, number]
type Mask = number
type CIDR = [IPV4, Mask]

export function validateCIDR(str: string): Result<CIDR, IPValidationError> {
    const ipSections: number[] = [];

    let lastNum = -1;
    let hasMask = false;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        // 46 is '.', 47 is '/'
        if (char == 46 || char == 47) {
            if (lastNum == -1) {
                return Err({
                    kind: 'IP_VALIDATION_ERROR',
                    msg: `echo section in ${str} should be one valid number`
                });
            }
            ipSections.push(lastNum);
            // reset memo
            lastNum = -1;
            hasMask = hasMask || (char == 47);
            continue;
        }
        const num = char - 48; // 48 is '0'
        if (num < 0 || num > 9) {
            return Err({
                kind: 'IP_VALIDATION_ERROR',
                msg: `${str} may contain non-numberic character`
            });
        }
        lastNum = lastNum == -1 ? num : lastNum * 10 + num;
    }
    const mask: Mask = lastNum;

    if (!hasMask) {
        return Err({
            kind: 'IP_VALIDATION_ERROR',
            msg: `${str} should contain mask part`
        });
    }
    if (ipSections.length != 4) {
        return Err({
            kind: 'IP_VALIDATION_ERROR',
            msg: `${str} should contain 4 parts`
        });
    }
    if (ipSections.filter(num => num < 0 || num > 255).length != 0) {
        return Err({
            kind: 'IP_VALIDATION_ERROR',
            msg: `each part in ${str} should between 0-255`
        });
    }
    if (mask <= 0 || mask > 32) {
        return Err({
            kind: 'IP_VALIDATION_ERROR',
            msg: `mask in ${str} shuold between 1-32`
        });
    }

    return Ok([
        [ipSections[0], ipSections[1], ipSections[2], ipSections[3]],
        mask
    ]);
}