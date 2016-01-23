## Custom Widget for Wakanda 8 BUILD : 8.158756 (http://wakanda.org)

The waShareButton allows you share a given URL in the 3 social network : Facebook, Google Plus, and Twitter. 
This widget is an integration of JQUERY PLUGIN from : https://github.com/carrot/share-button

<p align="center"><a><img src="http://cl.ly/Ti66/prev.jpg" /></a></p>


**It works in all modern desktop and mobile browsers and doesn't depend on any external libraries.**

### Properties and Events

This widget has the following properties:
* __dotSize__

* __config__ = {
   * __url:__      the url you'd like to share. [Default: `window.location.href`]
  * __title:__     title to be shared alongside your link [Default: your page's meta description]
  * __text:__      text to be shared alongside your link, [Default: your page's meta description]   
  * __image:__     image to be shared [Default: your page's meta description]
  * __ui:__ {
    * __flyout:__          change the flyout direction of the shares. chose from `top left`, `top center`, `top right`, `bottom left`, `bottom right`, or `bottom center` [Default: `top center`]
    * __button_text:__       change the text of the button, [Default: `Share`]
    * __button_background:__ background color of the button [Default: #e1e1e1]
    * __button_color:__  text color of the button, [Default: #333]  
  },
  * __networks:__ {
    * __google_plus:__ {
      * __enabled:__  Enable Google+. [Default: true] (not yet implemented)
      * __url:__      the url you'd like to share to Google+ [Default: config.url]
    },
    * __twitter:__ {
      * __enabled:__  Enable Twitter. [Default: true] (not yet implemented)
      * __url:__      the url you'd like to share to Twitter [Default: config.url]
      * __text:__     text to be shared alongside your link to Twitter [Default: config.text]
    },
    * __facebook:__ {
      * __enabled:__  Enable Facebook. [Default: true] (not fully implemented)
      * __url:__  the url you'd like to share to Facebook [Default: config.url]
      * __app_id:__  Facebook app id for tracking shares. if provided, will use the facebook API
      * __title:__  title to be shared alongside your link to Facebook [Default: config.title]
      * __text:__  text to be shared alongside your link to Facebook [Default: config.text]
      * __image:__  image to be shared to Facebook [Default: config.image]
    }
  }
}


### Methods :

* __open__
(function) open the three social network buttons
* __close__
(function) open the three social network buttons
* __toggle__
(function) ... 




### More Information
For more information on how to install a custom widget, refer to [Installing a Custom Widget](http://doc.wakanda.org/WakandaStudio0/help/Title/en/page3869.html#1027761).

For more information about Custom Widgets, refer to [Custom Widgets](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3863.html "Custom Widgets") in the [Architecture of Wakanda Applications](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3844.html "Architecture of Wakanda Applications") manual.
