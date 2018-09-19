let _counter = 1;
const Counter = {
  increment() {
    return 'id-' + String(_counter++);
  },
};

export default Counter;
