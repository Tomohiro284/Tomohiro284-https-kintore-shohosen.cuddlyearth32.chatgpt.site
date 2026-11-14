# 筋トレ処方箋

初心者から上級者まで、目的・器具・経験・部位に合わせて種目、重量、回数、セット数を組み立てる静的Webアプリです。

## 公開サイト

- GitHub Pages: https://tomohiro284.github.io/Tomohiro284-https-kintore-shohosen.cuddlyearth32.chatgpt.site/
- 既存公開版: https://kintore-shohosen.nomytin.chatgpt.site/

## 特長

- 504種目を収録（ケーブル・スパイダーカールを含む）
- 全種目を一括表示し、部位・器具・名前で絞り込み
- 1RMを4方式で推定
- PC・スマートフォン・タブレット対応
- 登録不要・APIキー不要
- 記録は端末内に保存、JSONで端末間移行
- 広告掲載枠、SEOメタデータ、robots.txt、sitemap.xmlを用意

## 公開方法

mainブランチへの更新でGitHub Pages用ワークフローが実行され、初回はPagesを有効化して以後は自動公開します。

## 広告掲載

AdSense等の審査後、発行された広告コードを3か所の `data-ad-placement` 要素へ設定し、`ads.txt` の例を実際のパブリッシャーIDへ置き換えてください。ID未設定でもサイト機能は停止しません。

## ファイル

- `index.html`: 画面・SEO・広告枠
- `style.css`: レスポンシブデザイン
- `script.js`: 計算・検索・保存（外部API不要）
- `images/`: 画像
- `manifest.webmanifest`, `sw.js`: インストール・オフライン補助
- `robots.txt`, `sitemap.xml`: 検索エンジン向け

## 注意

表示される重量・1RM・回数は推定値です。体調やフォームを優先し、痛みや異常がある場合は中止してください。
