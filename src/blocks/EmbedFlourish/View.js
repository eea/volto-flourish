const View = (props) => {
  const flourish_url = props.data.flourish_item_url + '/@@flourish/index.html';
  return (
    <div className="embed-flourish">
      {props.data.flourish_item_url ? (
        <iframe
          src={flourish_url}
          width="100%"
          height={props.data.flourish_iframe_height}
          title="FlourishEmbed"
          style={{ border: '0px' }}
        ></iframe>
      ) : props.mode ? (
        <div>Embed flourish</div>
      ) : null}
    </div>
  );
};

export default View;
