class DummyNodeProcessor extends AudioWorkletProcessor {
  constructor(...args) {
    super(...args);
  }

  process() {
    return true;
  }
}

registerProcessor("DummyNodeProcessor", DummyNodeProcessor);
