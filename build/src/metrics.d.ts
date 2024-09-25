import { Counter, Gauge, Histogram } from 'prom-client';
import type { PrometheusConfig } from './types.js';
export declare class Metrics {
    protected config: PrometheusConfig;
    /**
     * Total time each HTTP request takes.
     */
    httpMetric: Histogram<string> | undefined;
    /**
     * Uptime performance of the application.
     */
    uptimeMetric: Gauge<string> | undefined;
    /**
     * No. of request handled.
     */
    throughputMetric: Counter<string> | undefined;
    constructor(config: PrometheusConfig);
}
