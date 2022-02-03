import { ControlPanelConfig, sections } from "@superset-ui/chart-controls";
import { t } from "@superset-ui/core";

const config: ControlPanelConfig = {
  controlPanelSections: [
    sections.legacyRegularTime,
    {
      label: t("Query"),
      expanded: true,
      controlSetRows: [
        ["groupby"],
        ["metric"],
        ["adhoc_filters"],
        [
          {
            name: "rate_calculation",
            config: {
              type: "SelectControl",
              label: t("Rate calcultarion"),
              default: true,
              renderTrigger: true,
              choices: [
                [true, "Against first valie"],
                [false, "Against previous value"],
              ],
              description: t("How we should calculate the rate?"),
            },
          },
        ],
      ],
    },
  ],
};

export default config;
