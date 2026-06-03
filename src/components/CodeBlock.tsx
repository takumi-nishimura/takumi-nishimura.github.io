import React from 'react';

// A fenced code block with a copy-to-clipboard button, as commonly seen for
// terminal snippets. react-markdown's <pre> is rendered transparently (see
// BlogPost), so this component owns the visible <pre>.
const CodeBlock: React.FC<{ code: string; className?: string }> = ({ code, className }) => {
    const [copied, setCopied] = React.useState(false);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1500);
        } catch {
            // clipboard API unavailable (e.g. insecure context); ignore
        }
    };

    return (
        <div className='code-block'>
            <button className='code-copy' onClick={copy} aria-label='Copy code'>
                {copied ? 'Copied' : 'Copy'}
            </button>
            <pre><code className={className}>{code}</code></pre>
        </div>
    );
};

export default CodeBlock;
