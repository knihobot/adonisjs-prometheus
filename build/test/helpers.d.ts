import type { ApplicationService } from '@adonisjs/core/types';
import type { PrometheusConfig } from '../src/types.js';
export declare const BASE_URL: import("url").URL;
type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
export declare const DEFAULT_PROMETHEUS_CONFIG: PrometheusConfig;
export declare function setupApp(options?: {
    promConfig?: DeepPartial<PrometheusConfig>;
    preSetup?: (app: ApplicationService) => Promise<any>;
}): Promise<{
    app: ApplicationService;
    ignitor: import("@adonisjs/core").Ignitor;
    cleanup: () => void;
}>;
export {};
