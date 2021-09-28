// import Vue from 'vue'
// export const Bus = new Vue()

/**
 * @name: 中央事件总线Bus
 * @param
 */
class Bus {
    callbacks = {}
    constructor() {
      this.callbacks = {}
    }
    $on(name, fn) {
      this.callbacks[name] = this.callbacks[name] || []
      this.callbacks[name].push(fn)
    }
    $emit(name, args) {
      if (this.callbacks[name]) {
        this.callbacks[name].forEach((cb) => cb(args))
      }
    }
}

export default new Bus()