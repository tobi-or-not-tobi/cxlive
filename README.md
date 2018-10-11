# CX Live

This repository demonstrates some customisations on top of [Spartacus](https://github.com/SAP/cloud-commerce-spartacus-storefront). You can clone the repo and build, but the different branches can also be run in stackblitz.

## Demo 1: Getting started
The getting started demo shows:
1. pull in dependencies
2. include the `StorefrontModule`
3. Configure backend URL (OCC)
4. Add the root storefront component
5. Import the styles

**Note:** bootstrap is unfortunately published with a (peer)dependency to jquery, but we're not using it!

https://stackblitz.com/github/tobi-or-not-tobi/cxlive/tree/cx-storefront

## Demo 2: Runtime theming
This demonstrates the ability to add runtime (CSS variables) theme configurations. Althoug we demonstrate this at build time, those css variables are runtime configurable, opening a new world of configurable styling. 
1. Add custom css variables to styles.scss
2. Add css variables to specific elements or components (i.e. y-add-to-cart)

https://stackblitz.com/github/tobi-or-not-tobi/cxlive/tree/runtime-theming
