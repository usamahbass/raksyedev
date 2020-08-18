var plugins = [{
      plugin: require('/home/mronoyy/Desktop/bass_dev/raksyedev/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/mronoyy/Desktop/bass_dev/raksyedev/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"RaksyeDev","short_name":"RaksyeDev","start_url":"/","background_color":"#ffffff","theme_color":"#1d72aa","display":"standalone","icon":"src/assets/avatar.svg","icons":[{"src":"/assets/avatar.svg","sizes":"192x192","type":"image/svg+xml"},{"src":"assets/avatar.svg","sizes":"512x512","type":"image/svg+xml"}],"cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"66d035f7c6bd2b18d49f336a19ae2014"},
    },{
      plugin: require('/home/mronoyy/Desktop/bass_dev/raksyedev/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/mronoyy/Desktop/bass_dev/raksyedev/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
