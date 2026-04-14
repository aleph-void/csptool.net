# CSP Tool

**CSP Tool** is an open-source browser extension for inspecting, editing, and overriding Content Security Policies in real time. Available for Chrome and Firefox.

Website: [https://csptool.net](https://csptool.net)

## Features

- **Live CSP Inspection** — Instantly view the active Content Security Policy from HTTP headers or meta tags on any page.
- **Visual Editor** — Add, edit, toggle, and remove directives using a clean visual interface. No more hand-editing raw header strings.
- **Header Override** — Replace server-sent CSP headers entirely using the `declarativeNetRequest` API for full control to tighten or loosen any policy.
- **Violation Tracking** — Monitor CSP violations as they happen. See the blocked resource, violated directive, and timestamps in real time.
- **Multiple Configurations** — Save and switch between named CSP configurations with URL patterns so the right policy applies to the right environment.
- **15 Languages** — Full internationalization with support for English, Chinese, Spanish, German, French, Italian, Portuguese, Japanese, Korean, Russian, Polish, Arabic, Filipino, Hebrew, and Hindi.

## How It Works

CSP Tool offers two modes for applying policy changes:

### Mode 1: Meta Tag Mode (Default)

Injects or modifies a `<meta>` tag in the page DOM to apply your policy changes.

- No page reload required
- Great for loosening policies during development
- Cannot tighten policies already set by HTTP headers

### Mode 2: Header Override Mode (Advanced)

Intercepts and replaces the actual HTTP `Content-Security-Policy` response header before the browser processes it.

- Full control — tighten or loosen any policy
- Can inject CSP on pages with no existing policy
- Requires a page reload after changes

### Typical Workflow

1. **Inspect** — Open the extension popup to see the active CSP on the current page.
2. **Edit** — Add, modify, or toggle directives using the visual editor.
3. **Apply** — Click Apply to push the new policy to the page instantly.
4. **Debug** — Check the Errors tab for violations and iterate until clean.

## Editor

The editor supports all 28 CSP directives from the specification:

- **Fetch directives** — `default-src`, `script-src`, `style-src`, `img-src`, `font-src`, `connect-src`, `media-src`, `object-src`, `frame-src`, `child-src`, `worker-src`, `manifest-src`
- **Document directives** — `base-uri`, `sandbox`
- **Navigation directives** — `form-action`, `frame-ancestors`, `navigate-to`
- **Reporting** — `report-uri`, `report-to`

Each directive can be toggled on/off without losing its value, or deleted entirely. The **Reset** button restores the original policy from the page.

## Configurations & URL Patterns

Create multiple named configurations and assign URL patterns (glob syntax) to each:

```
https://example.com/*
https://*.staging.example.com/*
*://localhost:3000/*
```

CSP Tool automatically activates the matching configuration based on the current page URL.

## Violation Tracking

The **Errors** tab captures `securitypolicyviolation` events in real time. Each violation shows:

- Error message
- Violated directive
- Blocked URI
- Timestamp

## Installation

Install for free from your browser's extension store:

- **Chrome** — Chrome Web Store
- **Firefox** — Firefox Add-ons

## Tech Stack

Built with Vue 3, TypeScript, and Tailwind CSS.

## License

Open source. Contributions and bug reports are welcome on [GitHub](https://github.com/alephvoid/csptool-web).

Created by [Aleph Void LLC](https://alephvoid.com). &copy; 2026 CSP Tool.
