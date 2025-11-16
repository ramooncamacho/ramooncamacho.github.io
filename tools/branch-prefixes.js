#!/usr/bin/env node

console.log(`
  Available branch name prefixes and their usage:

  ------------------------------------------------------------
  Prefix          | Purpose / When to Use
  ------------------------------------------------------------
  feature/        | Used for new features, enhancements, or improvements.
                  | Example: feature/add-login-page

  fix/            | Used for bug fixes or small corrections.
                  | Example: fix/missing-env-variable

  hotfix/         | Used for urgent fixes applied directly to production.
                  | Example: hotfix/fix-404-error

  chore/          | Used for maintenance tasks or general cleanup (no code logic change).
                  | Example: chore/update-dependencies

  refactor/       | Used for restructuring or improving code without changing its behavior.
                  | Example: refactor/auth-module

  docs/           | Used for documentation changes or improvements.
                  | Example: docs/update-readme

  test/           | Used for adding or updating automated tests.
                  | Example: test/add-api-tests

  release/        | Used to prepare a new release version.
                  | Example: release/v1.3.0

  ci/             | Used for continuous integration, pipeline, or automation scripts.
                  | Example: ci/update-workflow

  perf/           | Used for performance improvements.
                  | Example: perf/optimize-db-query

  style/          | Used for formatting, indentation, or code style adjustments.
                  | Example: style/fix-lint-issues
  ------------------------------------------------------------
  `);
