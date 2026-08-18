# maro portfolio

フリーランスのフロントエンド / Webデザイン向けポートフォリオサイトです。

**本番URL:** [https://maro-dev.jp](https://maro-dev.jp)

Next.js の Static Export（SSG）でビルドし、Cloudflare Workers Static Assets で配信しています。

## 主な構成

| 項目 | 内容 |
|------|------|
| フレームワーク | Next.js 14（App Router） |
| UI | React 18 / Tailwind CSS |
| 3D | Three.js |
| ホスティング | Cloudflare Workers Static Assets |
| ビルド方式 | `output: "export"`（静的 HTML を `out/` に出力） |
| ドメイン | `maro-dev.jp`（`www` は apex へ 301 リダイレクト） |

## 機能・ページ構成

シングルページ構成です。

- **Hero** … キャッチコピーと Three.js 背景
- **Portfolio** … Webアプリ / Webデザインの実績一覧
- **Skill** … 利用技術・言語
- **Footer** … SNS・メール導線

## 開発環境

### 必要環境

- Node.js 18 以上（20 推奨）
- npm（または yarn）

### セットアップ

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

### 主なスクリプト

| コマンド | 説明 |
|----------|------|
| `npm run dev` | 開発サーバー起動 |
| `npm run build` | 静的エクスポート（`out/` 生成） |
| `npm run lint` | ESLint |
| `npm run preview` | ビルド後に Wrangler でローカル確認 |
| `npm run deploy` | ビルドして Cloudflare へデプロイ |

## デプロイ

### 初回のみ

```bash
npx wrangler login
```

### 本番デプロイ

```bash
npm run deploy
```

`next build` で `out/` を生成し、`wrangler deploy` で Workers にアップロードします。設定は `wrangler.jsonc` を参照してください。

デプロイ後の Worker 名は `maro-portfolio` です。独自ドメインは Cloudflare Dashboard の Workers → Domains で紐づけています。

### 静的エクスポート時の注意

- API Routes / SSR / ISR は使えません
- `next/image` は `images.unoptimized: true` で運用しています
- Cloudflare 側の HTML handling により `.html` 拡張子の扱いが変わるため、Search Console 確認用ファイルは `worker/index.js` で特別対応しています

## ディレクトリ構成（抜粋）

```text
app/                 # App Router（layout / page）
components/          # Hero, Portfolio, Skill, Header, Footer
public/              # 静的ファイル（画像, robots.txt, sitemap.xml, OGP など）
worker/              # Cloudflare Worker（確認ファイル用など）
next.config.mjs      # output: "export"
wrangler.jsonc       # Workers Static Assets 設定
```

## SEO / 公開まわり

以下を設定済みです。

- 独自ドメイン `https://maro-dev.jp`
- `metadataBase` / Open Graph / Twitter Card
- OGP 画像: `public/images/ogp.png`（1200×630）
- `public/robots.txt`
- `public/sitemap.xml`
- Google Search Console（HTML ファイル確認）
- `www.maro-dev.jp` → `maro-dev.jp` の Redirect Rule（Cloudflare）

### OGP を更新したとき

1. `public/images/ogp.png` を差し替え
2. `npm run deploy`
3. [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) で「もう一度スクレイピング」
4. X などでプレビュー確認

Search Console の確認ファイル `public/google44d6e75aeb3252b6.html` は削除しないでください。

## ライセンス

Private（個人ポートフォリオ用）
