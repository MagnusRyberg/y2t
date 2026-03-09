import React, { useState } from "react";

function extractVideoId(url: string): string | null {
  // Handles various YouTube URL formats
  const regExp =
    /^.*(?:youtu.be\/|v\/|embed\/|watch\?v=|watch\?.+&v=)([\w-]{11}).*/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

export default function Home() {
  const [url, setUrl] = useState("");
  const [count, setCount] = useState(1);
  const [videoId, setVideoId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = extractVideoId(url);
    setVideoId(id);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-black">
      <h1 className="text-3xl font-bold mb-6 text-black dark:text-zinc-50">
        Multi-View YouTube Player
      </h1>
      <form
        className="flex flex-col gap-4 mb-8 w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter YouTube URL"
          value={url}
          onChange={e => setUrl(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <input
          type="number"
          min={1}
          max={10}
          value={count}
          onChange={e => setCount(Number(e.target.value))}
          className="p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Show Players
        </button>
      </form>
      {videoId && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
          {Array.from({ length: count }).map((_, idx) => (
            <iframe
              key={idx}
              width="360"
              height="215"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`YouTube Player ${idx + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded shadow"
            />
          ))}
        </div>
      )}
    </div>
  );
}
