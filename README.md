# marp-beamer

[Marp](https://marp.app/) theme, with [Beamer](https://ctan.org/pkg/beamer)-like components, and [Nord](https://www.nordtheme.com/)-like color scheme.

## Usage

```bash
# install nodejs: https://nodejs.org/dist/v16.18.0/node-v16.18.0-x64.msi
npm install -g yarn
npm install -g @marp-team/marp-cli
npx browserslist@latest --update-db
```

```bash
git clone https://github.com/CUG-hydro/marp-beamer
cd marp-beamer
yarn
# npx @marp-team/marp-cli --server ./slides
```

## Example

| Type | 源文件 |渲染结果 |
| ---- |------- | ------ |
| 低级语法 | [low_level.md](./examples/low_level.md)   | [low_level.html](https://cug-hydro.github.io/marp-beamer/pages/beamer_low.html) |
| 高级语法 | [high_level.md](./examples/high_level.md) | [high_level.html](https://cug-hydro.github.io/marp-beamer/pages/beamer_high.html)|
