// No network requests. Scan explicit public files before deploying.
import {readFileSync, statSync} from 'node:fs';
import {resolve} from 'node:path';
export function inspect(text) {
  const rules = [
    ['private-key', /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/],
    ['github-token', /\b(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,})\b/],
    ['aws-access-key', /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/],
    ['openai-key', /\bsk-(?:proj-|svcacct-)?[A-Za-z0-9_-]{30,}\b/],
    ['dangerous-code', /\b(?:eval|Function)\s*\(/],
    ['remote-script', /<script\b[^>]*\bsrc\s*=\s*["'](?:https?:)?\/\//i]
  ];
  return rules.filter(([,r])=>r.test(text)).map(([name])=>name);
}
if (process.argv[1] && resolve(process.argv[1]) === new URL(import.meta.url).pathname) {
  const files=process.argv.slice(2); let failed=false;
  if (!files.length) { console.error('Pass public text file paths.'); process.exit(2); }
  for (const file of files) {
    try {
      const stat=statSync(file);
      if (!stat.isFile() || stat.size>5_000_000) throw Error('unsupported size/type');
      const findings=inspect(readFileSync(file,'utf8'));
      if(findings.length){ console.error(`${file}: ${findings.join(', ')}`); failed=true; }
    } catch { console.error(`${file}: could not check`); failed=true; }
  }
  if(failed) process.exit(1);
  console.log('Checked specified files. No matching patterns. This is not a full secret or malware audit.');
}
