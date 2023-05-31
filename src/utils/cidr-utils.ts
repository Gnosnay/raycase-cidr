export type CIDRDetail = {
    range: string,
    netmask: string,
    wildcardBits: string,
    firstIp: string,
    firstIpInt: number,
    lastIp: string,
    lastIpInt: number,
    totalHost: number,
}

function intToIPv4(ipInt: number): string {
    const arr = [
        ((ipInt >> 24) & 255),
        ((ipInt >> 16) & 255),
        ((ipInt >> 8) & 255),
        ipInt & 255,
    ]
    return arr.join(".")
}


export function splitCIDR(cidr: CIDR): CIDRDetail {
    const [ip, maskInt] = cidr;
    const range = `${ip.join(".")}/${maskInt}`;

    const wildcard = (0x1 << (32 - maskInt)) - 1;
    const mask32 = 0xffffffff;
    const netmask = (~wildcard) & mask32;

    const ipInt = ip.reduce((prev, curr) => (prev << 8) + curr, 0)

    const firstIp = ipInt & netmask;
    const lastIp = wildcard | firstIp;

    return {
        range: range,
        netmask: intToIPv4(netmask),
        wildcardBits: intToIPv4(wildcard),
        firstIp: intToIPv4(firstIp),
        // just in case, coerce to Uint32
        firstIpInt: firstIp >>> 0,
        lastIp: intToIPv4(lastIp),
        // just in case, coerce to Uint32
        lastIpInt: lastIp >>> 0,
        totalHost: lastIp - firstIp + 1,
    }
}
