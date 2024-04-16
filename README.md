# vite-react-ts-template

このプロジェクトは Vite、TypeScript、React を用いた Web アプリケーション開発向けの Template です。
一部、サンプルとなるソースコードを含んでいます。

## How To Template

レポジトリ右上の緑の「Use this template」を押すことで、自分の Github アカウントに複製することができます。

レポジトリ URL: https://github.com/50ra4/vite-react-ts-template

![image](https://github.com/50ra4/vite-react-ts-template/assets/48591598/905405f9-aa49-4cdb-88d1-4e2af5bcf2fe)

特段、状態管理やスタイリングのライブラリなどを含んでいないので、お好みで`npm install`してお使いください。

## Setup

`git clone`後、プロジェクト直下で npm package の依存関係を install します。

```
npm i
```

別途、node.js（18.15.0）が必要です。

## Build

Vite を利用して、ソースコードを build します。
実行するとプロジェクト直下の dist のディレクトリに展開します。

```
npm run build
```

## Testing

Jest や `@testing-library/react` を用いて、テストを実行します。

```
npm run test
```

開発中にテストを実行する場合、Jest の watch オプションを追加することでソースファイルが変更される度にテストを実行します。

```
npm run test -- --watch
```

## Dev Server

Vite の plugin を利用して、HMR で開発できます。

```
npm run dev
```

## Linting

ESLint を利用し、Lint を実行しています。

```
npm run lint:eslint
```

VSCode の拡張機能と併用することで、ファイル保存時に実行します。
また、husky と併せて利用しており、commit 時にチェックを実行しているため、エラー状態での commit を抑止します。

## Formatting

prettier を利用し、コードの整形を行なっています。

```
npm run lint:prettier
```

VSCode の拡張機能と併用することで、ファイル保存時に実行します。
また、husky と併せて利用しており、commit 時にチェックを実行し、自動で整形します。

## Storybook

作成したコンポーネントの storybook を作成することで、作成したコンポーネントを確認できます

```
npm run storybook
```

静的ビルドすることも可能です。

```
npm run build-storybook
```

## TypeDoc

作成した関数や hooks のインターフェースを TypeDoc によってドキュメンテーションできます。

```
$ npm run build-typedoc
```

## CI

github actions を用いて CI を実行しています。
CI では、型定義、ビルド、testing を実行し、失敗しないことを確認できます。
ブランチを remote に push したタイミングで実行されます

## CD

github actions を用いて、作成した Web アプリケーションと storybook を Github Pages に公開します。
（github pages に公開するには、別途 github 上での設定が必要です）

```
npm run generate-gh-pages
```

### github pagesの公開方法

このTemplateから作成したGithubのRepositoryの`Settings`のタブから `Actions > General`を選択し、`Workflow permissions`を`Read and write permissions`に変更することでgithub pagesに公開されます。

<img width="760" alt="スクリーンショット 2023-09-09 20 25 37" src="https://github.com/50ra4/vite-react-ts-template/assets/48591598/547e201d-dfe1-4515-b360-4d94d220cc86">

