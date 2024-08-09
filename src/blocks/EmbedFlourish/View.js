const View = (props) => {
  const flourish_url = props.data.flourish_item_url + '/@@flourish/index.html';
  return (
    <div className="embed-flourish">
      <iframe
        src={flourish_url}
        height="400"
        width="100%"
        title="Iframe Example"
      ></iframe>
    </div>
  );
};

export default View;
