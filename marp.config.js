const { Marp } = require("@marp-team/marp-core");
const markdownItContainer = require("markdown-it-container");
const markdownItSup = require("markdown-it-sup");
const markdownItSub = require("markdown-it-sub");

// style
const nord = [
  // Polar Night
  "#2E3440", "#3B4252", "#434C5E", "#4C566A",
  // Snow Storm
  "#D8DEE9", "#E5E9F0", "#ECEFF4",
  // Frost
  "#8FBCBB", "#88C0D0", "#81A1C1", "#5E81AC",
  // Aurora
  "#BF616A", "#D08770", "#EBCB8B", "#A3BE8C", "#B48EAD",
];

const theme = marp.themeSet.add(marp.themeSet.pack("default", {
  after: `
        /* @theme nordic-beamer */

        /* header, footer, paginate */
        header, footer, section::after {
          color: ${nord[0]};
          font-size: 22px;
          position: absolute;
          top: auto;
          bottom: 18px;
          white-space: nowrap;
        }
        header {
          left: 30px;
        }
        footer {
          left: 600px;
        }
        section::after {
          right: 30px;
        }
        section > p > img:not(.emoji) {
          display: block;
          margin: 0 auto;
        }
        section.image-left > p > img:not(.emoji) {
          margin-right: auto;
          margin-left: 0;
        }
        section.image-right > p > img:not(.emoji) {
          margin-left: auto;
          margin-right: 0;
        }

        /* default slide */
        section {
          justify-content: start;
          padding: 50px;
          padding-top: 100px;
          line-height: 1.2;
        }
        section details, section dl, section ol, section p,
        section pre, section table, section ul {
          margin-bottom: 10px;
        }
        section > h1:first-child, section > h1:nth-child(2) {
          position: absolute;
          width: 1280px;
          height: 75px;
          margin: 0;
          padding-top: 5px;
          padding-left: 30px;
          top: 0;
          left: 0;
          background-color: ${nord[0]};
          color: ${nord[6]};
        }
        section > h1:first-child + *, section > h1:nth-child(2) + * {
          margin-top: 0;
        }

        /* class: title */
        section.title {
          border: solid 1px black;
          padding-top: 420px;
          text-align: center;
        }
        section.title > h1 {
          position: absolute;
          width: 1280px;
          font-size: 72px;
          top: auto;
          bottom: 300px;
          left: 0;
          height: auto;
          min-height: 180px;
          margin: 0;
          padding-left: 0;
          padding-right: 0;
          background-color: ${nord[0]};
          color: ${nord[6]};
        }
        section.title > h2 {
          margin-bottom: 0;
          padding-bottom: 0;
        }
        section.title > h2 + h2 {
          margin-top: 0;
        }
        section.title > h2 + * {
          margin-top: 10px;
        }
        section.title::after, section.title > header, section.title > footer {
          display: none;
        }

        /* block */
        .block:not(.footnote) {
          background-color: ${nord[4]};
          margin-top: 10px;
          margin-bottom: 10px;
          border-radius: 20px;
        }
        .block:not(.footnote) > p {
          padding-left: 10px;
          padding-right: 10px;
        }
        .block:not(.footnote) > p:first-child {
          padding-top: 10px;
        }
        .block-head {
          padding-top: 5px !important;
          background-color: ${nord[0]};
          color: ${nord[6]};
          border-radius: 15px 15px 0 0;
          margin-bottom: 4px;
        }
        .info-head {
          background-color: ${nord[10]};
        }
        .warn-head {
          background-color: ${nord[11]};
        }
        .footnote {
          position: absolute;
          bottom: 40px;
          font-size: 0.7em;
          color: ${nord[2]};
        }
      `,
}));

module.exports = {
  engine: (opts) => {
    const marp = new Marp({
      ...opts,
      html: true,
    });

    // plugins
    marp.use(markdownItSup);
    marp.use(markdownItSub);
    /// containers
    const addContainerBox = (marp, tagName, className, modify = x => x) => {
      const re = new RegExp(`^${tagName}:?(.*)$`);
      const boxClass = `block ${className === "block" ? "" : className}`;
      const headClass = `block-head ${className === "block" ? "" : className + "-head"}`;
      marp.use(markdownItContainer, tagName, {
        validate: (params) => {
          return params.trim().match(re);
        },
        render: (tokens, idx) => {
          const m = tokens[idx].info.trim().match(re);
          const name = modify(m ? m[1] : "");
          if (tokens[idx].nesting === 1) {
            let ret = `<div class="${boxClass}">`;
            if (name) {
              ret += `<p class="${headClass}">${name}</p>`;
            }
            ret += `\n`;
            return ret;
          } else {
            return `</div>\n`;
          }
        }
      });
    };

    addContainerBox(marp, "block", "block");
    addContainerBox(marp, "black", "block");
    addContainerBox(marp, "info", "info", name => name || "info");
    addContainerBox(marp, "blue", "info", name => name || "info");
    addContainerBox(marp, "warn", "warn", name => name || "warn");
    addContainerBox(marp, "red", "warn", name => name || "warn");
    addContainerBox(marp, "footnote", "footnote");

    marp.themeSet.addTheme(theme);
    return marp;
  },
};

