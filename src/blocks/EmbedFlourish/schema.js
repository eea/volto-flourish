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
        fields: ['flourish_item_url', 'flourish_iframe_height'],
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
        description: props.intl.formatMessage(
          messages.CSSFlourishHeightDescription,
        ),
      },
    },

    required: ['flourish_item_url'],
  };
};

export default schema;
