import { writable } from 'svelte/store';
import type { Topic } from '$lib/types/content';
import linuxguide from '$lib/data/content';
import compassdocs from '$lib/data/info';

const jsonModules = import.meta.glob('$lib/data/json/*.json', { eager: true });
const sources: Record<string, Topic[]> = {};

for (const [path, module] of Object.entries(jsonModules)) {
  const fileName = path.split('/').pop()?.replace('.json', '') || 'Unknown';
  const name = fileName
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  const data = (module as { default: { [key: string]: Topic[] } }).default;
  const topics = data.linuxguide || data.info || Object.values(data)[0] || [];
  sources[name] = topics;
}

export const currentSource = writable<Topic[]>(linuxguide); // your preferred default source
export { sources };