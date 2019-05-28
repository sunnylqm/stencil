import * as d from '../../declarations';
import { validateManifestJson } from '../html/validate-manifest-json';
import { validatePackageJson } from '../types/validate-package-json';


export async function validateFiles(config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx) {
  if (buildCtx.hasError) {
    return;
  }

  await Promise.all([
    validateManifestJson(config, compilerCtx, buildCtx),
    validatePackageJson(config, compilerCtx, buildCtx)
  ]);
}
