import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { loadPostBody, loadPostIndex, PostMeta } from '../lib/posts';
import CodeBlock from './CodeBlock';
import Mermaid from './Mermaid';

const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [meta, setMeta] = React.useState<PostMeta | null>(null);
    const [body, setBody] = React.useState<string | null>(null);
    const [notFound, setNotFound] = React.useState(false);

    React.useEffect(() => {
        if (!slug) return;
        let active = true;
        (async () => {
            try {
                const index = await loadPostIndex();
                const found = index.find((p) => p.slug === slug);
                if (!found) {
                    if (active) setNotFound(true);
                    return;
                }
                const text = await loadPostBody(slug);
                if (active) {
                    setMeta(found);
                    setBody(text);
                }
            } catch {
                if (active) setNotFound(true);
            }
        })();
        return () => {
            active = false;
        };
    }, [slug]);

    if (notFound) {
        return (
            <Box sx={{ minHeight: '80vh', paddingTop: 4 }}>
                <Typography variant='h5' sx={{ color: 'black' }}>記事が見つかりません.</Typography>
                <Typography sx={{ marginTop: 2 }}>
                    <RouterLink className='link' to='/blog'>← Blog 一覧へ戻る</RouterLink>
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ minHeight: '80vh', paddingTop: 4, paddingBottom: 8 }}>
            <Typography sx={{ marginBottom: 2 }}>
                <RouterLink className='link' to='/blog'>← Blog</RouterLink>
            </Typography>
            {meta && (
                <>
                    <Typography variant='caption' sx={{ color: '#888' }}>{meta.date}</Typography>
                    <Typography variant='h3' component='h1' sx={{ color: 'black', marginTop: 0.5, marginBottom: 3 }}>{meta.title}</Typography>
                </>
            )}
            {body !== null ? (
                <div className='markdown-body'>
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            a: ({ node, children, ...props }) => (
                                <a className='link' target='_blank' rel='noreferrer' {...props}>{children}</a>
                            ),
                            // render <pre> transparently; CodeBlock / Mermaid own the block
                            pre: ({ children }) => <>{children}</>,
                            code: ({ inline, className, children, ...props }) => {
                                if (inline) {
                                    return <code className={className} {...props}>{children}</code>;
                                }
                                const text = String(children).replace(/\n$/, '');
                                const lang = /language-(\w+)/.exec(className || '')?.[1];
                                if (lang === 'mermaid') {
                                    return <Mermaid chart={text} />;
                                }
                                return <CodeBlock code={text} className={className} />;
                            },
                        }}
                    >
                        {body}
                    </ReactMarkdown>
                </div>
            ) : (
                !notFound && <Typography sx={{ color: '#888' }}>読み込み中...</Typography>
            )}
        </Box>
    );
};

export default BlogPost;
