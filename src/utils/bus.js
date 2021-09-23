// import Vue from 'vue'
// export const Bus = new Vue()

/**
 * @name: 中央事件总线Bus
 * @param 
 */
class Bus {
    callbacks: object = {}
    constructor() {
        this.callbacks = {}
    }
    $on(name: string, fn: Function) {
        this.callbacks[name] = this.callbacks[name] || []
        this.callbacks[name].push(fn)
    }
    $emit(name: string, args: any[]) {
        if (this.callbacks[name]) {
            this.callbacks[name].forEach((cb: Function) => cb(args))
        }
    }
}

export default new Bus()