// Flex Component
export interface BaseFlexComponent {
	/** The flex component code */
	code: string;
	/** The flex component name */
	name: string;
	/**
	 * Indicate the scope & capabilities of the flex component.
	 *    type: 'component' = The flex component will be exposed in Page Builder UI's component selector. Supports all capabilities: properties, advanced_properties, images,  scripts, styles, initialization_template, and instance_template.
	 *    type: 'library' = The flex component will not be exposed in the Page Builder UI's component selector. Mainly supports scripts & styles capabilities.
	 *    default is 'component'
	*/
	type: 'component' | 'library';
	/**
	 * Boolean to indicate if the JS/CSS Resources should be module managed resources or not.
	 *    managed: true - Users *cannot* modify or delete the CSS/JS Resources of the Flex Component.
	 *    managed: false - Users *can* modify or delete the CSS/JS Resources of the Flex Component
     *    default is true
	 */
	managed?: boolean;
	/** The flex version number (ex. 1.0.0) */
	version: string;
	/** This is the Miva resource group the CSS/JS will get output from. */
	resourcegroup_code: string;
	/** Array of {@link FlexComponentImages} that allows you to include images in your component that will get added to the server/store upon import. */
	images?: Array<FlexComponentImages>;
	/** Array of {@link FlexComponentResource} objects for the JavaScript Resources that the component should create */
	scripts?: Array<FlexComponentResource>;
	/** Array of {@link FlexComponentResource} objects for the CSS Resources that the component should create */
	styles?: Array<FlexComponentResource>;
	/** Object where the key is a Component's Code and value is the Version number with an optional leading >, >=, <, <=, ex:"mmx-base": ">=10.07.00" */
	depends?: object;
	/** Object where the key is a Component's Code and value is the Version number with an optional leading >, >=, <, <=, ex: "mmx-base": ">=10.07.00" */
	conflicts?: object;
}

export interface FlexComponentTypeLibrary extends BaseFlexComponent {
	type: 'library';
}

export interface FlexComponentTypeComponent extends BaseFlexComponent {
	type: 'component';
	/** Path to the initialization template. This is a .mvt text file that can contain Miva template logic. */
	initialization_template?: string;
	/** Path to the instance template. This is a .mvt text file that can contain Miva template logic. */
	instance_template?: string;
	/** This is used to categorize the component in Page Builder and determines which icon is shown next to the component's name in Page Builder */
	category?: 'category-carousel' | 'featured-product' | 'image-across' | 'image-slider' | 'image-text' | 'image' | 'non-element' | 'product-carousel' | 'quick-order' | 'text-area' | 'text-banner' | 'text-editor' | 'text-utility' | 'video';
	/** Array of JSON objects for the properties the component will provide in admin for the end user */
	properties?: Array<Property|Group>;
	/** Array of JSON objects for the properties that will appear in the advanced tab */
	advanced_properties?: Array<Property|Group>;
	/** Object containing the default values for all properties */
	defaults?: object;
	/** The flex component's preview image. Should be the XML source of an SVG file */
	preview: string;
	/**
		CSS Selector that uniquely selects the component on the page.

		Supports the following tokens:

		- %sequence_item_code%: Replaced with sequence_element.item_code
		- %sequence_code%: Replaced with sequence_element.code
		- %element_item_code%: Replaced with element.item_code
		- %element_code%: Replaced with element.code
		- %component_code%: Replaced with component.code
	*/
	preview_component_selector: string;
}

export type FlexComponent = FlexComponentTypeLibrary | FlexComponentTypeComponent;

// Utility Types

/** A boolean-like value */
export type Booleanish =  true | false | 0 | 1;

/** A general value of a property */
export type Value = string | number;

/** An array of {@link Property} or {@link Group} items */
export type PropertyList = Array<Property|Group>;

/**
 * A list of the possible Miva Icon options.
 *
 * Mainly used in {@link SelectorOption.text} values
 */
export type MivaIcons = | 'add' | 'assign' | 'bookmark' | 'cancel' | 'catalog' | 'changesort' | 'checkmark' | 'columnresize' | 'customers' | 'datamanagement' | 'delete' | 'notification' | 'disp_order' | 'domainsettings' | 'download' | 'dropdown' | 'edit' | 'exclamation' | 'export' | 'goto' | 'history' | 'home' | 'import' | 'logging' | 'logout' | 'lookup' | 'manageshipments' | 'marketing' | 'menu' | 'modules' | 'more' | 'orderfulfillment' | 'orderprocessing' | 'payment' | 'refresh' | 'reports' | 'requestsupport' | 'reset' | 'save' | 'show' | 'list' | 'sort' | 'sort_asc' | 'sort_desc' | 'storesettings' | 'systemextensions' | 'folder' | 'template_add' | 'unassign' | 'update_available' | 'upload' | 'userinterface' | 'users' | 'utilities' | 'viewstore' | 'columnmenu' | 'first' | 'prev' | 'next' | 'last' | 'search' | 'loading' | 'dismiss' | 'bseparator' | 'fielderror' | 'circle' | 'here' | 'settings' | 'urimanagement' | 'marketplaces' | 'advancedsearch' | 'findinlist' | 'readytheme' | 'arrowup' | 'arrowdown' | 'font' | 'bold' | 'italic' | 'underline' | 'strike' | 'align_left' | 'align_center' | 'align_right' | 'align_justify' | 'indent' | 'outdent' | 'picture' | 'link' | 'link_ext_alt' | 'code' | 'undo' | 'redo' | 'paint' | 'numberedlist' | 'bulletlist' | 'superscript' | 'subscript' | 'resize' | 'lock' | 'unlock' | 'linenumbers' | 'wrap' | 'textarea' | 'colorpicker' | 'paragraph' | 'table' | 'fontsize' | 'fontface' | 'verticalalign' | 'horizontalalign' | 'columns' | 'rows' | 'border' | 'cell' | 'richtext' | 'fullscreen_start' | 'fullscreen_end' | 'foregroundcolor' | 'backgroundcolor' | 'find_and_replace' | 'help' | 'line_stacked' | 'bar_stacked' | 'bar_sbs' | 'group' | 'ungroup' | 'triggers' | 'conditions' | 'actions' | 'workflow' | 'details' | 'zoom_out' | 'zoom_in' | 'linked' | 'gear_1' | 'branches' | 'createnew' | 'tags' | 'position_bottom_left' | 'position_bottom_right' | 'position_top_right' | 'position_top_left' | 'shopascustomer' | 'email' | 'login' | 'miva_m' | 'copy' | 'circle_cancel' | 'circle_checkmark' | 'circle_information' | 'filter' | 'circle_add' | 'star' | 'date' | 'time' | 'revision' | 'password' | 'businessaccount' | 'addressbook' | 'customer_dashboard_login' | 'customer_dashboard_businessaccount' | 'customer_dashboard_email' | 'customer_dashboard_password' | 'customer_dashboard_address' | 'customer_dashboard_phone';

/** An object depicting the HTML attribute name & value pair */
export interface HtmlAttribute {
	name: string;
	value: Value;
}

/**
 * An object used in {@link FlexComponent.images} mapping the source-file within the tar.bz2 to the desired destination-file on the server. Upon install of the flex component into a store, any images defined will get copied to the destination path specified.
 *
 * The default location for images on a Miva store is something like: "graphics/%STORE_ID%/image_name.jpg". A common use case for this could be including placeholder images for your component into the flex component file that gets imported.
*/
export interface FlexComponentImages {
	/** The source_filepath is the path of the image in the local flex folder (.tar.bz2). */
	source_filepath: string;
	/**
	The destination_filepath is where you would like the image copied on the Miva server.

	There is an optional %STORE_ID% placeholder value you can use in the destination path which will get replaced with the actual store id (ex: 00000001) upon import
	*/
	destination_filepath: string;
}

/**
 * An object detailing the filepath, resource_code, and attributes[] of a CSS or JavaScript Resource that your Flex Component relies on.
 *
 * Typically used in {@link FlexComponent.scripts} and {@link FlexComponent.styles}
 */
export interface FlexComponentResource {
	/** The path of the JavaScript/CSS Resource in the local flex folder (i.e. .tar.bz2) */
	filepath: string;
	resource_code: string;
	/** An array of {@link HtmlAttribute} objects defining the name & value of any attributes that should be output on the JS/CSS resource */
	attributes?: Array<HtmlAttribute>;
}

// Group
/**
 * A group is just a container for other properties and a way to organize the properties on the screen logically and into nested groups.
 *
 * A group is collapsible and can have an optionally enable/disable the ability to toggle it on/off
 */
export interface Group {
	code: string;
	prompt: string;
	type: 'group';
	collapsed?: Booleanish;
	can_disable?: Booleanish;
	properties?: Array<Property|Group>;
}

/**
 * These are configurable settings for the component.
 *
 * They will be used to show a UI in the Miva Page Builder so that non-technical users can add content and customize each component for their site and use case.
 */
export type Property =
	| TextProperty
	| NumberProperty
	| DateProperty
	| TextAreaProperty
	| SelectProperty
	| RadioProperty
	| ColorProperty
	| CheckboxProperty
	| SelectorProperty
	| ImageProperty
	| CategoryProperty
	| ProductProperty
	| LinkProperty
	| SliderProperty
	| DistributedSliderProperty
	| ListProperty
	| GroupListProperty
	| TextEditorProperty
	| CustomLookupProperty
	| ImageTypeProperty
	| ProductCustomFieldLookupProperty
	| FragmentProperty;

/** The main fields that apply to all {@link Property} items  */
export interface BaseProperty {
	/** This is the unique code that identifies the property */
	code: string;
	/** Controls the UI for the input device people use within Page Builder */
	type: string;
	/** This is the text the end user will see in the Miva admin for this property */
	prompt: string;
	/**
	 * Designate if the property should be required by the user when editing through Page Builder's UI

	 * @default false
	 */
	required?: Booleanish;
	/**
		CSS Selector that uniquely selects the properties within a component. Selected from the `preview_component_selector` element.

		Supports the following tokens/features:

		- `%nth-child%` - indicates an array position and should actually be replaced with `:nth-child(N)` where N is the array index of the actual property at that point in time from a list-type property. Note that there may be multiple array levels.
		- `%nth-of-type%` - indicates an array position and should actually be replaced with `:nth-of-type(N)` where N is the array index of the actual property at that point in time from a list-type property. Note that there may be multiple array levels.
		- ` :shadow ` - indicates that searching the dom will need to switch to the shadow dom on the currently selected element. Note that we will ONLY be supporting this when it is surrounded by the beginning / end of the line, or white space. ie, "mmx-hero:shadow" is not valid, it MUST be "mmx-hero :shadow"
	*/
	preview_property_selector: string;
}

// Text Settings


/**
 * An optional array of {@link TextSetting} items that can be defined on the property.
 *
 * If included it will output a Settings icon within the text box to enable advanced editing of the Text.
*/
export interface TextSettings {
	fields: Array<TextSetting>;
}

/** Additional settings that are applied to existing {@link Property} objects to control functionality specific to the {@link TextSetting} items in {@link TextSettings} */
export interface AdditionalTextSettings {
	/**
	 * An array of strings used to designate the various states the text setting property should be able to be configured by.
	 *
	 * Each item in the array will create a tab & structure with its own set of property data. It is not necessary to have multiple states.
	 * @example
	 * ['normal']
	 * @example
	 * ['normal', 'active', 'hover']
	 * @example
	 * ['mobile', 'tablet', 'desktop']
	 */
	pseudoclasses: Array<string>;
	/**
	 * Controls the width of the property
	 * @default 'full'
	 */
	size?: 'full' | 'half' | 'one-third' | 'two-thirds';
	/** Used to indicate you want CSS styles to be generated by flex (ex. font-size, color, background-color, etc.)  */
	style?: string;
	/** A string to prefix to the output of the value the user provides. Only applies when `style` is also used. Could be used to output the "calc(" of a CSS property value */
	style_prefix?: Value;
	/** A string to suffix to the output of the value the user provides. Only applies when `style` is also used. Could be used to output the "px" of a CSS property value */
	style_suffix?: Value;
}

/**
 * An object that extends the {@link Property} with some {@link AdditionalTextSettings}
 *
 * Great for adding Font Size, Font Color and Text Alignment for regular text for various states (ex. focus, hover, & active or mobile, tablet, desktop) states are defined by {@link AdditionalTextSettings.pseudoclasses}
 */
export type TextSetting = Property & AdditionalTextSettings

/**
 * The main settings that apply to `type: 'text'` Properties
 * {@link TextProperty}
 * {@link NumberProperty}
 */
export interface BaseTextProperty extends BaseProperty {
	type: 'text';
	textsettings?: TextSettings;
	label?: Value;
	placeholder?: Value;
	validation_message?: string;
	validation_pattern?: string;
}

/**
 * Text input property
 *
 * Similar to <input type="text|url|password|tel">
 */
export interface TextProperty extends BaseTextProperty {
	text_type?: 'text' | 'email' | 'url' | 'password' | 'tel';
	minlength?: number;
	maxlength?: number;
}

/**
 * Number input property
 *
 * Similar to <input type="number">
 */
export interface NumberProperty extends BaseTextProperty {
	text_type: 'number';
	min?: number;
	max?: number;
	step?: number;
}

export interface DateProperty extends BaseProperty {
	type: 'date' | 'datetime';
	serverdate?: Booleanish;
	min?: string;
	max?: string;
	validation_message?: string;
	validation_pattern?: string;
}

/**
 * Text Area input property
 *
 * Similar to <textarea>
 */
export interface TextAreaProperty extends BaseProperty {
	type: 'textarea';
	textsettings?: TextSettings;
	placeholder?: Value;
	markdown?: Booleanish;
}

/**
 * Checkbox input
 *
 * Similar to <input type="checkbox">
 */
export interface CheckboxProperty extends BaseProperty {
	type: 'checkbox';
}


/**
 * Option of a {@link SelectProperty}, {@link RadioProperty}, or {@link SelectorProperty}
 *
 * Similar to <option>
 */
export interface Option {
	text: Value;
	value: Value;
}

/**
 * Select input
 *
 * Similar to <select>
 */
export interface SelectProperty extends BaseProperty {
	type: 'select';
	options: Array<Option>;
}

/**
 * Radio input
 *
 * Similar to <input type="radio">
 */
export interface RadioProperty extends BaseProperty {
	type: 'radio';
	options: Array<Option>;
}

/**
 * Selector input
 *
 * Similar to a Bootstrap's "Button Group" or "Radio Toggle Button"
 * @see https://getbootstrap.com/docs/5.0/forms/checks-radios/#radio-toggle-buttons
 */
export interface SelectorProperty extends BaseProperty {
	type: 'selector';
	options: Array<Option | SelectorOption>;
}

/**
 * Special version of an {@link Option} used on {@link SelectorProperty} that allows you to show an icon from the {@link MivaIcons} set
 */
export interface SelectorOption {
	type: 'icon';
	text: MivaIcons;
	value: Value;
}

/**
 * Color input
 *
 * Similar to <input type="color">
 */
export interface ColorProperty extends BaseProperty {
	type: 'color';
}


/** Image input allows users to upload or find any image in Miva's Image Management */
export interface ImageProperty extends BaseProperty {
	type: 'image';
	width?: number;
	height?: number;
	responsive_images?: Array<ResponsiveImage>;
}

/**
 * An object used in {@link ImageProperty.responsive_images} arrays to designate slots for people to upload additional images.
 *
 * Especially helpful for designating images in <picture> and <source> elements that target specific media/devices  */
export interface ResponsiveImage {
	code: string;
	prompt: Value;
	width?: number;
	height?: number;
}

/** Category look-up input */
export interface CategoryProperty extends BaseProperty {
	type: 'category';
}

/** Product look-up input */
export interface ProductProperty extends BaseProperty {
	type: 'product';
}

/** Link input allows users to link to any product, category, or page */
export interface LinkProperty extends BaseProperty {
	type: 'link';
	supports_new_tab?: Booleanish;
}

/**
 * Slider input
 *
 * Similar to <input type="range">
 */
export interface SliderProperty extends BaseProperty {
	type: 'slider';
	/**  */
	range_low: number;
	range_high: number;
	/** use -1 to use default scale */
	scale: number;
	/** use -1 to use default precision */
	precision: number;
	label?: Value;
}

/**
 * Distributed Slider input
 *
 * Similar to <input type="range">, but ideal for ranges from 0-100 (i.e widths & percentages)
 */
export interface DistributedSliderProperty extends BaseProperty {
	type: 'distributedslider';
	/**
	 * The breakpoints are calculated as a value between 0 and 100 steps divided by the number of breaks
	 *
	 * @example
	 * 1 // one break yields two segments and three possible values: 0, 50, & 100
	 * @example
	 * 4 // four breaks yields five segments and six possible values: 0, 20, 40, 60, 80, & 100
	 */
	breaks: number;
}

/** List properties allow you to create list of other properties that can be added or removed by the end user. An example would be a list of images used for a hero slider. */
export interface ListProperty extends BaseProperty {
	type: 'list';
	list_type: 'text' | 'image' | 'product' | 'category' | 'color' | 'date' | 'datetime' | 'group' | 'link'
	/** minimum amount of items that must exist in the list */
	min_count?: number;
	/** maximum amount of items that must exist in the list */
	max_count?: number;
	/** defines the default value the "Add New" link is clicked. */
	template?: object;
}

export interface GroupListProperty extends ListProperty {
	list_type: 'group';
	/** used to tell the outer list what property to use for the display (ie, you change this field in the inner group, set the title of the list entry to that value) */
	item_prompt_property?: string;
	/** a prompt that is displayed when prompting users to add/edit an item to the list. For example with a `group_prompt` of "Image", there will be buttons/titles/prompts displaying things like "+ Add Image", "Image >", "← Image" as people add & edit items in the list. */
	group_prompt?: string;
	properties?: Array<Property|Group>;
}

/**
 * Text Editor input
 *
 * A property that launches a [Miva Rich Text Editor input](https://docs.miva.com/how-to-guides/rich-text-editor) in a modal.
 */
export interface TextEditorProperty extends BaseProperty {
	type: 'texteditor';
}

/**
 * Custom Lookup
 */
export interface CustomLookupProperty extends BaseProperty {
	type: 'customlookup';
	placeholder?: Value;
	lookup: CustomLookupSettings;
}

export interface CustomLookupSettings {
	/** @example "combofacet" */
	module_code: string;
	/** @example "PageBuilder_CombinationFacetList_Load_Query" */
	module_function: string;
	/** Optional. If not present, prompt will be used for the dialog title */
	title?: string;
	/** @example "code" */
	selection_column: string;
	default_sort?: string;
	columns: Array<CustomLookupColumn|CustomLookupNumericColumn|CustomLookupMappedTextValuesColumn>
}

export interface CustomLookupColumn {
	code: string;
	header: string;
	type: ColumnType;
	/** @default true */
	sortable?: Booleanish;
	/** @default true */
	searchable?: Booleanish;
	sort_field?: string;
	/** @default true */
	active?: Booleanish;
	/** @default false */
	ondemandcolumn?: Booleanish;
}

export interface CustomLookupNumericColumn extends CustomLookupColumn {
	type: 'numeric';
	float_value: number;
}

export interface CustomLookupMappedTextValuesColumn extends CustomLookupColumn {
	type: 'mappedtextvalues';
	actual_values: Array<Value>;
	display_values: Array<Value>;
}

/**
 * A list of the possible Column Type options.
 *
 * Mainly used in {@link CustomLookupColumn.type} values
 */
export type ColumnType = 'code' | 'name' | 'text' | 'numeric' | 'currency' | 'datetime' | 'date' | 'serverdatetime' | 'serverdate' | 'checkbox' | 'imagepreview' | 'mappedtextvalues';

/**
 * Image Type Lookup
 */
export interface ImageTypeProperty extends BaseProperty {
	type: 'imagetype';
}

/**
 * Product Custom Field Lookup Property
 */
export interface ProductCustomFieldLookupProperty extends BaseProperty {
	type: 'productcustomfieldlookup';
}

/**
 * Fragment Lookup Property
 */
export interface FragmentProperty extends BaseProperty {
	type: 'fragment';
}
