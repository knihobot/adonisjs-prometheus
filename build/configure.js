import { stubsRoot } from './stubs/index.js';
/**
 * Configures the package
 */
export async function configure(command) {
    const codemods = await command.createCodemods();
    /**
     * Publish config file
     */
    await codemods.makeUsingStub(stubsRoot, 'prometheus/config.stub', {});
    /**
     * Add provider to the rc file
     */
    await codemods.updateRcFile((rcFile) => {
        rcFile.addProvider('@julr/adonisjs-prometheus/prometheus_provider');
    });
}
