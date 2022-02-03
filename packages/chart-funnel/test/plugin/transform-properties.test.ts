import { ChartProps } from "@superset-ui/core";

import transformProperties from "../../src/plugin/transform-properties";

describe("Funnel tranformProps", () => {
  const formData = {
    colorScheme: "bnbColors",
    datasource: "3__table",
    granularity_sqla: "ds",
    metric: "sum__num",
    groupby: ["event_name"],
    rateCalculation: false,
  };
  const chartProperties = new ChartProps({
    formData,
    width: 800,
    height: 600,
    queriesData: [
      {
        data: [
          { event_name: "finish", sum__num: 35_123 },
          { event_name: "start", sum__num: 45_219 },
        ],
      },
    ],
  });

  it("should tranform chart props for viz", () => {
    expect(transformProperties(chartProperties)).toEqual({
      width: 800,
      height: 600,
      metricName: "sum__num",
      groupbyLabel: "event_name",
      retdata: [
        { stage: "start", number: 45_219 },
        { stage: "finish", number: 35_123 },
      ],
      rateCalculation: false,
    });
  });
});
