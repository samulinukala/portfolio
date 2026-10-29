import CJS_COMPAT_NODE_URL_46ljd37t7s8 from 'node:url';
import CJS_COMPAT_NODE_PATH_46ljd37t7s8 from 'node:path';
import CJS_COMPAT_NODE_MODULE_46ljd37t7s8 from "node:module";

var __filename = CJS_COMPAT_NODE_URL_46ljd37t7s8.fileURLToPath(import.meta.url);
var __dirname = CJS_COMPAT_NODE_PATH_46ljd37t7s8.dirname(__filename);
var require = CJS_COMPAT_NODE_MODULE_46ljd37t7s8.createRequire(import.meta.url);

// ------------------------------------------------------------
// end of CJS compatibility banner, injected by Storybook's esbuild configuration
// ------------------------------------------------------------
import {
  batchTestsRule,
  buildPortalStep,
  buildSharedPreviewStep,
  cleanupStep,
  cssCheckDOD,
  discoveryStepRelaxed,
  editOverWriteRule,
  ext,
  interactionPlayStep,
  listDOD,
  listRules,
  listSteps,
  monorepoRule,
  monorepoStep,
  mswStep,
  noPolishRule,
  nodeModuleReadsRule,
  packageManagerRule,
  preferSharedFixesRule,
  readBudgetRuleRelaxed,
  sharedPreviewDOD,
  storyTagsV2DOD,
  toolsVsShellRule,
  typeCheckPassesWhenExpectedDOD,
  verifyWithAllowedFailureStep,
  vitestPassesWhenExpectedDOD,
  writeStoriesWithAllowedFailuresStep
} from "./chunk-WOBU6PQT.js";
import {
  getDocsMarkdownUrl
} from "./chunk-K3EMEYSH.js";
import {
  require_dist
} from "./chunk-4TDJMHK7.js";
import {
  __toESM
} from "./chunk-F3OLTPHI.js";

// src/cli/skills/content/setup-prompts/monorepo-optimized-tests-relaxed-limits-no-story-deletion.ts
var import_ts_dedent = __toESM(require_dist(), 1);
function instructions(projectInfo) {
  let { configDir, language, needsUserOnboarding, packageManager, packageManagerName } = projectInfo, tsx = ext(language, !0), ts = ext(language, !1), docsUrl = (path) => getDocsMarkdownUrl(path, projectInfo), mswInstall = packageManager.getInstallCommand(["msw", "mockdate"], !0), ctx = {
    configDir,
    docsUrl,
    mswInstall,
    needsUserOnboarding,
    packageManager,
    packageManagerName,
    tsx,
    ts
  };
  return import_ts_dedent.dedent`
    Your goal is to make Storybook fully functional in this project: configure \`${configDir}/preview.${tsx}\` with the right decorators, add MSW for data, and write up to 10 colocated \`*.stories.${tsx}\` files. Add \`play\` functions only where they prove something non-trivial.

    ## Rules of engagement (follow strictly — these are time budgets, not suggestions)

    ${listRules([
    toolsVsShellRule(ctx),
    nodeModuleReadsRule(ctx),
    monorepoRule(projectInfo),
    readBudgetRuleRelaxed(ctx),
    editOverWriteRule(ctx),
    batchTestsRule(ctx),
    packageManagerRule(ctx),
    preferSharedFixesRule(ctx),
    noPolishRule(ctx)
  ])}

    ## Plan (do not skip steps, but keep each step lean)

    ${listSteps(
    [
      discoveryStepRelaxed(projectInfo, ctx),
      monorepoStep(projectInfo, ctx),
      buildSharedPreviewStep(projectInfo, ctx),
      buildPortalStep(projectInfo, ctx),
      mswStep(projectInfo, ctx),
      writeStoriesWithAllowedFailuresStep(projectInfo, ctx),
      interactionPlayStep(projectInfo, ctx),
      verifyWithAllowedFailureStep(projectInfo, ctx),
      cleanupStep(projectInfo, ctx)
    ],
    { level: 3 }
  )}

    ## Done when

    ${listDOD([
    cssCheckDOD(ctx),
    storyTagsV2DOD(ctx),
    vitestPassesWhenExpectedDOD(ctx),
    typeCheckPassesWhenExpectedDOD(ctx),
    sharedPreviewDOD(ctx)
  ])}

    ## Reference (only fetch if stuck)

    - Docs index: https://storybook.js.org/llms.txt
    - Writing stories: ${docsUrl("writing-stories")}
    - Decorators: ${docsUrl("writing-stories/decorators")}
    - Play functions: ${docsUrl("writing-stories/play-function")}
    - Vitest integration: ${docsUrl("writing-tests/vitest-plugin")}

    Append \`?codeOnly=true\` to any docs URL for code-only snippets. Don't fetch unless a specific question can't be answered from this prompt.
  `;
}
export {
  instructions
};
