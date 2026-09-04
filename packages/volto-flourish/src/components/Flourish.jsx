import { useEffect, useRef } from 'react';

export default function Flourish({ baseUrl, id }) {
  const flourishUrl = `${baseUrl}/@@flourish/index.html`;
  const nodeRef = useRef(null);
  const scriptUrl = `${baseUrl}/@@flourish/flourish.embed.js`;

  useEffect(() => {
    if (!baseUrl) return;

    setTimeout(() => {
      const container = nodeRef.current;
      if (!container) {
        return;
      }

      container.setAttribute('data-src', flourishUrl);

      if (
        document.querySelectorAll('script.flourish-embed-script').length === 0
      ) {
        const script = document.createElement('script');
        script.src = scriptUrl;
        script.className = 'flourish-embed-script';
        script.id = id;
        script.onload = () => {
          //eslint-disable-next-line no-console
          console.log('loaded script', id);
        };
        document.body.appendChild(script);
      } else {
        const node = document.getElementById(id);
        if (node && window.Flourish?.loadEmbed) {
          //eslint-disable-next-line no-console
          console.log('Loading embed', node.id);
          window.Flourish.loadEmbed(node);
        }
      }
    }, 200);

    return () => {};
  }, [baseUrl, scriptUrl, id, flourishUrl]);

  return <div className="flourish-embed" id={id} ref={nodeRef}></div>;
}
