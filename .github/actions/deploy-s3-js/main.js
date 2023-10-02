const github = require('@actions/github');
const core = require('@actions/core');
const exec = require('@actions/exec');

function run() {
    core.notice('Hello for JS custom action!');
};

run();