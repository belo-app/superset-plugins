export interface FunnelStylesProperties {
    height: number;
    width: number;
}
export declare type FunnelProperties = FunnelStylesProperties & {
    groupbyLabel: string[];
    metricName: string;
    retdata: any;
    rateCalculation: boolean;
};
