/* Declares the CatNap Audio Worklet Processor */

class CatNap_AWP extends AudioWorkletGlobalScope.WAMProcessor
{
  constructor(options) {
    options = options || {}
    options.mod = AudioWorkletGlobalScope.WAM.CatNap;
    super(options);
  }
}

registerProcessor("CatNap", CatNap_AWP);
