# ベースイメージとしてNode.jsの軽量バージョンを使用
FROM node:20-alpine

# コンテナ内の作業ディレクトリを設定
WORKDIR /usr/src/app

# package.json と package-lock.json を作業ディレクトリにコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのコードをコピー
COPY . .

# Fargateでリッスンするポートを公開
EXPOSE 8080

# アプリケーションを起動
CMD [ "npm", "start" ]