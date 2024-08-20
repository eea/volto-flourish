const FlourishViewWidget = (props) => {
  const flourish_url = props.value?.download?.replace(
    '/@@download/flourish_zip',
    '/@@flourish/index.html',
  );
  return props.value ? (
    <div className="flourish-view-widget">
      <iframe
        src={flourish_url}
        height="100%"
        width="100%"
        title="Flourish Widget"
      ></iframe>
    </div>
  ) : null;
};

export default FlourishViewWidget;
