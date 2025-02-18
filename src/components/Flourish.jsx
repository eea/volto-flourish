import { useEffect } from 'react';

export default function Flourish({ baseUrl }) {
  const flourishUrl = `${baseUrl}/@@flourish/index.html`;
  const scriptUrl = `${baseUrl}/@@flourish/flourish.embed.js`;

  useEffect(() => {
    if (!baseUrl) return;

    if (!window.FlourishLoaded) {
      window.Flourish = { disable_autoload: true };

      const script = document.createElement('script');
      script.src = scriptUrl;
      script.async = true;
      script.onload = () => {};

      document.body.appendChild(script);
    } else {
      setTimeout(() => {
        const domNodes = document.querySelectorAll('.flourish-embed');
        domNodes.forEach((domNode) => window.Flourish.loadEmbed(domNode));
      }, 10);
    }

    return () => {};
  }, [baseUrl, scriptUrl]);

  return <div className="flourish-embed" data-src={flourishUrl}></div>;
}
