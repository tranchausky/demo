BaseClass = function (options) {
    this.init(options);
};

BaseClass.extend = function (proto) {
    var base = function () { };
    var member;
    var that = this;
    var subclass = proto && proto.init ? proto.init : function () {
        that.apply(this, arguments);
    };
    var fn;

    base.prototype = that.prototype;
    fn = subclass.fn = subclass.prototype = new base();

    for (member in proto) {
        if (proto[member] != null && proto[member].constructor === Object) {
            // Merge object members
            fn[member] = $.extend(true, {}, base.prototype[member], proto[member]);
        } else {
            fn[member] = proto[member];
        }
    }

    fn.constructor = subclass;
    subclass.extend = that.extend;

    return subclass;
};

BaseClass.rebindFunctionInstances = function (obj) {
    for (var member in obj) {
        if ($.isFunction(obj[member])) {
            obj[member] = $.proxy(obj[member], obj);
        }
        if (obj[member] != null && obj[member].constructor === Object) {
            obj[member] = $.extend(true, {}, obj[member]);
        }
    }
};

$.extend(BaseClass.prototype, {
    options: {},
    init: function (options) {
        this.options = options;
    }
});


WebFormatter = BaseClass.extend({
    options: {
        menuId: null,
        text: null,
        menu: null
    },
    autoDetectLanguages: [],
    codeMirror: {
        lineCount: 0
    },
    isNewData: true,
    // WebWorker
    worker: null,
    // Codemirror editor instance
    editor: null,
    isFormat: false,
    fileName: null,
    $el: {
        file: null,
        btnBrowse: null,
        btnClear: null,
        btnDownload: null,
        btnLoadUrl: null,
        btnFormat: null,
        btnFormatLabel: null,
        btnFormatLoader: null,
        modal: null,
        modalBackdrop: null,
        modalBtn: null,
        modalBtnClose: null,
        modalInput: null,
        modalErrorHint: null,
        tabSize: null,
        menuItems: null
    },
    // prettier max line width for formatting
    printWidth: 240,

    init: function(options) {
        BaseClass.rebindFunctionInstances(this);
        $.extend(true, this.options, options ? options : {});
        this.options.mainButtonClass = !this.isAutoLanguageDetectEnabled() ? 'main-button' :'main-button__lang';
        this.options.mainButtonActiveClass = !this.isAutoLanguageDetectEnabled() ? 'main-button__active' :'main-button__lang__active';

        $("#preload").remove();

        var keys = Object.keys(this.options.menu);
        this.autoDetectLanguages = [];
        for(var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var menuItem = this.options.menu[key];
            if (menuItem.isAutoDetect) {
                this.autoDetectLanguages.push(menuItem.name);
            }
        }

        this.initElements();
        this.initWorker();
        this.initEditor();
        this.initClipboard();
        this.initResize();

        this.initEventHandlers();
    },

    initWorker: function() {
        this.worker = new Worker('js/worker.js');
        this.worker.addEventListener('message', this.onWorkerPostMessage);
    },

    initEditor: function() {
        this.editor = CodeMirror.fromTextArea(document.getElementById("code"), {
            lineNumbers: true,
            autofocus: true
        });
    },

    initClipboard: function() {
        var context = this;
        new ClipboardJS('.clipboard-anchor', {
            text: function (trigger) {
                return context.editor.getValue();
            }
        });
    },

    initResize: function() {
        cmResize(this.editor, {
            resizableWidth: false,
            cssClass: "CodeMirror-Resizer"
        });
    },

    initElements: function() {

        this.$el.file = $("#inFile");
        this.$el.btnBrowse = $(".footer-item__browse").parent();
        this.$el.btnClear = $(".footer-item__clear").parent();
        this.$el.btnDownload = $(".footer-item__download").parent();
        this.$el.btnLoadUrl = $(".footer-item__url").parent();
        this.$el.btnFormat = $(".primary-button");
        this.$el.btnFormatLabel = this.$el.btnFormat.find('span');
        this.$el.btnFormatLoader = $(".spinner");

        this.$el.modal = $("#modalWindow");
        this.$el.modalBackdrop = $('.modal-backdrop');
        this.$el.modalInput = this.$el.modal.find('input');
        this.$el.modalErrorHint = this.$el.modal.find('.modal-error');
        this.$el.modalBtn = this.$el.modal.find('.modal-footer-button');
        this.$el.modalBtnClose = this.$el.modal.find('.modal-header').find('button');

        this.$el.tabSize = $("#tabSize");

        this.$el.menuAutoDetect = $('.main-button__auto');

        if (this.isAutoLanguageDetectEnabled()) {
            this.$el.menuAutoDetect.addClass("main-button__active");
        }

        this.$el.menuItems = $(".main-header > a");
    },

    initEventHandlers: function() {

        var context = this;
        $('button')
            .on('mouseleave', function (e) {
                $(this).removeClass('button-focus');
            })
            .on('touchstart mousedown', function (e) {
                if (!$(this).hasClass('button-focus')) {
                    $(this).addClass('button-focus');
                }
            })
            .on('touchend mouseup', function (e) {
                $(this).removeClass('button-focus');
            });

        $('.footer-item')
            .on('mouseleave', function (e) {
                $(this).removeClass('item-focus');
            })
            .on('touchstart mousedown', function (e) {
                if (!$(this).hasClass('item-focus')) {
                    $(this).addClass('item-focus');
                }
            })
            .on('touchend mouseup', function (e) {
                $(this).removeClass('item-focus');
            });

        this.$el.file.on("change", this.fileUpload);
        this.editor.on('paste', function() {
            context.isNewData = true;
            context.clearAutoDetectedLanguage();
        });
        this.editor.on('drop', this.dropFile);
        this.editor.on('change', this.onEditorChange);


        this.$el.btnBrowse.on("click", this.onBrowseButtonClick);

        this.$el.btnClear.on("click", this.onClearButtonClick);
        this.$el.btnFormat.on('click', this.onFormatButtonClick);
        this.$el.btnDownload.on("click", this.showModalDownloadFile);
        this.$el.btnLoadUrl.on("click", this.showModalLoadUrl);

        this.$el.modalBtn.on("click", this.onModalButtonClick);
        this.$el.modalInput.on("keyup", this.onModalKeyUp);
        this.$el.modal.unbind("keyup").bind('keyup', this.onModalKeyUp);
        this.$el.modalBackdrop.on('click', this.closeModal);
        this.$el.modalBtnClose.on('click', this.closeModal);

    },

    closeModal: function() {
        this.$el.modal.hide();
        this.$el.modalBackdrop.hide();
        this.$el.modalErrorHint.attr('hidden', '');
        this.$el.modalInput.val('');
    },

    onEditorChange: function(cm, changeObject) {
        if (this.editor.getValue() === "") {
            this.clearAutoDetectedLanguage();
        }
    },

    onBrowseButtonClick: function () {
        this.$el.file.trigger("click");
    },

    onModalKeyUp: function(e) {
        this.$el.modalErrorHint.attr('hidden', '');
        if (e.which === 13) {
            this.onModalButtonClick();
            return false;
        }

        if (e.which === 27) {
            this.closeModal();
            return false;
        }
    },

    onModalButtonClick: function() {
        var value = this.$el.modalInput.val();
        if (value) {
            if (this.$el.modal.data('type') === 'download') {
                this.downloadFile(value);
                this.closeModal();
            } else {
                this.loadUrl(value);
            }
        }
    },

    getFileNameFromUrl: function(url) {
        var pattern =/\.(css|html|json|js|php)/i;
        if (url)
        {
            if (pattern.test(url))
            {
                return url.split('/').pop().split('#')[0].split('?')[0];
            }
        }
        return "";
    },

    loadUrl: function(url) {
        var context = this;
        $.get(url, function(result) {
            context.editor.setValue(result);
            context.closeModal();
            context.fileName = context.getFileNameFromUrl(url);
            context.clearAutoDetectedLanguage();
        }).fail(function (error) {
            context.$el.modalErrorHint.removeAttr('hidden');
        });
    },

    dropFile: function(e) {
        this.onClearButtonClick();
    },

    clearAutoDetectedLanguage: function() {
        if (this.isAutoLanguageDetectEnabled()) {
            this.$el.menuItems.removeClass(this.options.mainButtonActiveClass);
        }
    },

    showModalLoadUrl: function (e) {
        this.$el.modal.find('.modal-title').text(this.options.text.load.header);
        this.$el.modalBtn.text(this.options.text.load.button);
        this.$el.modalInput.val(null);
        this.showModal();
        this.$el.modal.data('type', 'load-url');
    },

    showModalDownloadFile: function(e) {
        if (this.fileName) {
            this.$el.modalInput.val(this.fileName);
        }
        this.$el.modal.data('type', 'download');
        this.$el.modal.find('.modal-title').text(this.options.text.download.header);
        this.$el.modalBtn.text(this.options.text.download.button);
        this.showModal();
        e.preventDefault();
    },

    showModal: function() {
        this.$el.modal.addClass('show')
        this.$el.modal.show();
        this.$el.modalInput.focus();
        this.$el.modalBackdrop.show();
    },

    onClearButtonClick: function() {
        this.editor.setValue("");
        this.editor.clearHistory();
        this.clearAutoDetectedLanguage();
    },

    fileUpload: function() {
        var input = this.$el.file[0];
        var file = input.files[0];
        if (file) {
            this.readFileData(file);
        }
    },

    readFileData: function(file) {
        this.fileName = file.name;

        var fileReader = new FileReader();
        var context = this;
        fileReader.onload = function () {
            context.editor.setValue(fileReader.result);
            context.$el.file.val('');
            context.clearAutoDetectedLanguage();
        };

        fileReader.readAsText(file);
    },

    activateMenu: function(language) {
        $('a[href="' + language + '"]').addClass(this.options.mainButtonActiveClass);
    },

    onFormatButtonClick: function () {
        var context = this;

        if (this.editor.getValue() === '' || this.isFormat){
            return;
        }

        var options = {};
        var tabWidth = this.getTabSize();
        var parser = null;

        this.disableInterface();
        this.codeMirror.lineCount = this.editor.lineCount();

        var menuItem = null;
        if (this.isAutoLanguageDetectEnabled()) {
            var language = this.getLanguage(context.editor.getValue());
            if (language) {
                this.$el.menuItems.removeClass(this.options.mainButtonActiveClass);
                menuItem = this.getMenuItem(language);
                this.activateMenu(language);

                parser = menuItem.parser;
            }
        } else {
            menuItem = this.getSelectedMenuItem();
            parser = menuItem.parser;
        }

        this.editor.setOption("mode", menuItem.mode);

        this.editor.setOption("tabSize", tabWidth);
        options.printWidth = this.printWidth;
        options.tabWidth = tabWidth;
        options.parser = parser;

        this.worker.postMessage({
            text: context.editor.getValue(),
            options: options
        });
    },

    onWorkerPostMessage: function (event) {
        //console.log(event);
        if (event.data.text) {
            var scrollInfo = this.editor.getScrollInfo();
            this.editor.setValue(event.data.text);
            if (this.codeMirror.lineCount !== 1) {
                if (this.isNewData) {
                    this.editor.scrollTo(0, 0);
                } else {
                    this.editor.scrollTo(scrollInfo.left, scrollInfo.top);
                }
            }
            this.isNewData = false;
        }

        if (event.data.error) {
            var position = this.getCursorPositionFromError(event.data.error);
            this.jumpToEditorLien(position.line);
            this.editor.addLineClass(position.line, 'background', 'line-error');
        }
        this.enableInterface();
    },

    getCursorPositionFromError: function(e) {
        if (e.message.indexOf("Parse Error") !== -1) {
            var line = e.message.split("\n")[0].match( /\d+/);
            return {line: parseInt(line) - 2, charNumber: null};
        }

        const errorElements = e.message.split('\n');
        var line = errorElements[0];
        const match = /([0-9]+):([0-9]+)/g.exec(line);
        if (match && match.length === 3) {
            const lineNumber = match[1] - 1;
            const charNumber = parseInt(match[2]) - 1;
            return {line: lineNumber, ch: charNumber};
        }
        return null;
    },

    jumpToEditorLien: function(lineNumber) {
        var lineTop = this.editor.charCoords({line: lineNumber, ch: 0}, "local").top;
        var middleHeight = this.editor.getScrollerElement().offsetHeight / 2;
        this.editor.scrollTo(0, lineTop - middleHeight - 5);
    },

    disableInterface: function() {
        this.$el.btnFormat.addClass("disabled");
        this.$el.btnFormatLabel.hide();
        this.$el.btnFormatLoader.show();
        this.isFormat = true;
    },

    enableInterface: function() {
        this.$el.btnFormat.removeClass("disabled");
        this.$el.btnFormatLabel.show();
        this.$el.btnFormatLoader.hide();
        this.isFormat = false;
    },

    getLanguage: function(text) {
        var highlighResponse = hljs.highlightAuto(text, this.autoDetectLanguages);
        if (highlighResponse) {
            return highlighResponse.language;
        }
    },

    getMenuItem: function(language) {
        var keys = Object.keys(this.options.menu);
        for(var i = 0; i< keys.length; i++) {
            var key = keys[i];
            var menuItem = this.options.menu[key];
            if (menuItem.language === language) {
                return menuItem;
            }
        }

        return null;
    },

    getSelectedMenuItem: function() {
        var language = $('.' + this.options.mainButtonActiveClass).attr('href');
        return this.getMenuItem(language);
    },

    isAutoLanguageDetectEnabled: function() {
        return this.options.menuId === '/';
    },

    downloadFile: function(fileName) {
        var menuItem = this.getSelectedMenuItem();
        var mime = menuItem.mime;
        var data = this.editor.getValue();
        try {
            var b = new Blob([data],{type:mime});
            saveAs(b, fileName);
        } catch (e) {
            window.open("data:" + mime + "," + encodeURIComponent(data));
        }
    },

    getTabSize: function () {
        return parseInt(this.$el.tabSize.val());
    }
});
