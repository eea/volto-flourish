import { default as Flourish } from '@eeacms/volto-flourish/components/Flourish';

const FlourishViewWidget = (props) => {
  const flourish_url = props.value?.download?.replace(
    '/@@download/flourish_zip',
    '/',
  );
  return props.value ? (
    <div className="flourish-view-widget">
      <Flourish baseUrl={flourish_url} />
    </div>
  ) : null;
};

export default FlourishViewWidget;
