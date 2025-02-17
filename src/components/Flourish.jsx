import { useEffect, useRef } from 'react';

export default function Flourish({ baseUrl }) {
  const containerRef = useRef(null);
  const flourishUrl = `${baseUrl}/@@flourish/index.html`;
  const scriptUrl = `${baseUrl}/@@flourish/flourish.embed.js`;

  useEffect(() => {
    if (!baseUrl || !containerRef.current) return;

    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = true;
    script.onload = () => {};

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [baseUrl, scriptUrl]);

  return (
    <div
      ref={containerRef}
      className="flourish-embed"
      data-src={flourishUrl}
    ></div>
  );
}
