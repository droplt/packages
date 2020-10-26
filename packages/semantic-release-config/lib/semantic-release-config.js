module.exports = {
  ci: true,
  debug: false,
  dryRun: false,
  branches: [
    // stable
    { name: 'master' },
    // rc
    { name: 'release', prerelease: 'rc' },
  ],
  plugins: [
    /**
     * analyze commits with conventional-changelog
     * ref: https://github.com/semantic-release/commit-analyzer#readme
     */
    ['@semantic-release/commit-analyzer', {
      preset: 'conventionalcommits',
      releaseRules: [
        { type: 'ci', release: 'patch' },
        { type: 'build', release: 'patch' },
      ],
    }],
    /**
     * generate changelog content with conventional-changelog
     * ref: https://github.com/semantic-release/release-notes-generator#readme
     */
    ['@semantic-release/release-notes-generator', {
      preset: 'conventionalcommits',
      presetConfig: {
        types: [
          { type: 'feat', section: 'Features', hidden: false },
          { type: 'feature', section: 'Features', hidden: false },
          { type: 'fix', section: 'Bug Fixes', hidden: false },
          { type: 'perf', section: 'Performance Improvements', hidden: false },
          { type: 'revert', section: 'Reverts', hidden: false },
          { type: 'docs', section: 'Documentation', hidden: false },
          { type: 'style', section: 'Styles', hidden: false },
          { type: 'refactor', section: 'Code Refactoring', hidden: false },
          { type: 'test', section: 'Tests', hidden: false },
          { type: 'build', section: 'Build System', hidden: true },
          { type: 'chore', section: 'Miscellaneous Chores', hidden: true },
          { type: 'ci', section: 'Continuous Integration', hidden: true },
        ],
      },
    }],
    /**
     * create or update a changelog file
     * ref: https://github.com/semantic-release/changelog#readme
     */
    ['@semantic-release/changelog', {
      changelogFile: 'CHANGELOG.md',
    }],
    /**
     * update package.json version
     * ref: https://github.com/semantic-release/npm#readme
     */
    ['@semantic-release/npm', {
      npmPublish: false,
    }],
    /**
     * publish a GitHub release and comment on released PR/Issues
     * ref: https://github.com/semantic-release/github#readme
     */
    ['@semantic-release/github', {
      assets: [
        { path: 'CHANGELOG.md', label: 'CHANGELOG.md' },
        { path: 'package.json', label: 'package.json' },
      ],
      successComment: false,
    }],
    /**
     * execute custom shell commands
     * ref: https://github.com/semantic-release/exec#readme
     */
    // ['@semantic-release/exec', {
    //   successCmd: 'slackmd',
    // }],
  ],
}
