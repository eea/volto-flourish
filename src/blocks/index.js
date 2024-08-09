import { uniqBy } from 'lodash';
import installEmbedFlourishVisualization from './EmbedFlourish';

const config = (config) => {
  config.blocks.groupBlocksOrder = uniqBy(
    [
      ...config.blocks.groupBlocksOrder,
      { id: 'flourish_visualizations', title: 'Flourish Visualizations' },
    ],
    'id',
  );

  return [installEmbedFlourishVisualization].reduce(
    (acc, apply) => apply(acc),
    config,
  );
};

export default config;
