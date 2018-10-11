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

## Demo 3: Replace component
This demonstrates the ability to replace a component, using so-called outlets. We intend to have outlets for pages, page templates, CMS slots, component (types) or any fragments that we've marked as an outlet. In this we override the search for mobile users, and replace it with a search-as-you-speak capability.

1. Override the SearchBoxComponent using an ng-template
2. Implement a custom search component
3. Add the custom search component in the template

**note:** the search box component will have an input feed the input directly into the search listing page. Since we don't have that today, we've add custom logic to navigate ourselfs to the search result page. 

https://stackblitz.com/github/tobi-or-not-tobi/cxlive/tree/custom-search

## Demo 4: Override and leverage ctx data
This demonstrates an pdp image outlet that uses the data provided from the context. This means our customisation doesn't need to do the hard lifting to load data from OCC direcly (or use our ngrx store), it's available right away. 

1. Introduce type-safe outlet references (`ProductDetailOutlets` or `ProductDetailsComponent.outlets`)
2. Create an `ng-template` and register it to the `IMAGES` outlet
3. Add a context attribute to the template (i.e. `let-model`
4. Use the context attribute inside the template (i.e. `{{model | json}}`

In order to see the demo, launch a PDP page (i.e. 1382080). The image section is been override.

https://stackblitz.com/github/tobi-or-not-tobi/cxlive/tree/outlet-with-context
