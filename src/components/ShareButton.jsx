import { useState } from 'react';
import { FiShare2 } from 'react-icons/fi'; // Icon here

function ShareButton({ url }) {
    const [copied, setCopied] = useState(false);

    const handleShare = () => {
        navigator.clipboard.writeText(url).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div
            className="share-button"
            title={copied ? "Link copied!" : "Copy link"}
            onClick={handleShare}
        >
            {copied ? '✅' : <FiShare2 size={18} />}
        </div>
    );
}

export default ShareButton;
