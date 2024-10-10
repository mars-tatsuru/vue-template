# mp-frontend-admin-lab

mp-frontendのリポジトリ。UI／UX改善などで検討する際に使用。

Vue3 + TypeScriptで構成されたプロジェクトです。

## プロジェクトについて

### 使用技術

- **Vue 3**: 最新のVueフレームワークを使用
- **TypeScript**: 型安全性を確保し、開発効率を向上

### 開発に必要なパッケージ(devDependencies)

- **[vite](https://ja.vite.dev/)**: モダンなウェブ開発のためのビルドツールおよび開発サーバー
- **eslint**: JavaScriptとJSXのコードを静的解析するコアツール(v9.12.0, flat config採用)
  - **[@antfu/eslint-config](https://github.com/antfu/eslint-config)**: ESLintの設定プリセット
  - **[eslint-plugin-unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports)**: 未使用のimportを削除する
  - **[eslint-plugin-format](https://github.com/prettier/eslint-plugin-prettier)**: コードフォーマットルール提供
  - **[@typescript-eslint](https://typescript-eslint.io/)**: typescript用のlinter
  - **[eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss)**: tailwindのlinter
- **husky**: gitのフックを利用してコード品質を担保するためのツール
- **lint-staged**: ステージング状態のファイルに対してのみlintをかけるツール
- **unplugin-vue-components**: Vueコンポーネントの自動インポート
- **unplugin-auto-import**: APIの自動インポート
- **[unplugin-icons](https://github.com/unplugin/unplugin-icons)**: [Iconify](https://iconify.design/)のアイコンを簡易使用可能にするプラグイン

### アプリケーション実行時に必要なパッケージ(dependencies)

- **[pinia](https://pinia.vuejs.org/)**: store管理に必要なパッケージ
- **[vue-i18n](https://kazupon.github.io/vue-i18n/)**: 多言語対応に必要なパッケージ
- **[vue-router](https://router.vuejs.org/)**: ルーティングに必要なパッケージ
- **[@auth0/auth0-vue](https://github.com/auth0/auth0-vue)**: Auth0認証サービスを統合するためのライブラリ
- **[@vueuse/core](https://vueuse.org/)**: ロジックとユーティリティ関数を提供するライブラリ
- **[@unhead/vue](https://unhead.unjs.io/)**: headマネージャー(ページtitleなどを管理)

### フレームワーク・ライブラリ

- **[shadcn-vue](https://www.shadcn-vue.com/)**: shadcnのvueバージョン
  - radix-vue,@radix-icons/vue,class-variance-authority,clsx,tailwind-merge,tailwindcss-animateはinit時にinstallされたもの
- **tailwindcss**: cssフレームワーク
  - **autoprefixer**: tailwindのベンダープレフィックス

## ディレクトリ構造

```:md
mp-frontend-admin-lab/
│
├── public/
│   └── favicon.ico
│
├── src/
│   ├── assets/                  ← 静的リソースを格納
│   │   └── logo.png
│   ├── components/              ← componentを格納
│   │   ├── shadcn               ← shadcnの格納先
│   │   │   └── ui
│   │   │       └── Button.vue
│   │   ├── component.vue
│   │   └── ...
│   ├── composables/             ← コンポネントの共通ロジック格納(auth系など)
│   │   ├── index.ts
│   │   └── ...
│   ├── lib/                     ← アプリケーション全体の共通関数、定数を格納
│   │   ├── utils.ts
│   │   └── ...
│   ├── pages/                   ← appのviewを格納
│   │   ├── Home.vue
│   │   └── About.vue
│   ├── router/                  ← ルーティングを制御するファイルを格納
│   │   └── index.ts
│   ├── store/                   ← piniaを利用したグローバルで使用する変数などを格納
│   │   └── index.ts
│   ├── App.vue                  ← アプリケーション
│   ├── auto-imports.d.ts
│   ├── components.d.ts
│   └── main.ts
│
├── .editorconfig                ← 異なるエディタ、IDE間での差異をなくすもの
├── .gitignore
├── env.d.ts
├── eslint.config.js             ← eslintのルール
├── index.html
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## プロジェクトのセットアップと実行

### モジュールのインストール

```sh
pnpm install
```

### 開発環境の起動

```sh
pnpm dev
```

### esLintのfix

```sh
pnpm eslint
```

## 開発ガイドライン

1. コミット前に必ずlintチェックが実行されます（huskyによる設定）。
2. componentsについての説明
