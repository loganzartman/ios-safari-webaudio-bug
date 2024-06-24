This demonstrates a bug in iOS Safari.

The bug manifests as distored/garbled WebAudio output.

Here are steps to reproduce:

1. Call `navigator.mediaDevices.getUserMedia({audio: true})`
2. Create an AudioContext
3. Add any audio worklet using `audioContext.audioWorklet.addModule`

Here are some observations:

- Only reproduces on iOS.
- The order of these steps is important. Creating the AudioContext first seems to resolve the issue.
- Both `getUserMedia()` and `addModule()` must be called to reproduce the bug.
- The audio worklet does not have to do anything specific to cause the bug.
- It seems to affect all audio output. The OscillatorNode in this example is just for demonstration.
