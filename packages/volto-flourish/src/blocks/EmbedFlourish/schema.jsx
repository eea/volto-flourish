// import { defineMessages } from 'react-intl';
// const messages = defineMessages({
//   CSSHeight: {
//     id: 'CSS height',
//     defaultMessage: 'CSS height',
//   },
//   CSSFlourishHeightDescription: {
//     id: 'Iframe height',
//     defaultMessage: 'Flourish iframe height',
//   },
// });

const schema = (props) => {
  return {
    title: 'Embed Flourish',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: [
          'flourish_item_url',
          // 'flourish_iframe_height',
        ],
      },
      {
        id: 'toolbar',
        title: 'Toolbar',
        fields: [
          'with_sources',
          'with_notes',
          'with_more_info',
          // 'with_download',
          'with_share',
          'with_enlarge',
        ],
      },
    ],
    properties: {
      flourish_item_url: {
        title: 'Fourish item',
        widget: 'internal_url',
        description: (
          <div>
            <p>An item that has loaded a Flourish visualization.</p>
          </div>
        ),
      },
      // flourish_iframe_height: {
      //   title: (
      //     <a
      //       rel="noopener noreferrer"
      //       target="_blank"
      //       href="https://developer.mozilla.org/en-US/docs/Web/CSS/height"
      //     >
      //       {props.intl.formatMessage(messages.CSSHeight)}
      //     </a>
      //   ),
      //   default: '600px',
      //   description: props.intl.formatMessage(
      //     messages.CSSFlourishHeightDescription,
      //   ),
      // },
      with_notes: {
        title: 'Show note',
        type: 'boolean',
        default: true,
      },
      with_sources: {
        title: 'Show sources',
        description: 'Will show sources set in this page Data provenance',
        type: 'boolean',
        default: true,
      },
      with_more_info: {
        title: 'Show more info',
        type: 'boolean',
        default: true,
      },
      with_enlarge: {
        title: 'Show enlarge button',
        type: 'boolean',
        default: true,
      },
      // with_download: {
      //   title: 'Show download button',
      //   type: 'boolean',
      //   default: true,
      // },
      with_share: {
        title: 'Show share button',
        type: 'boolean',
        default: true,
      },
    },

    required: ['flourish_item_url'],
  };
};

export default schema;
