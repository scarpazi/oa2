## Custom Widget for [Wakanda](http://wakanda.org)
The __wakandaratings__ widget is based on the rateit library, for more details please see http://rateit.codeplex.com/ 


### Properties
This __wakandaratings__ widget has the following properties: 

* __max__: the max wakandaratings value (default: 5).
* __step__: step size (default: 1).
* __value__: current rating value (default: 2).
* __resetable__: show a reste button (default: true).
* __readOnly__: set the widget as read-only (default: false).

### Events:

This __wakandaratings__ widget has an events:

* __change__: fired when the user rates something.

### Goals
The __wakandaratings__ widget allows you to easily add rating feature to your Wakanda application, e.g: rate article, products, reviews...



### Wakanda Studio

Model
```
1. Create a datasource  D
2. Add attribute string S1
3. save your model. 

```

Custom Widget
```
1. Drag the widget to your Wakanda page. 
2. a box will appear.
3. Drop the datasource string attribute S1 inside the widget or change the property's panel Datasource "Source", and fill in the Max Value.
4. save your page
5. run your page 
6. wakandaratings Widget will appear.
 
```

### More Information
For more information on how to install a custom widget, refer to [Installing a Custom Widget](http://doc.wakanda.org/WakandaStudio0/help/Title/en/page3869.html#1027761).

For more information about Custom Widgets, refer to [Custom Widgets](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3863.html "Custom Widgets") in the [Architecture of Wakanda Applications](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3844.html "Architecture of Wakanda Applications") manual.
