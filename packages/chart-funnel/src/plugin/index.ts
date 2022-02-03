import { ChartMetadata, ChartPlugin, t } from "@superset-ui/core";

import example from "../images/example.png";
import thumbnail from "../images/thumbnail.png";
import buildQuery from "./build-query";
import controlPanel from "./control-panel";
import transformProperties from "./transform-properties";

export class FunnelChartPlugin extends ChartPlugin {
  constructor() {
    const metadata = new ChartMetadata({
      description: "A plugin to visualize a funnel",
      name: t("Ant Funnel"),
      thumbnail,
      exampleGallery: [{ url: example, caption: t("Funnel") }],
    });

    super({
      buildQuery,
      controlPanel,
      loadChart: () => import("../funnel"),
      metadata,
      transformProps: transformProperties,
    });
  }
}
