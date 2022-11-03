import * as core from '@actions/core'
import * as github from '@actions/github'

async function run(): Promise<void> {
  core.notice(JSON.stringify(github.context))
}

run()
