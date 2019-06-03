const memoryClass = require('./memory');

const memory = new memoryClass()

class TestArray {
    constructor() {
        this.length = 0;
        this.ptr = memory.allocate(this.length);
        this._capacity = 0;
    }

    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        memory.set(this.ptr + this.length, value);
        this.length++;
    }

    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }

    get(index) {
        if(index > this.length) {
            return 'Invalid index';
        }

        return memory.get(this.ptr + index)
    }

    pop() {
        const value = memory.get(this.ptr + this.length -1)
        this.length--
        return value;
    }

    insert(index, value) {
        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length ++;
    }

    remove(index) {
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index -1)
        this.length--
    }

    empty() {
        this.length = 0;
        this.ptr = 0
        console.log(this.ptr)
        this._capacity = 0;
    }
}
Array.SIZE_RATIO = 3;

module.exports = TestArray;