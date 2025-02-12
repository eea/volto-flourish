const style = {
  border: '0px',
  height: '100%',
};

export default function Flourish({ baseUrl }) {
  const flourish_url = baseUrl + '/@@flourish/index.html';
  const script_url = `${baseUrl}/@@flourish/flourish.embed.js`;
  return (
    <div className="flourish-embed" data-src={flourish_url}>
      <script src={script_url}></script>
      <script>console.log(1111)</script>
    </div>
  );
}
