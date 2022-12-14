(window["aioseopjsonp"]=window["aioseopjsonp"]||[]).push([["local-seo-pro-MapsActivate-vue","local-seo-pro-LocalSeoCta-vue"],{"0d64":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-local-maps"},[e("core-card",{attrs:{slug:"localBusinessMapsApiKey"},scopedSlots:t._u([{key:"header",fn:function(){return[t._v(" "+t._s(t.strings.googleMapsApiKey)+" ")]},proxy:!0}])},[e("core-blur",[e("div",{staticClass:"aioseo-settings-row"},[e("p",{staticClass:"apikey-description"},[t._v(t._s(t.strings.description))])]),e("core-settings-row",{attrs:{name:t.strings.apiKey,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-input",{attrs:{size:"medium"}})]},proxy:!0}])}),e("core-display-info",{attrs:{options:t.displayInfo}})],1)],1),e("local-seo-cta")],1)},o=[],a=e("734c"),n={components:{LocalSeoCta:a["default"]},data:function(){return{strings:{googleMapsApiKey:this.$t.__("Google Maps API Key",this.$td),description:this.$t.__("Integrating with Google Maps will allow your users to find exactly where your business is located. Our interactive maps let them see your Google Reviews and get directions directly from your site. Create multiple maps for use with multiple locations.",this.$td),apiKey:this.$t.__("API Key",this.$td),mapSettings:this.$t.__("Map Settings",this.$td)},displayInfo:{widget:{copy:"",desc:this.$t.sprintf(this.$t.__('To add this widget, visit the %1$swidgets page%2$s and look for the "%3$s Local - Map" widget.',this.$td),'<a href="'.concat(this.$aioseo.urls.admin.widgets,'" target="_blank">'),"</a>","AIOSEO")},shortcode:{copy:"[aioseo_local_map]",desc:this.$t.sprintf(this.$t.__("Use the following shortcode to display the location map. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoShortcodeMap",!0))},block:{copy:"",desc:this.$t.sprintf(this.$t.__('To add this block, edit a page or post and search for the "%1$s Local - Map" block.',this.$td),"AIOSEO")},php:{copy:"<?php if( function_exists( 'aioseo_local_map' ) ) aioseo_local_map(); ?>",desc:this.$t.sprintf(this.$t.__("Use the following PHP code anywhere in your theme to display the location map. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoFunctionMap",!0))}}}}},r=n,c=e("2877"),l=Object(c["a"])(r,i,o,!1,null,null,null);s["default"]=l.exports},"734c":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("cta",{attrs:{"cta-button-visible":t.$addons.userCanInstallOrActivate("aioseo-local-business"),"cta-button-visible-warning":t.strings.permissionWarning,"cta-link":t.$aioseo.urls.aio.featureManager+"&aioseo-activate=aioseo-local-business","cta-button-action":"","cta-button-loading":t.activationLoading,"same-tab":"","button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getDocUrl("localSeo"),"feature-list":[t.strings.businessType,t.strings.businessContact,t.strings.paymentInfo,t.strings.image,t.strings.showOpeningHours,t.strings.googleMaps]},on:{"cta-button-click":t.activateAddon},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.locationSeoHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[t.failed?e("core-alert",{attrs:{type:"red"}},[t._v(" "+t._s(t.strings.activateError)+" ")]):t._e(),t._v(" "+t._s(t.strings.ctaDescription)+" ")]},proxy:!0},{key:"learn-more-text",fn:function(){return[t._v(" "+t._s(t.strings.learnMoreText)+" ")]},proxy:!0}])})},o=[],a=e("5530"),n=(e("7db0"),e("2f62")),r={data:function(){return{failed:!1,activationLoading:!1,strings:{locationSeoHeader:this.$t.__("Enable Local SEO on your Site",this.$tdPro),ctaDescription:this.$t.__("The Local SEO module is a premium feature that enables businesses to tell Google about their business, including their business name, address and phone number, opening hours and price range.  This information may be displayed as a Knowledge Graph card or business carousel in the search engine sidebar.",this.$tdPro),ctaButtonText:this.$t.__("Activate Local SEO",this.$tdPro),learnMoreText:this.$t.__("Learn more about Local SEO",this.$tdPro),showOpeningHours:this.$t.__("Show Opening Hours",this.$td),selectTimeZoneCTA:this.$t.__("Select your timezone",this.$td),googleMaps:this.$t.__("Google Maps",this.$td),businessType:this.$t.__("Type",this.$td),businessContact:this.$t.__("Contact Info",this.$td),paymentInfo:this.$t.__("Payment Info",this.$td),image:this.$t.__("Image",this.$td),activateError:this.$t.__("An error occurred while activating the addon. Please upload it manually or contact support for more information.",this.$td),permissionWarning:this.$t.__("You currently don't have permission to activate this addon. Please ask a site administrator to activate first.",this.$td)}}},computed:Object(a["a"])({},Object(n["e"])(["addons"])),methods:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(n["b"])(["installPlugins"])),Object(n["d"])(["updateAddon"])),{},{activateAddon:function(){var t=this;this.failed=!1,this.activationLoading=!0;var s=this.addons.find((function(t){return"aioseo-local-business"===t.sku}));this.installPlugins([{plugin:s.basename}]).then((function(s){t.activationLoading=!1,s.body.failed.length?t.failed=!0:window.location.reload()})).catch((function(){t.activationLoading=!1}))}})},c=r,l=e("2877"),d=Object(l["a"])(c,i,o,!1,null,null,null);s["default"]=d.exports}}]);