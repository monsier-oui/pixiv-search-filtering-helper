# pixiv search filtering helperとは
pixivにおいて、下記のようにタグ検索を補助するGreasemonkeyスクリプトです。利用するには、[Greasemonkey](https://addons.mozilla.org/ja/firefox/addon/greasemonkey/ "Greasemonkey :: Add-ons for Firefox")をインストールしたFirefoxが必要です。

## 何ができるのか
### 検索ボックスからの検索時に自動で条件を追加
submitイベント発火時に設定した検索条件を挿入します。スペースが入っていたら(部分一致検索なら)、括弧で囲ってから条件を挿入します。

![デモ](demo.gif)

### タグのリンク先を条件を加えた部分一致検索に変更
イラスト個別ページ(/member_illust.php?mode=medium)と検索結果ページ(/search.php)で、タグのリンク先を変更して設定した検索条件を加えます。

## 要するに何ができるのか
嫌いなタグが引っかからないように常にマイナス検索できます。絞り込み条件を追加するだけなので、OR検索もAND検索もできますけど、主な使い道はそれ。

## 使い方
1. [ここ](https://raw.githubusercontent.com/monsier-oui/pixiv-search-filtering-helper/master/pixiv_search_filtering_helper.user.js)をクリックしてインストール
2. Greasemonkey>ユーザスクリプトコマンド>pixiv search filtering helper - 設定
3. 常に追加したい検索条件を記入して保存

## ねらい
嫌いなもの、苦手なものを自分できちんと避ける人が少しでも増えてくれれば。