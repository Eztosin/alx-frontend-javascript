export default function createInt8TypedArray(length, position, value) {
    if (position < 0 || position >= length) {
	throw new Error('Position outside range');
    }

    const bufferLength = new ArrayBuffer(length);
    const int8View = new Int8Array(bufferLength);
    int8View[position] = value;

    return int8View;
}
