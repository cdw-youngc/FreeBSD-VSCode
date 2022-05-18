--- build/npm/postinstall.js.orig	2022-04-11 07:30:00 UTC
+++ build/npm/postinstall.js
@@ -20,7 +20,8 @@ function yarnInstall(location, opts) {
 	const raw = process.env['npm_config_argv'] || '{}';
 	const argv = JSON.parse(raw);
 	const original = argv.original || [];
-	const args = original.filter(arg => arg === '--ignore-optional' || arg === '--frozen-lockfile' || arg === '--check-files');
+	const passargs = ['--ignore-optional', '--frozen-lockfile', '--check-files', '--offline', '--no-progress', '--verbose'];
+	const args = original.filter(arg => passargs.includes(arg));
 	if (opts.ignoreEngines) {
 		args.push('--ignore-engines');
 		delete opts.ignoreEngines;
@@ -91,5 +92,5 @@ runtime "${runtime}"`;
 	yarnInstall(watchPath);
 }
 
-cp.execSync('git config pull.rebase merges');
-cp.execSync('git config blame.ignoreRevsFile .git-blame-ignore');
+// cp.execSync('git config pull.rebase merges');
+// cp.execSync('git config blame.ignoreRevsFile .git-blame-ignore');
