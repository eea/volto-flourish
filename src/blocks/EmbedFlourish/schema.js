import { defineMessages } from 'react-intl';

const messages = defineMessages({
  CSSHeight: {
    id: 'CSS height',
    defaultMessage: 'CSS height',
  },
  CSSFlourishHeightDescription: {
    id: 'Iframe height',
    defaultMessage: 'Flourish iframe height',
  },
});

const schema = (props) => {
  return {
    title: 'Embed Flourish',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: [
          'flourish_test_url',
          'flourish_item_url',
          'flourish_iframe_height',
          'with_sources',
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
      flourish_iframe_height: {
        title: (
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/height"
          >
            {props.intl.formatMessage(messages.CSSHeight)}
          </a>
        ),
        default: '600px',
        description: props.intl.formatMessage(
          messages.CSSFlourishHeightDescription,
        ),
      },
      with_sources: {
        title: 'Show sources',
        description: 'Will show sources set in this page Data provenance',
        type: 'boolean',
        defaultValue: true,
      },
    },

    required: ['flourish_item_url'],
  };
};

export default schema;
