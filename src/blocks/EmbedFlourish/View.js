import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Sources } from '@eeacms/volto-embed/Toolbar';

export default function View(props) {
  const { id, data } = props;

  const {
    with_sources = false,
    flourish_item_url,
    flourish_iframe_height = '600px',
  } = data;

  const flourish_url = flourish_item_url + '/@@flourish/index.html';
  const vis_url = flattenToAppURL(flourish_item_url || '');
  const dispatch = useDispatch();

  const flourishItemContent = useSelector(
    (state) => state.content?.subrequests?.[id]?.data,
  );

  useEffect(() => {
    if (vis_url) {
      const action = getContent(vis_url, null, id);
      dispatch(action);
    }
  }, [dispatch, vis_url, id]);

  return (
    <div className="embed-flourish">
      {flourish_item_url ? (
        <div>
          <iframe
            src={flourish_url}
            width="100%"
            title={flourishItemContent?.title}
            style={{
              border: '0px',
              height: flourish_iframe_height,
            }}
          ></iframe>
          {with_sources && flourishItemContent?.data_provenance?.data && (
            <Sources
              sources={flourishItemContent?.data_provenance?.data || []}
            />
          )}
        </div>
      ) : props.mode ? (
        <div>Embed flourish</div>
      ) : null}
    </div>
  );
}
