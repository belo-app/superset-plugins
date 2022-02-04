import { ChartProps } from "@superset-ui/core";
export default function transformProperties(chartProperties: ChartProps): {
    width: number;
    height: number;
    metricName: string;
    groupbyLabel: any;
    retdata: {
        stage: any;
        number: any;
    }[];
    rateCalculation: any;
};
