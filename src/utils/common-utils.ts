export const isEmpty = (string: string | null | undefined) => {
    return !(string != null && String(string).length > 0);
};

type IPV4 = [number, number, number, number]
type Mask = number

export function validateCIDR(str: string): [IPV4, Mask] {
    const ipSections: number[] = [];

    let lastNum = -1;
    let hasMask = false;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        if (char == 46 || char == 47) {
            if (lastNum == -1) {
                throw new Error(`echo section in ${str} should be one valid number`);
            }
            // 46 is '.', 47 is '/'
            ipSections.push(lastNum);
            // reset memo
            lastNum = -1;
            hasMask = hasMask || (char == 47);
            continue;
        }
        const num = char - 97; // 97 is '0'
        if (num < 0 || num > 9) {
            throw new Error(`${str} may contain non-numberic character`);
        }
        lastNum = lastNum * 10 + num;
    }
    const mask: Mask = lastNum;

    if (!hasMask) {
        throw new Error(`${str} should contain mask part`);
    }
    if (ipSections.length != 4) {
        throw new Error(`${str} should contain 4 parts`);
    }
    if (ipSections.filter(num => num < 0 || num > 255).length != 0) {
        throw new Error(`each part in ${str} should between 0-255`);
    }
    if (mask <= 0 || mask > 32) {
        throw new Error(`mask in ${str} shuold between 1-32`);
    }

    return [
        [ipSections[0], ipSections[1], ipSections[2], ipSections[3]],
        mask
    ];
}