# Copilot Instructions for Multi-View YouTube Player

## Project Overview
- This is a Next.js app for viewing the same YouTube video in multiple embedded players.
- Users enter a YouTube URL and select the number of players (1-10).
- Each player is an independently controlled YouTube embed.

## Key Files & Structure
- `src/app/page.tsx`: Main UI logic for input form and rendering multiple YouTube embeds.
- `src/app/layout.tsx`: App layout and global styles.
- `src/app/globals.css`: Tailwind and custom CSS.

## Development Workflow
- Use `npm run dev` to start the development server.
- Edit `page.tsx` to implement the multi-view player logic.
- Use Tailwind CSS for styling components.
- Each YouTube player should be rendered as an `<iframe>` using the YouTube embed URL.
- For independent control, consider using the YouTube Player API or allow each `<iframe>` to be separately interacted with.

## Patterns & Conventions
- Use React functional components and hooks.
- Keep player state (URL, count) in the main page component.
- Validate YouTube URLs before rendering embeds.
- Limit player count to 1-10.
- Use TypeScript for type safety.

## Example Implementation Steps
1. Add a form to `page.tsx` for YouTube URL and player count.
2. On submit, render N `<iframe>` embeds for the video.
3. Each embed uses the YouTube embed URL format: `https://www.youtube.com/embed/{VIDEO_ID}`.
4. Optionally, integrate YouTube Player API for advanced controls.

## External Dependencies
- Next.js, React, Tailwind CSS, TypeScript (default setup).

## Testing & Debugging
- Use browser dev tools and React DevTools for debugging.
- Test with various YouTube URLs and player counts.

## Documentation
- Update `README.md` and this file as features evolve.

---
For more guidance, see the README and source files. Keep instructions concise and focused on this project's unique patterns.