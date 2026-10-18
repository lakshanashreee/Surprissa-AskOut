import React from 'react';
import { AudioProvider } from './components/ui/AudioEffects';
import { CursorProvider } from './components/ui/CursorFollower';
import { AskOutLiveExperience } from './components/interactive/AskOutLiveExperience';

export default function App() {
  return (
    <AudioProvider>
      <CursorProvider>
        <div style={{
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'var(--color-burgundy-deepest)',
          position: 'relative'
        }}>
          <AskOutLiveExperience recipientName="Stacy" />
        </div>
      </CursorProvider>
    </AudioProvider>
  );
}
