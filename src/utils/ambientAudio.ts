/**
 * Ambient Audio Engine using Web Audio API
 * Generates a warm, gentle, dreamy lofi piano/rhodes progression
 * so the site has a rich, peaceful musical atmosphere without external copyright or network dependency.
 */

class AmbientAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timer: number | null = null;
  private volumeNode: GainNode | null = null;
  private currentVolume: number = 0.5;

  private notes = [
    // Beautiful gentle chords (Cmaj7, Am9, Fmaj7, G6)
    [261.63, 329.63, 392.00, 493.88], // C, E, G, B
    [220.00, 261.63, 329.63, 440.00], // A, C, E, A
    [174.61, 261.63, 329.63, 392.00], // F, C, E, G
    [196.00, 246.94, 293.66, 392.00], // G, B, D, G
  ];
  private chordIndex = 0;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.volumeNode = this.ctx.createGain();
      this.volumeNode.gain.setValueAtTime(this.currentVolume, this.ctx.currentTime);
      this.volumeNode.connect(this.ctx.destination);
    }
  }

  public play() {
    this.initContext();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isPlaying = true;
    this.chordIndex = 0;
    this.playNextArpeggio();
  }

  private playTone(freq: number, startTime: number, duration: number, velocity: number) {
    if (!this.ctx || !this.volumeNode) return;

    // Dual oscillator for rich, warm Rhodes piano feel
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    // Soft sine & gentle triangle
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, startTime);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 2, startTime); // subtle octave harmonic
    osc2.detune.setValueAtTime(4, startTime);

    // Filter to warm the tone
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, startTime);
    filter.frequency.exponentialRampToValueAtTime(400, startTime + duration);

    // Envelope
    const attack = 0.05;
    const decay = duration * 0.9;
    noteGain.gain.setValueAtTime(0.001, startTime);
    noteGain.gain.linearRampToValueAtTime(velocity * 0.2, startTime + attack);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + attack + decay);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.volumeNode);

    osc1.start(startTime);
    osc2.start(startTime);
    osc1.stop(startTime + duration + 0.1);
    osc2.stop(startTime + duration + 0.1);
  }

  private playNextArpeggio() {
    if (!this.isPlaying || !this.ctx) return;

    const chord = this.notes[this.chordIndex % this.notes.length];
    const now = this.ctx.currentTime + 0.05;

    // Play chord tones with subtle arpeggiation delay
    chord.forEach((freq, idx) => {
      const delay = idx * 0.28 + (Math.random() * 0.04);
      const vel = 0.65 - idx * 0.08;
      this.playTone(freq, now + delay, 3.8, vel);
    });

    this.chordIndex++;

    // Next chord every 3.2 seconds
    this.timer = window.setTimeout(() => {
      if (this.isPlaying) {
        this.playNextArpeggio();
      }
    }, 3200);
  }

  public pause() {
    this.isPlaying = false;
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
  }

  public setVolume(vol: number) {
    this.currentVolume = Math.max(0, Math.min(1, vol));
    if (this.volumeNode && this.ctx) {
      this.volumeNode.gain.setValueAtTime(this.currentVolume, this.ctx.currentTime);
    }
  }

  public getStatus() {
    return this.isPlaying;
  }
}

export const ambientPlayer = new AmbientAudioEngine();
