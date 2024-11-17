# Yumemi Fontend code test app

テストの仕様: https://yumemi.notion.site/0e9ef27b55704d7882aab55cc86c999d

## 環境構築

1. 環境変数を設定

```bash
cp -r .env.example .env
```

`.env`ファイルの中の`VITE_X_API_KEY`にhttps://yumemi-frontend-engineer-codecheck-api.vercel.app/api-doc からX-API-KEYを取得して入れてください

2. 依存関係をインストール

```bash
pnpm install
```

3. **開発サーバーの起動**

```sh
pnpm run dev
```

4. Webブラウザを開く

http://localhost:3000
