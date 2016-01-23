WAF.define('WaShareButton', ['waf-core/widget'], function(widget) {

    var WaShareButton = widget.create('WaShareButton', {
        init: function() {
            var $node = $(this.node);
            this.node.innerHTML = "";
            this.node.innerHTML = '<div class=' + this.node.id + '  ></div>';

            var that = this;
            var element = "." + this.node.id;

            debugger;

            this.shareButton = render(element);

            function render(el) {

                return new Share(el, {
                    url: that.url(),
                    title: that.title(),
                    text: that.text(),

                    ui: {
                        flyout: that.flyout(),
                        button_text: that.buttonText(),
                        button_background: that.buttonBackground(),
                        button_color: that.buttonColor()
                    },

                    networks: {
                        facebook: {
                            enabled: that.FacebookEnabled(),
                            app_id: that.FacebookAppID(),
                            title: that.FacebookTitle(),
                            text: that.FacebookText(),
                            image: that.FacebookImage()
                        },
                        google_plus: {
                            enabled: that.gPlusEnabled()
                        },
                        twitter: {
                            enabled: that.twitterEnabled(),
                            text: that.twitterText()
                        }
                    }

                });
            }

            this.title.onChange(function() {
                render(element);
            });
            this.text.onChange(function() {
                render(element);
            });

            this.url.onChange(function() {
                render(element);
            });
            this.twitterText.onChange(function() {
                render(element);
            });

        },

        url: widget.property({
            type: 'string',
            bindable: true
        }),
        title: widget.property({
            type: 'string',
            bindable: true
        }),
        text: widget.property({
            type: 'string',
            bindable: true
        }),
        FacebookTitle: widget.property({
            type: 'string',
            bindable: true
        }),
        FacebookText: widget.property({
            type: 'string',
            bindable: true
        }),
        FacebookImage: widget.property({
            type: 'string',
            bindable: true
        }),
        flyout: widget.property({
            type: 'enum',
            values: {
                'top left': 'top left',
                'top center': 'top center',
                'top right': 'top right',
                'bottom left': 'bottom left',
                'bottom right': 'bottom right',
                'bottom center': 'bottom center'
            },
            defaultValue: 'top center',
            bindable: false
        }),
        buttonText: widget.property({
            type: 'string',
            defaultValue: 'Share',
            bindable: false
        }),
        buttonBackground: widget.property({
            type: 'string',
            defaultValue: "#e1e1e1",
            bindable: false
        }),
        buttonColor: widget.property({
            type: 'string',
            defaultValue: "#333",
            bindable: false
        }),
        FacebookEnabled: widget.property({
            type: 'boolean',
            defaultValue: true,
            bindable: false
        }),
        FacebookAppID: widget.property({
            type: 'string',
            bindable: false
        }),
        gPlusEnabled: widget.property({
            type: 'boolean',
            defaultValue: true,
            bindable: false
        }),
        twitterEnabled: widget.property({
            type: 'boolean',
            defaultValue: true,
            bindable: false
        }),
        twitterText: widget.property({
            type: 'string',
            bindable: true
        }),
        open: function() {
            return this.shareButton.open();
        },
        close: function() {
            return this.shareButton.close();
        },
        toggle: function() {
            return this.shareButton.toggle();
        }
    });

    //    /* Map the custom event above to the DOM click event */
    //    WaShareButton.mapDomEvents({
    //        'click': 'action'
    //    });
    return WaShareButton;

});

/* For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html */