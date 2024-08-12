const FlourishViewWidget = (props) => {
  const flourish_url = props.value?.download.replace(
    '/@@download/flourish_zip',
    '/@@flourish/index.html',
  );
  return (
    <div>
      {props.value ? (
        <iframe
          src={flourish_url}
          height="400"
          width="100%"
          title="Flourish Widget"
        ></iframe>
      ) : null}
    </div>
  );
};

export default FlourishViewWidget;
