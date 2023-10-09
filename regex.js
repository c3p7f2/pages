let html = automaRefData("variables", "html");

html = html.replace(/根的/g, "ROOT的");
html = html.replace(/微型世界/g, "迷你世界");
html = html.replace(/完全开放/g, "完全开源");
html = html.replace(/无根/g, "无ROOT");

html = html.replace(
  /[ֹ|ꔷ|-|*|@|—|!|……|“|”|"|《|》|！|？|?|◆|‘|’|：|-|【|】|『|』|［|］|「|」|(|)|〈|〈|〉|《|》|「|」|『|』|〔|〕|︵|︶|︷|︸|︹|︺|︻|︼|︽|︽|︾|︿|﹀|﹁|﹁|﹂|﹃|﹄|﹙|﹙|﹚|﹛|﹜|﹝|﹞|{|{|｝|˙|‥|‧|‵|‵|❛|❜|❝|❞|〃|「|」|『|』|〝|〞|︰|︰|﹁|﹂|﹃|﹄|﹐|﹒|﹔|﹔|﹕|!|%|&|*|.|：|;|?|@|～|(|)|（|）]/g,
  ""
);

html = html.replace(/现在，/g, "");
html = html.replace(/在游戏中，/g, "");
html = html.replace(/在此，/g, "");
html = html.replace(/如今，/g, "");
html = html.replace(/在这里，/g, "");
html = html.replace(/此外，/g, "");
html = html.replace(/也就是说，/g, "");
html = html.replace(/在游戏中，/g, "");
html = html.replace(/同时，/g, "");
html = html.replace(/有兴趣的,/g, "");
html = html.replace(/2265/g, "");

html = html.replace(/([\u4e00-\u9fa5]+)与+\1/g, "$1");
html = html.replace(/([\u4e00-\u9fa5]+)和+\1/g, "$1");
html = html.replace(/([\u4e00-\u9fa5]+)，+\1/g, "$1");
html = html.replace(/([\u4e00-\u9fa5]+)、+\1/g, "$1");
html = html.replace(/([\u4e00-\u9fa5]+)或+\1/g, "$1");

html = html.replace(/([\u4e00-\u9fa5]+)与+\1/g, "$1");
html = html.replace(/([\u4e00-\u9fa5]+)和+\1/g, "$1");
html = html.replace(/([\u4e00-\u9fa5]+)，+\1/g, "$1");
html = html.replace(/([\u4e00-\u9fa5]+)、+\1/g, "$1");
html = html.replace(/([\u4e00-\u9fa5]+)或+\1/g, "$1");

html = html.replace(/([\u4e00-\u9fa5]+)与+\1/g, "$1");
html = html.replace(/([\u4e00-\u9fa5]+)和+\1/g, "$1");
html = html.replace(/([\u4e00-\u9fa5]+)，+\1/g, "$1");
html = html.replace(/([\u4e00-\u9fa5]+)、+\1/g, "$1");
html = html.replace(/([\u4e00-\u9fa5]+)或+\1/g, "$1");

html = html.replace(
  /[ֹ|ꔷ|-|*|@|—|!|……|“|”|"|《|》|！|？|?|◆|‘|’|：|-|【|】|『|』|［|］|「|」|(|)|〈|〈|〉|《|》|「|」|『|』|〔|〕|︵|︶|︷|︸|︹|︺|︻|︼|︽|︽|︾|︿|﹀|﹁|﹁|﹂|﹃|﹄|﹙|﹙|﹚|﹛|﹜|﹝|﹞|{|{|｝|˙|‥|‧|‵|‵|❛|❜|❝|❞|〃|「|」|『|』|〝|〞|︰|︰|﹁|﹂|﹃|﹄|﹐|﹒|﹔|﹔|﹕|!|%|&|*|.|：|;|?|@|～|(|)|（|）]/g,
  ""
);

automaSetVariable("html", html);
automaNextBlock();
