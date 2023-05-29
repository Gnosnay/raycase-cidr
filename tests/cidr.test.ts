import { validateCIDR } from '../src/utils/common-utils';

describe('cidr validation', function () {
    it('10.0.0.0/24', function () {
        const res = validateCIDR('10.0.0.0/24');
        expect(res.ok).toBe(true);
        expect(res.val).toStrictEqual([[10, 0, 0, 0], 24]);
    });

    it('192.168.0.0/16', function () {
        const res = validateCIDR('192.168.0.0/16');
        expect(res.ok).toBe(true);
        expect(res.val).toStrictEqual([[192, 168, 0, 0], 16]);
    });

    it('172.16.0.0/12', function () {
        const res = validateCIDR('172.16.0.0/12');
        expect(res.ok).toBe(true);
        expect(res.val).toStrictEqual([[172, 16, 0, 0], 12]);
    });

    it('10.10.0.0/16', function () {
        const res = validateCIDR('10.10.0.0/16');
        expect(res.ok).toBe(true);
        expect(res.val).toStrictEqual([[10, 10, 0, 0], 16]);
    });

    it('192.0.2.0/24', function () {
        const res = validateCIDR('192.0.2.0/24');
        expect(res.ok).toBe(true);
        expect(res.val).toStrictEqual([[192, 0, 2, 0], 24]);
    });

    it('203.0.113.0/24', function () {
        const res = validateCIDR('203.0.113.0/24');
        expect(res.ok).toBe(true);
        expect(res.val).toStrictEqual([[203, 0, 113, 0], 24]);
    });

    it('198.51.100.0/24', function () {
        const res = validateCIDR('198.51.100.0/24');
        expect(res.ok).toBe(true);
        expect(res.val).toStrictEqual([[198, 51, 100, 0], 24]);
    });

    it('172.18.0.0/16', function () {
        const res = validateCIDR('172.18.0.0/16');
        expect(res.ok).toBe(true);
        expect(res.val).toStrictEqual([[172, 18, 0, 0], 16]);
    });

    it('10.20.30.0/24', function () {
        const res = validateCIDR('10.20.30.0/24');
        expect(res.ok).toBe(true);
        expect(res.val).toStrictEqual([[10, 20, 30, 0], 24]);
    });

    it('192.168.1.0/24', function () {
        const res = validateCIDR('192.168.1.0/24');
        expect(res.ok).toBe(true);
        expect(res.val).toStrictEqual([[192, 168, 1, 0], 24]);
    });

    it('172.31.0.0/16', function () {
        const res = validateCIDR('172.31.0.0/16');
        expect(res.ok).toBe(true);
        expect(res.val).toStrictEqual([[172, 31, 0, 0], 16]);
    });

    it('10.100.0.0/16', function () {
        const res = validateCIDR('10.100.0.0/16');
        expect(res.ok).toBe(true);
        expect(res.val).toStrictEqual([[10, 100, 0, 0], 16]);
    });

    it('203.0.123.0/24', function () {
        const res = validateCIDR('203.0.123.0/24');
        expect(res.ok).toBe(true);
        expect(res.val).toStrictEqual([[203, 0, 123, 0], 24]);
    });

    it('198.18.0.0/15', function () {
        const res = validateCIDR('198.18.0.0/15');
        expect(res.ok).toBe(true);
        expect(res.val).toStrictEqual([[198, 18, 0, 0], 15]);
    });

    it('172.19.0.0/16', function () {
        const res = validateCIDR('172.19.0.0/16');
        expect(res.ok).toBe(true);
        expect(res.val).toStrictEqual([[172, 19, 0, 0], 16]);
    });

    it('10.50.0.0/16', function () {
        const res = validateCIDR('10.50.0.0/16');
        expect(res.ok).toBe(true);
        expect(res.val).toStrictEqual([[10, 50, 0, 0], 16]);
    });

    it('192.168.2.0/24', function () {
        const res = validateCIDR('192.168.2.0/24');
        expect(res.ok).toBe(true);
        expect(res.val).toStrictEqual([[192, 168, 2, 0], 24]);
    });

    it('172.17.0.0/16', function () {
        const res = validateCIDR('172.17.0.0/16');
        expect(res.ok).toBe(true);
        expect(res.val).toStrictEqual([[172, 17, 0, 0], 16]);
    });

    it('10.200.0.0/16', function () {
        const res = validateCIDR('10.200.0.0/16');
        expect(res.ok).toBe(true);
        expect(res.val).toStrictEqual([[10, 200, 0, 0], 16]);
    });

    it('192.168.3.0/24', function () {
        const res = validateCIDR('192.168.3.0/24');
        expect(res.ok).toBe(true);
        expect(res.val).toStrictEqual([[192, 168, 3, 0], 24]);
    });
});