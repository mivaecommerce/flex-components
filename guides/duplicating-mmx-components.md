## Duplicating MMX Components

This repo shows how to duplicate an existing Flex Component so it can be customized with your own desired functionality.

## Process

[TLDR: Here's a diff of the following process](https://github.com/mivaecommerce/flex-components/compare/9787c62...3e4ee8b?diff=unified#files)

### Get the base component

1. Navigate to Miva Admin > User Interface > Flex Components
1. Check the desired component (ex. mmx-featured-product)
1. Click the "Download Component" button

### Make the component your own

1. Extract the downloaded component (ex. `mmx-featured-product.tar.bz2`) [Example](https://github.com/mivaecommerce/flex-components/commit/9787c62537c92eb0689abbf6063dbb514a6652f1)
1. Rename the component's folder with its own unique name [Example](https://github.com/mivaecommerce/flex-components/commit/58272482ca33336eb0dc9b92a22934e9515b9d3b)
1. In `flex.json`, change the `code`, `name`, `version`, & `resourcegroup_code` to unique values [Example](https://github.com/mivaecommerce/flex-components/commit/1818778485a6ba81eec5009d1af220f0266e8462)
1. In `flex.json`, change `managed` from `true` to `false` [Example](https://github.com/mivaecommerce/flex-components/commit/a85b28b0daa0b7a3251fec4e42dee0b3ccca3374)
1. Optionally, change the `src/images/preview.svg` [Example](https://github.com/mivaecommerce/flex-components/commit/d6f30b7812755fac51f347ad37e586fa5c533a0c)
1. Remove the JavaScript or provide a unique alternative
	1. If updating with a unique alternative:
		1. Change the `flex.json > scripts` `filepath` and `resource_code` to a unique value [Example](https://github.com/mivaecommerce/flex-components/commit/3ab15b1c07e181a9dba41b9e87b437c6d006af3a)
		1. Change the JavaScript file's class & tag name [Example](https://github.com/mivaecommerce/flex-components/commit/cf14e73df903d24f31c35f35a5b54fbe73556280)
		1. Change `init.mvt` to load your resource [Example](https://github.com/mivaecommerce/flex-components/commit/d5eeb367aa583b797b32a020c16739a0c637a496)
		1. Change `instance.mvt` to use your web-component [Example](https://github.com/mivaecommerce/flex-components/commit/9d00eb5d4292c78e95e1ef70c5539a78d51b787a)
		1. Remove/update the `flex.json > scripts > attributes` for the `integrity` attribute [Example](https://github.com/mivaecommerce/flex-components/commit/4e9f3e67d7805f1153b1f7ba551434d72ae8cba5)
	1. If removing:
		1. Remove the corresponding `flex.json > scripts > attributes` item
		1. Remove the corresponding `src/js/*.js` file
1. Remove the CSS or provide a unique alternative
	1. If updating with a unique alternative:
		1. Change the `flex.json > styles` `filepath` and `resource_code` to a unique value [Example](https://github.com/mivaecommerce/flex-components/commit/af8a04f8c2e9da7e3c2db5d39847e1639bac82c7)
		1. Change `init.mvt` to load your resource [Example](https://github.com/mivaecommerce/flex-components/commit/d5eeb367aa583b797b32a020c16739a0c637a496)
		1. Update the JS file's `styleResourceCodes` to use your CSS [Example](https://github.com/mivaecommerce/flex-components/commit/42c08cf48194ffb1bde3728cb1857470d788412c)
		1. Remove/update the flex.json > styles > attributes for the `integrity` attribute [Example](https://github.com/mivaecommerce/flex-components/commit/1263a5c049bd533e3e02770e7a78b3867be5feb8)
		1. Optionally, update any of the CSS contents for your customizations [Example](https://github.com/mivaecommerce/flex-components/commit/7dfcd784af9200321b2fe412a40ecd09f3501de4)
		1. Optionally, update the component's CSS class namespace. [For example:](https://github.com/mivaecommerce/flex-components/commit/4d0e19ec69dd717347d34495d33527f458800bb2)
			1. The JavaScript file's `render()` function would be updated from `<div ... class="mmx-featured-product ...">` to  `<div ... class="dup-featured-product ...">`
			1. and all the `.mmx-featured-product` selectors in the CSS file would become `.dup-featured-product`
	1. If removing:
		1. Remove the corresponding `flex.json > styles > attributes` item
		1. Remove the corresponding `src/css/*.css` file
1. Optionally, change any other files of the component to add your custom functionality (ex. init.mvt, instance.mvt, flex.json properties, other CSS & JS files, etc.)
1. Review and confirm/update the `flex.json > depends` & `flex.json > conflics` values

### Import your component

1. tar your directory [Example](https://github.com/mivaecommerce/flex-components/commit/3e4ee8bf1c91a171d1b4dbbc3d2998452024e392)
	1. `$ cd dup-featured-product && tar -cvjSf ../dup-featured-product.tar.bz2 *`
1. Navigate to Miva Admin > User Interface > Flex Components
1. Click the "Upload Component" button
1. Upload your `dup-featured-product.tar.bz2` file

### View your component in Page Builder

1. Navigate to Miva Admin > User Interface > Content Management
1. Create/edit a page
1. Click the "Add Component" button
1. Select your custom component

### Iterate and improve your component

1. `$ mmt checkout ...` your remote
1. Edit the properties, scripts, styles, and templates of your component:
	1. `css/dup-featured-product.css`
	1. `js/dup-featured-product.js`
	1. `properties/flex/dup-featured-product.json`
	1. `templates/flex-initialization-template-dup-featured-product.mvt`
	1. `templates/flex-instance-template-dup-featured-product.mvt`
1. `$ mmt push --notes "updated foo"` to push your changes up
1. Preview your changes and repeat mmt pushes unil you are finished

### Distribute your component

1. Navigate to Miva Admin > User Interface > Flex Components
1. Check the desired component (ex. dup-featured-product)
1. Click the "Download Component" button
1. Take the downloaded `dup-featured-product.tar.bz2` and import it into a client store

---

## Alternative Process

1. Start with a basic component (ex. mmx-example)
1. mmt checkout an existing component as a reference
1. Copy over the flex.json settings, properties, scripts, styles, and templates to your component
1. Tar and distribute the component
