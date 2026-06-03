# Blog posts

Blog posts are plain Markdown files served statically from this folder.

## Add a post

1. Create `<slug>.md` here. Write the body in Markdown (GitHub Flavored Markdown
   is supported: tables, code fences, etc.). An optional YAML frontmatter block
   at the top is allowed and is stripped from the rendered body.
2. Add an entry to `index.json` (newest first):

   ```json
   {
     "slug": "<slug>",
     "title": "Post title",
     "date": "2026-06-03",
     "summary": "One-line summary shown on the blog list."
   }
   ```

The post is then available at `/#/blog/<slug>` and listed at `/#/blog`.

`title`, `date`, and `summary` come from `index.json` (used by the list page and
the post header). The `.md` file holds the article body.
