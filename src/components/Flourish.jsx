import { useEffect, useRef } from 'react';
import { addAppURL } from '@plone/volto/helpers';
import superagent from 'superagent';

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
        // Get nonce from any existing script tag
        const existingScript = document.querySelector('script[nonce]');
        const nonce = existingScript?.nonce;

        superagent
          .get(scriptUrl)
          .withCredentials()
          .set('Accept', 'application/javascript')
          .then((response) => {
            const script = document.createElement('script');
            script.className = 'flourish-embed-script';
            script.id = id;
            if (nonce) {
              script.nonce = nonce;
            }
            script.textContent = response.text;
            document.body.appendChild(script);
            // eslint-disable-next-line no-console
            console.log('Loaded script via superagent:', id);
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.error('Failed to load Flourish script:', error);
          });
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
