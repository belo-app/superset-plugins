import { Funnel as AntvFunnel } from "@ant-design/plots";
import { styled } from "@superset-ui/core";
import React, { createRef } from "react";

import { FunnelProperties, FunnelStylesProperties } from "./types";
const Styles = styled.div<FunnelStylesProperties>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

export default function Funnel(properties: FunnelProperties) {
  const { width, height, retdata, rateCalculation } = properties;

  const rootElement = createRef<HTMLDivElement>();

  const config = {
    data: retdata,
    xField: "stage",
    yField: "number",
    label: { formatter: (datum: any) => datum["stage"] },
    conversionTag: rateCalculation
      ? {
          formatter: (datum: any, data: any) =>
            "Rate: " + ((datum["number"] * 100) / data[0]["number"]).toFixed(2),
        }
      : {},
  };

  return (
    <Styles ref={rootElement} height={height} width={width}>
      <AntvFunnel legend={false} {...config} />
    </Styles>
  );
}
