export interface FunnelStylesProperties {
  height: number;
  width: number;
}

export type FunnelProperties = FunnelStylesProperties & {
  groupbyLabel: string[];
  metricName: string;
  retdata: any;
  rateCalculation: boolean;
};
