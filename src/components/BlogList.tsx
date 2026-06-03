import React from 'react';
import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { loadPostIndex, PostMeta } from '../lib/posts';

const BlogList: React.FC = () => {
    const [posts, setPosts] = React.useState<PostMeta[] | null>(null);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        loadPostIndex()
            .then(setPosts)
            .catch((e) => setError(String(e)));
    }, []);

    return (
        <Box sx={{ minHeight: '80vh', paddingTop: 4, paddingBottom: 8 }}>
            <Typography variant='h3' component='div' sx={{ color: 'black', marginBottom: 3 }}>Blog</Typography>

            {error && (
                <Typography color='error'>記事の読み込みに失敗しました. {error}</Typography>
            )}

            {posts && posts.length === 0 && (
                <Typography sx={{ color: '#666' }}>まだ記事がありません.</Typography>
            )}

            {posts && posts.map((p) => (
                <Card key={p.slug} variant='outlined' sx={{ marginBottom: 2, borderColor: '#e0e0e0' }}>
                    <CardActionArea component={RouterLink} to={`/blog/${p.slug}`}>
                        <CardContent>
                            <Typography variant='caption' sx={{ color: '#888' }}>{p.date}</Typography>
                            <Typography variant='h5' sx={{ color: 'black', marginTop: 0.5 }}>{p.title}</Typography>
                            <Typography variant='body2' sx={{ color: '#555', marginTop: 1, lineHeight: 1.7 }}>{p.summary}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Box>
    );
};

export default BlogList;
