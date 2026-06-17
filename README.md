# NeoResQ

Public website for NeoResQ, presenting the patented UMP-123 neonatal resuscitation device.

## Stack

Static site built with [Lume](https://lume.land) (Deno) and Tailwind CSS.

## Developing

```
deno task serve
```

## Building

```
deno task build
```

Outputs to `_site/`.

## Deploying

Pushes to `main` build and deploy automatically to GitHub Pages via `.github/workflows/deploy.yml`.
