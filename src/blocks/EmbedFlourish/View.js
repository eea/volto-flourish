import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import { default as Flourish } from '@eeacms/volto-flourish/components/Flourish';
import { v4 as uuid } from 'uuid';
// import { Sources } from '@eeacms/volto-embed/Toolbar';

import {
  FigureNote,
  Sources,
  MoreInfo,
  Share,
  Enlarge,
} from '@eeacms/volto-embed/Toolbar';

// const overlayStyles = {
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   width: '100%',
//   backgroundColor: 'rgba(255, 255, 255, 0)',
//   zIndex: 20000,
//   pointerEvents: 'none',
//   height: '100%',
// };

export default function View(props) {
  const {
    id,
    data,
    // mode = 'view'
  } = props;
  const uid = useMemo(() => uuid(), []);

  const {
    with_sources,
    // with_download,
    with_notes,
    with_share,
    with_enlarge,
    with_more_info,
    flourish_item_url,
    // flourish_iframe_height = '600px',
  } = data;

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

  // const editOverlay =
  //   mode === 'edit' ? (
  //     <div className="edit-overlay" style={overlayStyles} />
  //   ) : null;

  return (
    <div className="embed-flourish">
      {flourish_item_url ? (
        <>
          <Flourish baseUrl={flourish_item_url} key={uid} id={uid} />
          {/* {editOverlay} */}

          {flourishItemContent && (
            <div className="visualization-toolbar">
              <div className="left-col">
                {with_notes && (
                  <FigureNote notes={flourishItemContent?.figure_note || []} />
                )}
                {flourishItemContent && with_sources && (
                  <Sources
                    sources={flourishItemContent?.data_provenance?.data || []}
                  />
                )}
                {with_more_info && (
                  <MoreInfo href={flourishItemContent['@id']} />
                )}
              </div>
              <div className="right-col">
                {with_share && <Share href={flourishItemContent['@id']} />}
                {with_enlarge && (
                  <Enlarge>
                    <View
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
          )}
        </>
      ) : props.mode ? (
        <div>Embed flourish</div>
      ) : null}
    </div>
  );
}
