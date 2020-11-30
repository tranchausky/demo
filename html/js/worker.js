

importScripts("polyfill.min.js");
importScripts("standalone.js");
importScripts("parser-babel.min.js");
importScripts("parser-html.min.js");
importScripts("parser-postcss.js");
importScripts("standalone.min.js");
onmessage = function(event) {
    try {
        console.log(event);
        event.data.options.plugins = prettierPlugins;
        var text = event.data.text;
        var result = prettier.format(text, event.data.options);
        console.log("Prettier worker is finished");
        postMessage({text: result});
    } catch (e) {
        postMessage({error: {message: e.message}});
    }
};

