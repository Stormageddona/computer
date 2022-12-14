/*
 Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
CKEDITOR.dialog.add("paste", function (c) {
    function k(a) {
        var b = new CKEDITOR.dom.document(a.document),
            g = b.getBody(),
            d = b.getById("cke_actscrpt");
        d && d.remove();
        g.setAttribute("contenteditable", !0);
        g.on(e.mainPasteEvent, function (a) {
            a = e.initPasteDataTransfer(a);
            f ? a != f && (f = e.initPasteDataTransfer()) : f = a
        });
        if (CKEDITOR.env.ie && 8 > CKEDITOR.env.version) b.getWindow().on("blur", function () {
            b.$.selection.empty()
        });
        b.on("keydown", function (a) {
            a = a.data;
            var b;
            switch (a.getKeystroke()) {
                case 27:
                    this.hide();
                    b = 1;
                    break;
                case 9:
                case CKEDITOR.SHIFT +
                9:
                    this.changeFocus(1), b = 1
            }
            b && a.preventDefault()
        }, this);
        c.fire("ariaWidget", new CKEDITOR.dom.element(a.frameElement));
        b.getWindow().getFrame().removeCustomData("pendingFocus") && g.focus()
    }
    var h = c.lang.clipboard,
        e = CKEDITOR.plugins.clipboard,
        f;
    c.on("pasteDialogCommit", function (a) {
        a.data && c.fire("paste", {
            type: "auto",
            dataValue: a.data.dataValue,
            method: "paste",
            dataTransfer: a.data.dataTransfer || e.initPasteDataTransfer()
        })
    }, null, null, 1E3);
    return {
        title: h.paste,
        minWidth: CKEDITOR.env.ie && CKEDITOR.env.quirks ? 370 : 350,
        minHeight: CKEDITOR.env.quirks ? 250 : 245,
        onShow: function () {
            this.parts.dialog.$.offsetHeight;
            this.setupContent();
            this._.committed = !1
        },
        onLoad: function () {
            (CKEDITOR.env.ie7Compat || CKEDITOR.env.ie6Compat) && "rtl" == c.lang.dir && this.parts.contents.setStyle("overflow", "hidden")
        },
        onOk: function () {
            this.commitContent()
        },
        contents: [{
            id: "general",
            label: c.lang.common.generalTab,
            elements: [{
                type: "html",
                id: "pasteMsg",
                html: '<div style="white-space:normal;width:340px">' + h.pasteMsg + "</div>"
            }, {
                type: "html",
                id: "editing_area",
                style: "width:100%;height:100%",
                html: "",
                focus: function () {
                    var a = this.getInputElement(),
                        b = a.getFrameDocument().getBody();
                    !b || b.isReadOnly() ? a.setCustomData("pendingFocus", 1) : b.focus()
                },
                setup: function () {
                    var a = this.getDialog(),
                        b = '<html dir="' + c.config.contentsLangDirection + '" lang="' + (c.config.contentsLanguage || c.langCode) + '"><head><style>body{margin:3px;height:95%;word-break:break-all;}</style></head><body><script id="cke_actscrpt" type="text/javascript">window.parent.CKEDITOR.tools.callFunction(' +
                        CKEDITOR.tools.addFunction(k, a) + ",this);</script></body></html>",
                        g = CKEDITOR.env.air ? "javascript:void(0)" : CKEDITOR.env.ie && !CKEDITOR.env.edge ? "javascript:void((function(){" + encodeURIComponent("document.open();(" + CKEDITOR.tools.fixDomain + ")();document.close();") + '})())"' : "",
                        d = CKEDITOR.dom.element.createFromHtml('<iframe class="cke_pasteframe" frameborder="0"  allowTransparency="true" src="' + g + '" aria-label="' + h.pasteArea + '" aria-describedby="' + a.getContentElement("general",
                            "pasteMsg").domId + '"></iframe>');
                    f = null;
                    d.on("load", function (a) {
                        a.removeListener();
                        a = d.getFrameDocument();
                        a.write(b);
                        c.focusManager.add(a.getBody());
                        CKEDITOR.env.air && k.call(this, a.getWindow().$)
                    }, a);
                    d.setCustomData("dialog", a);
                    a = this.getElement();
                    a.setHtml("");
                    a.append(d);
                    if (CKEDITOR.env.ie && !CKEDITOR.env.edge) {
                        var e = CKEDITOR.dom.element.createFromHtml('<span tabindex="-1" style="position:absolute" role="presentation"></span>');
                        e.on("focus", function () {
                            setTimeout(function () {
                                d.$.contentWindow.focus()
                            })
                        });
                        a.append(e);
                        this.focus = function () {
                            e.focus();
                            this.fire("focus")
                        }
                    }
                    this.getInputElement = function () {
                        return d
                    };
                    CKEDITOR.env.ie && (a.setStyle("display", "block"), a.setStyle("height", d.$.offsetHeight + 2 + "px"))
                },
                commit: function () {
                    var a = this.getDialog().getParentEditor(),
                        b = this.getInputElement().getFrameDocument().getBody(),
                        c = b.getBogus();
                    c && c.remove();
                    b = b.getHtml();
                    this.getDialog()._.committed = !0;
                    a.fire("pasteDialogCommit", {
                        dataValue: b,
                        dataTransfer: f || e.initPasteDataTransfer()
                    })
                }
            }]
        }]
    }
});