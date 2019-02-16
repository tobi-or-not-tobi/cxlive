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

**code** https://stackblitz.com/github/tobi-or-not-tobi/cxlive/tree/cx-storefront

**video** https://enable.cx.sap.com/media/Spartacus+Extensibility+Live+Coding++Part+1A+Setup+-+SAP+Commerce+Cloud/1_qry4lath

## Demo 2: Runtime theming
This demonstrates the ability to add runtime (CSS variables) theme configurations. Althoug we demonstrate this at build time, those css variables are runtime configurable, opening a new world of configurable styling. 
1. Add custom css variables to styles.scss
2. Add css variables to specific elements or components (i.e. y-add-to-cart)

**code** https://stackblitz.com/github/tobi-or-not-tobi/cxlive/tree/runtime-theming

**video** https://enable.cx.sap.com/media/Spartacus+Extensibility+Live+Coding+Part+2A+Lipstick+Styling+-+SAP+Commerce+Cloud/1_suq4fmge

## Demo 3: Replace component
This demonstrates the ability to replace a component, using so-called outlets. We intend to have outlets for pages, page templates, CMS slots, component (types) or any fragments that we've marked as an outlet. In this we override the search for mobile users, and replace it with a search-as-you-speak capability.

1. Override the SearchBoxComponent using an ng-template
2. Implement a custom search component
3. Add the custom search component in the template

**note:** the search box component will have an input feed the input directly into the search listing page. Since we don't have that today, we've add custom logic to navigate ourselfs to the search result page. 

**code** https://stackblitz.com/github/tobi-or-not-tobi/cxlive/tree/custom-search

**video** https://enable.cx.sap.com/media/Spartacus+Extensibility+Live+Coding+Part+3A+Speech-to-search+-+SAP+Commerce+Cloud/1_4wov6bb0

## Demo 4: Override and leverage ctx data
This demonstrates an pdp image outlet that uses the data provided from the context. This means our customisation doesn't need to do the hard lifting to load data from OCC direcly (or use our ngrx store), it's available right away. 

1. Introduce type-safe outlet references (`ProductDetailOutlets` or `ProductDetailsComponent.outlets`)
2. Create an `ng-template` and register it to the `IMAGES` outlet
3. Add a context attribute to the template (i.e. `let-model`
4. Use the context attribute inside the template (i.e. `{{model | json}}`

In order to see the demo, launch a PDP page (i.e. 1382080). The image section is been override.

**code** https://stackblitz.com/github/tobi-or-not-tobi/cxlive/tree/outlet-with-context

**video** https://enable.cx.sap.com/media/Spartacus+Extensibility+Live+Coding+Part+4A+Component+Context+-+SAP+Commerce+Cloud/1_0zy91r1g

## Demo 5: Webcomponents
This demonstration shows that we can add a conmponent written in non-angular frameworks (i.e. vuejs, polymer, react). This allows devs to pick the tech of choice. There are a number of [caveats to the use web components (aka custom elements)](https://caniuse.com/#search=custom%20elements%20v1) (despite the fact that firebix supports it since their latest release 🎉)

We've chosen an existing web component and aren't interested in the tech it was created with. We're extending demo 4 with a panzoom capability for the selected image. 

1. Use the same template we used in demo 4 (but use thumbnails here)
2. Introduce an click event on the thumbnail to select the image
3. Prepare the angular module to support custom elements (adding CUSTOM_ELEMENTS_SCHEMA to the module's schema's)
4. Load an external web component (conditionally to demonstrate lazy loading of the web component)
5. Use the web component and use the `src` input to hand over the large image URL
6. (bonus, but cool) We're handing over our primary color (`--y-primary`) to the web components `--img-pan-zoom-spinner-color`, to ensure the same color is used in the loading spiner. This is the power of CSS variables who pierce through the shadow DOM!

**code** https://stackblitz.com/github/tobi-or-not-tobi/cxlive/tree/product-image-zoom

**video** https://enable.cx.sap.com/media/Spartacus+Extensibility+Live+Coding+Part+5A+Web+Components+-+SAP+Commerce+Cloud/1_kwff10lp
