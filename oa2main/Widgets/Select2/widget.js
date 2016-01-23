/*global WAF, $, ds, sources */

'use strict';

WAF.define('Select2', ['waf-core/widget'], function (widget) {

    var Select2 = widget.create('Select2', {

        value: widget.property({
            defaultValue: '',
            bindable : true
        }),

        autoSave: widget.property({
            type: 'boolean',
            defaultValue : true,
            bindable : false
        }),

        items: widget.property({
            type: 'datasource',
            attributes: [{
                name: 'id' // Option key
            }, {
                name: 'text' // Option displayed text
            }],
            onChange : function () {
                this.main();
            }
        }),

        init: function () {                       
            this.node.innerHTML = '<input />';
            this.$selectNode = $('input', this.node);

            // Initialize our widget with empty options
            this.$selectNode.select2({
                data: [],
                width: '100%'
            });

            if (window.designer) {
                this.$selectNode.select2("enable", false);
                $(this.node).append('<div class="selectableInStudio"></div>');
            } else {
                this.main();
            }
        },

        main : function () {
            var self = this, isRelated, dc, re, relatedDC, kind,
                id = self.items.attributeFor('id'),
                val = this.value.boundDatasource();

            if (val) {
                dc = val.datasource.getID();
                re = val.attribute;
                relatedDC = self.items().getClassTitle();
                if (val.datasource[re]) {
                    kind = val.datasource[re].emAtt ? val.datasource[re].emAtt.kind : '';
                } else {
                    kind = '';
                }
                
            }

            if (kind === "relatedEntity") {
                isRelated = true;
            } else {
                isRelated = false;
            }


            // If the collection of the datasource items change, 
            // the elements in the DropDownMenu change accordingly.
            this.items.onPageChange(function (elements) {

                // Check to see if there is any element on the new collection
                if (!elements.length) {
                    return;
                }

                // Initialize select2 with new data
                self.$selectNode.select2({
                    width: 'element',
                    data: elements
                });

                //Initialize the combobox with the current value
                if (!isRelated) {
                    self.$selectNode.select2("val", self.value());
                }
            });


            // When the current element of the related datasource "company1" is changed, 
            // 1. the selected element of the DropDownMenu change 
            // 2. the value of the related attribute "employee1.company" is changed too.
            if (isRelated) {
                if (this.items()) {
                    this.items().subscribe('currentElementChange', function (event) {

                        var currentEntity = event.data.dataSource.getCurrentElement();
                        if (currentEntity) {
                            self.$selectNode.select2("val", currentEntity[id].getValue());
                            sources[dc][re].set(currentEntity);
                            if (self.autoSave()) {
                                sources[dc].save();
                            }
                        }
                    });
                }
            }


            // When the related attribute "employee1.company" is changed, 
            // 1. then the chosen element in the DropDownMenu is changed, 
            // 2. the current element of the related datasource "company" is changed too.            
            this.value.onChange(function (newVal) {
                if (isRelated) {
                    onValueChangeRelated(newVal);
                } else {
                    onValueChangeSimple();
                }                
            });

            function onValueChangeRelated(newVal) {
                if (newVal && newVal.__KEY) {
                    ds[relatedDC].query(id + ' = :1', {
                        onSuccess: function (event) {
                            event.result.getEntity(0, {
                                onSuccess: function (result) {
                                    self.items().selectByKey(result.entity.getKey());
                                    self.$selectNode.select2("val", result.entity[id].getValue());
                                }
                            });
                        },
                        params: [newVal.__KEY]
                    });
                }
            }

            function onValueChangeSimple() {
                var currentValue, key, dataClass, query;

                currentValue = self.value();
                key = self.items.attributeFor('id');
                dataClass = self.items().getClassTitle();
                if (typeof currentValue === "number") {
                    query = key + ' LIKE ' + currentValue;
                } else {
                    query = key + ' LIKE "' + currentValue + '"';
                }

                ds[dataClass].find(query, {
                    'onSuccess': function (e) {
                        if (e.entity) {
                            self.$selectNode.select2("val", currentValue);
                        } else {
                            self.$selectNode.select2("val", null);
                            return;
                        }
                    }
                });
            }

            this.$selectNode.on({
                "change": function (e) {
                    if (isRelated) {
                        onSelectNodeRelated(e);
                    } else {
                        onSelectNodeSimple(e);
                    }
                }
            });

            // When the user select another item in the DropDownMenu
            // 1.  the related attribute employee1.company is set to the corresponding company item
            // 2.  the current element of the related datasource "company1" is changed to this item
            function onSelectNodeRelated(e) {
                ds[relatedDC].query(id + ' = :1', {
                    onSuccess: function (event) {
                        event.result.getEntity(0, {
                            onSuccess: function (result) {
                                self.items().selectByKey(result.entity.getKey());
                            }
                        });
                    },
                    params: [e.val]
                });
            }

            // When the user select another item in the DropDownMenu, the value of the attribute "id" of 
            // the selected item is copied to the attribute value of the datasource value.            
            function onSelectNodeSimple(e) {
                var bindedValue = self.value.boundDatasource();
                if (bindedValue) {
                    if (bindedValue.datasource.getDataClass() instanceof WAF.DataClass) {
                        bindedValue.datasource[bindedValue.attribute] = e.val;
                    
                        if (self.autoSave()) {
                            bindedValue.datasource.save();
                        }
                    } else {
                        window[bindedValue.attribute] = e.val;
                        sources[bindedValue.attribute].sync();
                    }
                } else {
                    self.value(e.val);
                }
            }
        }
    });

    return Select2;
});