import type { ApplicationService } from '@adonisjs/core/types';
/**
 * Prometheus provider
 */
export default class PrometheusProvider {
    protected app: ApplicationService;
    constructor(app: ApplicationService);
    /**
     * Create route that will expose prometheus metrics
     */
    private exposeMetricsEndpoint;
    /**
     * Collect system metrics if enabled
     */
    private collectSystemMetrics;
    register(): void;
    shutdown(): Promise<void>;
}
