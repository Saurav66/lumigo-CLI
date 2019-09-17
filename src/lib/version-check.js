const childProcess = require("child_process");
const semver = require("semver");

const checkVersion = async () => {
	const packageJson = require("../../package.json");
	const version = packageJson.version;
	const npmVersion = childProcess.execSync("npm show lumigo-cli version").toString().trim();
  
	if (semver.gt(npmVersion, version)) {
		console.log(""`
===============================================================
A new version of lumigo-cli is available on NPM: v${npmVersion}!

Please run "npm i -g lumigo-cli" to update :-)
===============================================================
    ```);
	}
};

module.exports = {
	checkVersion
};