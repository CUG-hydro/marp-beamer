# marp-theme-nordic-beamer

[Marp](https://marp.app/) theme, with [Beamer](https://ctan.org/pkg/beamer)-like components, and [Nord](https://www.nordtheme.com/)-like color scheme.

## Usage


```bash
# install nodejs: https://nodejs.org/dist/v16.18.0/node-v16.18.0-x64.msi
npm install -g yarn
npm install -g @marp-team/marp-cli
npx browserslist@latest --update-db
```

```bash
git clone https://github.com/n-ari/marp-theme-nordic-beamer
cd marp-theme-nordic-beamer
yarn
npx @marp-team/marp-cli --server ./slides
```

## 使用方法

```md
:::info:定理 1(オイラーの定理).
$n$ を正の整数とする。$a$ を $n$ と互いに素な正の整数とする。このとき、
$$a^{\varphi(n)} \equiv 1 \pmod n$$
が成り立つ。ただしここで、$\varphi(n)$ はオイラーのトーシェント関数である^†^。
:::

:::warn:注意
オイラーのトーシェント関数 $\varphi(n)$ は、$a^x\equiv 1\pmod n$ なる $x$ として最小のものを与えるわけではない。最小のものを与える関数としてカーマイケル関数 $\lambda(n)$ が存在し、これを **カーマイケルの定理** と呼ぶ。
:::

:::footnote
†: 特に素数 $p,q$ を用いて $n=pq$ である時、$\varphi(n) = (p-1)(q-1)$ である。
:::
```


## Example

See `slides/demo/index.md`, or [built demo slide on GitHub pages](https://n-ari.github.io/marp-theme-nordic-beamer/demo/).

