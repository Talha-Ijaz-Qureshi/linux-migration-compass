# Linux Migration Compass

## Compass Docs Data Structure

Compass Docs uses a hierarchical, TypeScript-defined data structure to render professional, wiki-like documentation. The structure is designed for flexibility, allowing custom JSON content to be transformed into a sleek, reactive UI with SvelteKit and IBM Carbon Design System. Below is an ASCII representation of the aggregated data model:


### Structure Overview
- **Topic**: The root entity, defining a documentation topic with a title and an array of sections.
- **Section**: Organizes content with a unique `id`, `title`, introductory text, and an array of subtopics.
- **Subtopic**: Groups related content under a `title`, containing an array of blocks.
- **Block**: The core content unit, supporting `text`, `code`, or `note` types, with optional `kind` (e.g., `info`, `warning`) and `message` for notes.
- **BlockType**: A union type restricting `Block.type` to `text`, `code`, or `note`.

This structure enables developers to create modular, reusable documentation by defining content in JSON, which Compass Docs renders into a polished, user-friendly interface.