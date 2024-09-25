import { Counter, Gauge, Histogram } from 'prom-client';
export class Metrics {
    config;
    /**
     * Total time each HTTP request takes.
     */
    httpMetric;
    /**
     * Uptime performance of the application.
     */
    uptimeMetric;
    /**
     * No. of request handled.
     */
    throughputMetric;
    constructor(config) {
        this.config = config;
        if (config.httpMetric.enabled) {
            this.httpMetric = new Histogram(config.httpMetric);
        }
        if (config.uptimeMetric.enabled) {
            this.uptimeMetric = new Gauge(config.uptimeMetric);
        }
        if (config.throughputMetric.enabled) {
            this.throughputMetric = new Counter(config.throughputMetric);
        }
    }
}
