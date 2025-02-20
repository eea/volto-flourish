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

      //eslint-disable-next-line no-console
      console.log(
        'scripts',
        document.querySelectorAll('script.flourish-embed-script'),
      );

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
        //eslint-disable-next-line no-console
        console.log('nodes', document.querySelectorAll('.flourish-embed'));
        document.querySelectorAll('.flourish-embed').forEach((node) => {
          //eslint-disable-next-line no-console
          console.log('Loading embed', node.id);
          try {
            window.Flourish.loadEmbed(node);
          } catch {
            //eslint-disable-next-line no-console
            console.log('Error loading flourish embed');
          }
        });
      }
    }, 1000);

    return () => {};
  }, [baseUrl, scriptUrl, id, flourishUrl]);

  return <div className="flourish-embed" id={id} ref={nodeRef}></div>;
}
