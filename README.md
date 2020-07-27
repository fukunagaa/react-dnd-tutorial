# react-dnd-tutorial

react-dnd の基礎を学ぶプロジェクト
tutorial に沿って実施。
ただし react-creat-app は使わないため読み替え発生。

## プロジェクト作成

- ディレクトリ作成

```
$ mkdir react-dnd-tutorial
$ cd react-dnd-tutorial
```

- 初期化

```
$ npm init -y
```

- react を使用するため以下をインストール

```
$ npm install --save--dev @babel/core^7.10.5,
$ npm install --save--dev @babel/plugin-proposal-class-properties^7.10.4,
$ npm install --save--dev @babel/polyfill^7.10.4,
$ npm install --save--dev @babel/preset-env^7.10.4,
$ npm install --save--dev @babel/preset-react^7.10.4,
$ npm install --save--dev babel-loader^8.1.0,
$ npm install --save--dev webpack^4.44.0,
$ npm install --save--dev webpack-cli^3.3.12,
$ npm install --save--dev webpack-dev-server^3.11.0
$ npm install --save @types/react-dom^16.9.8,
$ npm install --save react^16.13.1,
$ npm install --save react-dom^16.13.1
```

- react-dnd をインストール

```
$ npm install --save react-dnd react-dnd-html5-backend
```

## 補足

### React DnD とは

> [公式] https://react-dnd.github.io/react-dnd/docs/overview

#### バッグエンド

React DnD は、HTML5 ドラッグアンドドロップ API の上に構築されている
ドラッグされた DOM ノードの画像を作成し、ボックスから「dragPreview」として使用します。
この API は、ファイルドロップイベントを処理する唯一の方法でもあります。

#### トップレベル API

レガシーは今回省く

- useDrag
  現在のコンポーネントをドラッグソースとして使用

- useDrop
  現在のコンポーネントをドロップターゲットとして使用

- useDragLayer
  現在のコンポーネントをドラッグレイヤーとして使用

- DndProvider
  DndProvider コンポーネントは、アプリケーションに React-DnD 機能を提供する
  HTML5Backend を介してバックエンドで注入する必要がありますが、window オブジェクトで注入することもできるみたい。

- DragPreviewImage
  dragPreview として HTML 画像要素をレンダリングするコンポーネント。
