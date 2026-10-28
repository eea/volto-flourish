import EmbedFlourishVisualizatonEdit from './Edit';
import EmbedFlourishVisualizatonView from './View';

import sliderSVG from '@plone/volto/icons/slider.svg';

const config = (config) => {
  config.blocks.blocksConfig.embed_flourish_visualization = {
    id: 'embed_flourish_visualization',
    title: 'Embed Flourish',
    icon: sliderSVG,
    group: 'data_visualizations',
    edit: EmbedFlourishVisualizatonEdit,
    view: EmbedFlourishVisualizatonView,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    blocks: {},
    security: {
      addPermission: [],
      view: [],
    },
  };

  return config;
};

export default config;
