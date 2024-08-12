const View = (props) => {
  const flourish_url = props.data.flourish_item_url + '/@@flourish/index.html';
  return (
    <div className="embed-flourish">
      {props.data.flourish_item_url ? (
        <iframe
          src={flourish_url}
          height="400"
          width="100%"
          title="FlourishEmbed"
        ></iframe>
      ) : props.mode ? (
        <div>Embed flourish</div>
      ) : null}
    </div>
  );
};

export default View;
