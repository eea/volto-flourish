import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
// import { Sources } from '@eeacms/volto-embed/Toolbar';

import {
  FigureNote,
  Sources,
  MoreInfo,
  Share,
  Enlarge,
} from '@eeacms/volto-embed/Toolbar';

export default function View(props) {
  const { id, data } = props;

  const {
    with_sources,
    flourish_item_url,
    flourish_iframe_height = '600px',
  } = data;

  const flourish_url = flourish_item_url + '/@@flourish/index.html';
  const vis_url = flattenToAppURL(flourish_item_url || '');
  const dispatch = useDispatch();

  const flourishItemContent = useSelector(
    (state) => state.content?.subrequests?.[id]?.data,
  );
  console.log('flourishItemContent', flourishItemContent, with_sources, id);
  console.log('props', props);
  console.log('data', data);
  console.log("data['@id']", data['@id']);

  useEffect(() => {
    if (vis_url) {
      const action = getContent(vis_url, null, id);
      dispatch(action);
    }
  }, [dispatch, vis_url, id]);

  const with_notes = false;
  const loaded = true;
  const with_download = false;
  const with_share = true;
  const with_enlarge = false;
  const with_more_info = false;

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
          <div className="visualization-toolbar">
            <div className="left-col">
              {with_notes && <FigureNote notes={figure_note || []} />}
              {with_sources && (
                <Sources
                  sources={flourishItemContent?.data_provenance?.data || []}
                />
              )}
              {with_more_info && <MoreInfo href={data['@id']} />}
            </div>
            <div className="right-col">
              {with_download && loaded && <Download viz={viz.current} />}
              {with_share && loaded && (
                <Share href={props?.properties['@id']} />
              )}
              {with_enlarge && loaded && (
                <Enlarge>
                  <Tableau
                    {...props}
                    data={{
                      ...props.data,
                      with_notes: false,
                      with_sources: false,
                      with_more_info: false,
                      with_enlarge: false,
                      with_share: false,
                      with_download: false,
                    }}
                  />
                </Enlarge>
              )}
            </div>
          </div>
        </div>
      ) : props.mode ? (
        <div>Embed flourish</div>
      ) : null}
    </div>
  );
}
