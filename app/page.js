'use client';

import { useMemo, useState } from 'react';

const defaults = {
  girlName: 'Mira',
  age: '16',
  personality: 'soft-spoken, curious, and optimistic',
  setting: 'a cozy bedroom in Ramadi with warm sunset light filtering through gauzy curtains',
  skinDescription: 'naturally glowing skin with the tiniest first pimple on her left cheek',
  remedy: 'a clean warm compress followed by a soothing honey and aloe dab, plus lots of gentle hydration',
  narrativeBeat: 'capture her mix of surprise, self-consciousness, and budding confidence as she learns a calm skincare ritual',
  visualTone: 'dreamy, pastel-hued, stylized realism with subtle sparkles to emphasize tenderness',
  cameraStyle: 'slow cinematic push-ins and soft orbiting shots at child-height perspective',
  musicMood: 'delicate piano with hopeful strings and ambient birdsong from outdoors',
  renderStyle: 'Pixar-quality 3D render with subsurface scattering, precise skin shading, and volumetric lighting'
};

export default function Home() {
  const [data, setData] = useState(defaults);
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(() => {
    return [
      'Create a 3D animated short featuring a sweet teenage girl experiencing her very first pimple.',
      `Name: ${data.girlName}, age ${data.age}, personality ${data.personality}.`,
      `Setting: ${data.setting}.`,
      `Close-up detail: ${data.skinDescription}.`,
      `Emphasize thoughtful, dermatologist-informed home care steps: ${data.remedy}.`,
      `Narrative arc: ${data.narrativeBeat}.`,
      `Visual tone & color: ${data.visualTone}.`,
      `Camera language: ${data.cameraStyle}.`,
      `Sound design & score: ${data.musicMood}.`,
      `Rendering & technical direction: ${data.renderStyle}.`,
      'Keep the story compassionate and age-appropriate, modeling gentle skincare habits and reassuring self-talk.',
      'Avoid squeezing, picking, or harsh ingredients. Highlight hygiene, patience, and consulting a healthcare professional if irritation worsens.'
    ].join('\n\n');
  }, [data]);

  const updateField = (key) => (event) => {
    setData((prev) => ({ ...prev, [key]: event.target.value }));
    setCopied(false);
  };

  const handleReset = () => {
    setData(defaults);
    setCopied(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
    } catch (error) {
      console.error('Copy failed', error);
      setCopied(false);
    }
  };

  return (
    <main>
      <header>
        <h1>3D Animation Prompt: First Pimple Journey</h1>
        <p className="lead">
          Customize the creative brief for a compassionate 3D animated video about a girl discovering her first pimple and caring for it with gentle, evidence-based home habits.
        </p>
      </header>

      <section className="formGrid">
        <label>
          Character name
          <input value={data.girlName} onChange={updateField('girlName')} placeholder="Name" />
        </label>
        <label>
          Character age
          <input value={data.age} onChange={updateField('age')} placeholder="Age" />
        </label>
        <label>
          Personality highlights
          <textarea value={data.personality} onChange={updateField('personality')} />
        </label>
        <label>
          Environment & setting details
          <textarea value={data.setting} onChange={updateField('setting')} />
        </label>
        <label>
          Skin close-up description
          <textarea value={data.skinDescription} onChange={updateField('skinDescription')} />
        </label>
        <label>
          Gentle home-care approach
          <textarea value={data.remedy} onChange={updateField('remedy')} />
        </label>
        <label>
          Emotional or narrative beats
          <textarea value={data.narrativeBeat} onChange={updateField('narrativeBeat')} />
        </label>
        <label>
          Visual tone and color language
          <textarea value={data.visualTone} onChange={updateField('visualTone')} />
        </label>
        <label>
          Camera mood & movement
          <textarea value={data.cameraStyle} onChange={updateField('cameraStyle')} />
        </label>
        <label>
          Music & ambient sound direction
          <textarea value={data.musicMood} onChange={updateField('musicMood')} />
        </label>
        <label>
          Rendering & technical notes
          <textarea value={data.renderStyle} onChange={updateField('renderStyle')} />
        </label>
      </section>

      <section className="buttonRow">
        <button className="reset" type="button" onClick={handleReset}>
          Reset to defaults
        </button>
        <button className="copy" type="button" onClick={handleCopy}>
          {copied ? 'Prompt copied!' : 'Copy prompt'}
        </button>
      </section>

      <section>
        <h2 style={{ fontSize: '1.4rem', color: '#3b2d71', marginBottom: '0.75rem' }}>Prompt Output</h2>
        <article className="promptCard">{prompt}</article>
      </section>

      <aside className="disclaimer">
        This creative prompt is for storytelling inspiration only and is not a substitute for professional medical advice. Encourage viewers to consult a qualified healthcare provider if acne or skin irritation persists or worsens.
      </aside>
    </main>
  );
}
