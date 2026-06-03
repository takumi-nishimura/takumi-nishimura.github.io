import React from 'react';

// mermaid is heavy, so it is loaded only when a post actually contains a
// ```mermaid block. The dynamic import becomes its own webpack chunk and does
// not affect the initial bundle of the rest of the site.
let mermaidPromise: Promise<any> | null = null;

function getMermaid(): Promise<any> {
    if (!mermaidPromise) {
        mermaidPromise = import('mermaid').then((mod) => {
            const mermaid = mod.default;
            mermaid.initialize({ startOnLoad: false, theme: 'default', securityLevel: 'strict' });
            return mermaid;
        });
    }
    return mermaidPromise;
}

let counter = 0;

const Mermaid: React.FC<{ chart: string }> = ({ chart }) => {
    const [svg, setSvg] = React.useState<string | null>(null);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        let active = true;
        const id = `mermaid-${counter++}`;
        getMermaid()
            .then((mermaid) => mermaid.render(id, chart))
            .then(({ svg }: { svg: string }) => {
                if (active) setSvg(svg);
            })
            .catch(() => {
                if (active) setError(true);
            });
        return () => {
            active = false;
        };
    }, [chart]);

    // fall back to the raw source if the diagram fails to parse
    if (error) {
        return <pre><code>{chart}</code></pre>;
    }
    if (svg === null) {
        return <div style={{ color: '#888', fontSize: '0.9rem', margin: '1em 0' }}>図を描画中...</div>;
    }
    return <div className='mermaid-diagram' dangerouslySetInnerHTML={{ __html: svg }} />;
};

export default Mermaid;
