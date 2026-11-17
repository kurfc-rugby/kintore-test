// サーバー（Apps Script のウェブアプリ）のURL。新しいデプロイを作ってURLが変わったら、ここだけ書き換える
// （画面と Service Worker の両方で使うので window ではなく self に置く）
// （「デプロイを管理」→ 鉛筆 →「新バージョン」で更新すればURLは変わらない）
self.KINTORE_API = 'https://script.google.com/macros/s/AKfycby0-IyaulEa0ZAir8dNYS5NcoaZXbgjXrd5f_AcOjeaGfovgZsQD-9jNQdba1oBHB8Xew/exec';
// テスト環境：本番と同じ場所（kurfc-rugby.github.io）なので、保存やキャッシュの名前を分ける
self.KINTORE_STORE = 'kintoreTest';
