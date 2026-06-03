// Blog posts are stored as Markdown under public/posts/.
// public/posts/index.json lists the metadata; the body of each post lives in
// public/posts/<slug>.md. To add a post: drop a <slug>.md file and add one
// entry to index.json (newest first).

export type PostMeta = {
    slug: string;
    title: string;
    date: string; // ISO date, e.g. 2026-06-03
    summary: string;
};

const base = process.env.PUBLIC_URL ?? '';

export async function loadPostIndex(): Promise<PostMeta[]> {
    const res = await fetch(`${base}/posts/index.json`, { cache: 'no-cache' });
    if (!res.ok) throw new Error(`failed to load post index: ${res.status}`);
    return (await res.json()) as PostMeta[];
}

// Strip an optional YAML frontmatter block so the rendered body stays clean
// even if the author keeps notes at the top of the .md file.
function stripFrontmatter(md: string): string {
    if (md.startsWith('---')) {
        const end = md.indexOf('\n---', 3);
        if (end !== -1) {
            const after = md.indexOf('\n', end + 1);
            return after !== -1 ? md.slice(after + 1) : '';
        }
    }
    return md;
}

export async function loadPostBody(slug: string): Promise<string> {
    const res = await fetch(`${base}/posts/${slug}.md`, { cache: 'no-cache' });
    if (!res.ok) throw new Error(`failed to load post: ${res.status}`);
    return stripFrontmatter(await res.text());
}
