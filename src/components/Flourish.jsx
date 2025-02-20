import { useEffect, useRef } from 'react';
// const scripts_map = {};
//
const debugStyle = { height: '1px', backgroundColor: 'transparent' };

function cleanup() {
  delete window.Flourish;
  window.FlourishConfig = {
    public_url: window.location.origin,
  };
  delete window._Flourish_visualisation_id;
  delete window._Flourish_template_id;
  delete window._flourish_poll_items;
}

export default function Flourish({ baseUrl, id }) {
  const flourishUrl = `${baseUrl}/@@flourish/index.html`;
  const nodeRef = useRef(null);
  const scriptUrl = `${baseUrl}/@@flourish/flourish.embed.js`;

  useEffect(() => {
    if (!baseUrl) return;

    setTimeout(() => {
      const container = nodeRef.current;
      if (!container) {
        // cleanup();
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
          window.Flourish.loadEmbed(node);
        });
      }
    }, 1000);

    return () => {
      // cleanup();
    };
  }, [baseUrl, scriptUrl, id, flourishUrl]);

  return (
    <div
      className="flourish-embed"
      id={id}
      ref={nodeRef}
      style={debugStyle}
    ></div>
  );
}
