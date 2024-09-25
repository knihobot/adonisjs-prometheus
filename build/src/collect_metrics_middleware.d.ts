import type { HttpContext } from '@adonisjs/core/http';
import type { NextFn } from '@adonisjs/core/types/http';
import type { Metrics } from './metrics.js';
import type { PrometheusConfig } from './types.js';
export default class CollectMetricsMiddleware {
    #private;
    protected metrics: Metrics;
    protected config: PrometheusConfig;
    constructor(metrics: Metrics, config: PrometheusConfig);
    handle(ctx: HttpContext, next: NextFn): Promise<void>;
}
