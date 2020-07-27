# react-dnd-tutorial
react-dndの基礎を学ぶプロジェクト
tutorialに沿って実施。
ただしreact-creat-appは使わないため読み替え発生。

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
