#!/usr/bin/env node

console.log(`
  Available commit types (based on Conventional Commits):

  ------------------------------------------------------------
  feat      – a new feature
  fix       – a bug fix
  docs      – documentation only changes
  style     – formatting, missing semi colons, etc.
  refactor  – code change that neither fixes a bug nor adds a feature
  perf      – performance improvements
  test      – adding or correcting tests
  build     – changes that affect the build system or external dependencies
  ci        – changes to CI configuration files and scripts
  chore     – other changes that don't modify src or test files
  revert    – reverts a previous commit
  ------------------------------------------------------------
  Example: feat: add user login support
`);
