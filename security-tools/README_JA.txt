端末検査と公開前チェック

Windows: 管理者PowerShellで .\scan-device.ps1 -Mode Quick または -Mode Full
省略時は状態確認のみ。Defenderの定義を更新し、指定したスキャンを実行します。
隔離などの処理は既存Defenderポリシーに従います。結果はWindowsセキュリティの保護の履歴でも確認してください。

Mac / Linux: 信頼できる配布元からClamAVを導入し、freshclamで定義を更新した後、
sh scan-device.sh /絶対パス/検査対象
検出内容は端末に表示されます。自動削除・外部サービスへのファイル送信はしません。
定義が古い、権限不足、暗号化ファイル、サイズ・再帰制限では検査に限界があります。

公開前: Node.js で node security-tools/check-release.mjs index.html script.js style.css
指定したファイルの秘密鍵・既知トークン形式・動的コード実行・外部scriptを検出します。
検出値そのものは表示しません。すべての秘密情報や難読化コードの検出はできません。
GitHub Actionsに自動チェックを追加しますが、ブランチ保護やVercelのデプロイ停止とは連動していません。

検証: リリース検査5件とシェル構文を確認済み。Windows Defender / ClamAVの実機スキャンは未実行です。
スマホやタブレットの全領域検査はこのWebサイトやこれらのスクリプトではできません。
端末全体の常駐監視、通信全体のDLP、アカウント乗っ取り防止、WAFの代わりにはなりません。
すべてのウイルス・攻撃・情報流出を防ぐ保証はありません。

公式資料:
https://learn.microsoft.com/en-us/defender-endpoint/use-powershell-cmdlets-microsoft-defender-antivirus
https://docs.clamav.net/manual/Usage/Scanning.html
https://support.apple.com/guide/security/sec469d47bd8/web
