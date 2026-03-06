
export default function Home() {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="https://magnusryberg.github.io/y2t/"
        title="Multi-View YouTube Player Solution"
        width="100%"
        height="100%"
        style={{ border: 'none', minHeight: '100vh' }}
        allowFullScreen
      />
    </div>
  );
}
