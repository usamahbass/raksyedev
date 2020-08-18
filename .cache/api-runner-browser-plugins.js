module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":750,"linkImagesToOriginal":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"RaksyeDev","short_name":"RaksyeDev","start_url":"/","background_color":"#ffffff","theme_color":"#1d72aa","display":"standalone","icon":"src/assets/avatar.svg","icons":[{"src":"/assets/avatar.svg","sizes":"192x192","type":"image/svg+xml"},{"src":"assets/avatar.svg","sizes":"512x512","type":"image/svg+xml"}],"cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"66d035f7c6bd2b18d49f336a19ae2014"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
