/**
 *
 * Obsolete browser check.
 *
 * Mostly copied from: https://github.com/browserslist/browserslist-useragent
 *
 */
import { Browser, detect } from 'detect-browser';

type BrowserslistBrowser =
  | 'and_chr'
  | 'chrome'
  | 'edge'
  | 'firefox'
  | 'ios_saf'
  | 'opera'
  | 'safari'
  | 'samsung';

const browserslistBrowserNames: { [key in BrowserslistBrowser]: 1 } = {
  and_chr: 1,
  chrome: 1,
  edge: 1,
  firefox: 1,
  ios_saf: 1,
  opera: 1,
  safari: 1,
  samsung: 1,
};

function toBrowserslistBrowserName(
  name: 'bot' | Browser | 'node' | 'react-native' | null | undefined,
): BrowserslistBrowser | null {
  let normalized: BrowserslistBrowser | null = name as any;

  if (name === 'ios' || name === 'ios-webview') {
    normalized = 'ios_saf';
  }

  if (name === 'edge-chromium' || name === 'edge-ios') {
    normalized = 'edge';
  }

  if (name === 'crios' || name === 'chromium-webview') {
    normalized = 'chrome';
  }

  for (const browserslistBrowserName of Object.keys(
    browserslistBrowserNames,
  ) as BrowserslistBrowser[]) {
    if (normalized === browserslistBrowserName) {
      return normalized;
    }
  }
  return null;
}

function isEqualOrNewerVersion(ver: string, base: string): boolean {
  return ver.localeCompare(base, undefined, { numeric: true, sensitivity: 'base' }) >= 0;
}

(function check() {
  const testVers: Record<string, string[]> = {};
  for (const supported of SUPPORTED_BROWSERS) {
    const [supportedBrowser, supVer] = supported.split(' ');
    const [_, supVerLatest] = supVer.split('-');
    if (!testVers[supportedBrowser]) testVers[supportedBrowser] = [];
    if (supVerLatest) {
      // add only the latest version if available
      testVers[supportedBrowser].push(supVerLatest);
    } else {
      testVers[supportedBrowser].push(supVer);
    }
  }

  const browser = detect();
  const browserslistBrowserName = toBrowserslistBrowserName(browser?.name);
  for (const [supportedBrowser, supportedVersion] of Object.entries(testVers)) {
    for (const supVer of Object.values(supportedVersion)) {
      if (
        browser?.version &&
        browserslistBrowserName === supportedBrowser &&
        isEqualOrNewerVersion(browser.version, supVer)
      ) {
        // supported
        return;
      }
    }
  }

  if (!location.search.includes('ignoreBrowserNotSupported=true')) {
    location.replace('/browser-not-supported.html');
  }
})();
