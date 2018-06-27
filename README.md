# Sharing Lunch Application

## Overview
このアプリケーションは、チームメンバーがランチしたお店の情報を共有するためのアプリケーションです。

## How to use Dev environment
カレントディレクトリにて、下記コマンドを実行し、ローカル開発環境を立ち上げます。
```
$ ./start.command
```

## How to access localhost
ローカル開発環境のURLは`http://0.0.0.0:8080`です。

## vue-cli開発環境について
本アプリケーションの開発環境はDockerコンテナで作成されています。
開発環境のコンテナは、下記で管理されています。

### GitHub
- URL: https://github.com/dame-hal/devenv-vuecli

### DockerHub
- URL: https://github.com/dame-hal/devenv-vuecli

## 検証方法
1. テストコードを書いてあるので、更新時はCIツール上でテストを実施します。
2. テストが終わったら、上長に報告します。

## ESDoc出力手順
1. 本プロジェクトをCloneしたディレクトリに移動してください。
2. 下記コマンドでESDoc生成スクリプトが実行されます。
```
$ npm run esdoc
```
3. `docs`ディレクトリにESDocが出力されます。
