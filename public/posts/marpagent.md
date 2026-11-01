---
title: "MarpAgent: Markdownでスライドを作り，描画を見て仕上げる"
date: "2026-06-03"
updated: "2026-11-01"
summary: "AIエージェントとMarkdownの原稿を改稿し，描画を見ながら仕上げる自作ツールMarpAgentを紹介する．最初の1枚の試作から，テーマと配置，表示崩れの検証，発表・配布まで，現在の作例と使い始め方をまとめる．"
---

2026-11-01更新．制作の進め方，スキル構成，紹介用作例に合わせて改稿した．

**GitHub**: [takumi-nishimura/MarpAgent](https://github.com/takumi-nishimura/MarpAgent)

スライドをMarkdownで書ける[Marp](https://marp.app/)は，本文や図を原稿として管理しやすい．ただ，原稿が正しくても，図を置くと文字が読めない，キャプションが離れる，本文が画面端で切れるといった問題は残る．AIエージェントに原稿を書かせる場合も，実際の表示を見ながら直す作業が必要になる．

**MarpAgent**は，原稿の編集，描画の確認，表示崩れの検出，発表・配布までを同じ環境で進めるために作ったツールである．CLIの名前は`marpx`．Marpを土台に，テーマと配置部品，コーディングエージェント向けの執筆・改稿スキルを組み合わせている．

[紹介用の10枚の作例](https://github.com/takumi-nishimura/MarpAgent/blob/main/decks/example/slide.pdf)では，制作の依頼から点検・改稿，発表・配布までを説明している．[原稿](https://github.com/takumi-nishimura/MarpAgent/blob/main/decks/example/slide.md)も同じ場所に置いているので，描画結果と書き方を見比べられる．

## 最初の1枚を試し，同じ原稿を改稿する

目的，聴衆，発表時間，参照資料は，短い`brief.md`に残す．ページの見出しや順序，本文，図表は`slide.md`へ直接書く．重要な図や説明の難しいページを早めに試作し，図の大きさと説明に必要な面積を確かめてから，全体へ広げていく．

例えば，PDFとHTMLの配布方法を説明するなら，それぞれの特徴を並べるだけでは違いを拾いにくい．作例では，主な用途と渡すものという共通の観点を表に置き，見比べられる形へ改稿している．その後に再描画して，文字や表が収まるかを確認する．

[![PDFとHTMLの説明を，共通の観点を持つ比較表へ改稿する例](/posts/img/marpagent/workflow-revision-20261101.png)](/posts/img/marpagent/workflow-revision-20261101.png)

*何を点検して，原稿をどう直すかを示す説明用の作例．画像を開くと拡大して見られる．理解度の改善を測定した結果ではない．[画像に対応する原稿](https://github.com/takumi-nishimura/MarpAgent/blob/4297158341e086d6acb8f3ea7d2bae774b4d7a2c/decks/example/slide.md)*

ページの追加や並べ替えも，同じ`slide.md`で行う．目的や条件が変わったらbriefを更新するが，原稿と別に構成案を同期し続ける手順にはしていない．`outline.md`の自動生成は旧形式向けの互換機能として残している．既存のoutlineに固有の条件があれば読み取り，新しく作る場合の標準手順からは外している．

## エージェントには目的と材料を渡す

エージェントに依頼するときも，先に目的と材料を渡す．次は，リポジトリのREADMEと作例を参照させる依頼の例である．

> Markdownの基本を知る学生に，MarpAgentでスライドを作り，配布する手順を10分で紹介したい．READMEと作例をもとに，PDFと発表用HTMLを用意してほしい．重要な比較ページを先に試し，描画を見て直してから全体を仕上げてほしい．

作成と改稿には，同梱の`slide-author`を使う．新規作成，既存ページの修正，ページ追加を一つの手順で扱い，描画・自己点検・修正までを含める．所見だけを求める点検には`slide-review`を使い，修正も依頼された場合は執筆と同じ手順で直す．

| タスク | スキルと依頼の例 |
| :--- | :--- |
| 新しいデッキを作る | `/slide-author my-talk`に，目的と資料を添える |
| 既存の原稿を改稿・追加する | `/slide-author decks/my-talk/slide.md`に，直したい内容や追加位置を添える |
| 内容と描画の所見を得る | `/slide-review decks/my-talk/slide.md`を使う |

旧`slide-new`，`slide-edit`，`slide-add`は`slide-author`へ統合した．呼び出し方は利用するエージェントに依存する．スラッシュコマンドがない環境では，`AGENTS.md`と対応する`.agents/skills/<name>/SKILL.md`を読ませる．配置や部品，検証の詳しい参照スキルも，この制作手順から使う．

## 内容の関係に合わせて配置を選ぶ

テーマは，研究発表向けの`lab`，控えめな`muji`，コントラストの強い`toshiba`の3つがある．紹介用の作例には`lab`を使っている．共通の配置部品から，比較表，幅の異なる段組み，図と解説などを組み立てられる．[配置のひな形](https://github.com/takumi-nishimura/MarpAgent/blob/main/template/README.md)は，内容の関係から構図を選ぶための出発点になる．

通常のページでは，見出しと本文領域を分ける．短い説明や表は見出しから一定の間隔で続け，本文が少ないという理由だけでは中央へ置かない．図と解説を対応させたい場合には中央配置を使い，画像とキャプションは一組として扱う．テーマは共通の余白や文字の階層を支えるが，何を大きく見せ，何を近くに置くかは，伝える内容に合わせて選ぶ．

図はMermaidとD2，数式はKaTeXとMathJaxに対応し，コードには構文強調と行の強調を使える．日本語の本文はBudouXで文節単位に折り返す．ただし，図のラベルやキャプションが読めるかは，実際の素材を置いて確かめる必要がある．D2の導入や日本語フォントの指定は，[利用ガイド](https://github.com/takumi-nishimura/MarpAgent/blob/main/docs/d2.md)にまとめている．

## 表示崩れを実描画で検出する

バリデータはブラウザでスライドを描画し，画面端での欠け，文字の重なり，小さすぎる文字，画像の読み込み失敗，図や数式の描画エラーを調べる．箇条書きの数や見出しの長さによる判定は，必要なときに追加する補助ヒントとして分けている．

```bash
npm run marpx -- decks/my-talk/slide.md -v --strict
```

`--strict`を付けると，描画検査を実行できない場合もエラーで終了する．必要に応じて`--report-dir out/my-talk`で結果と確認用画像を残せる．自動修正の対象は，一部の小さい文字サイズのclassや`<small>`などに限り，`--autofix --dry-run`で先に差分を確認できる．

検査に通っても，主張と根拠の対応や，投影時の読みやすさまで保証されるわけではない．全ページの描画と話の順序を見直し，図中の文字，凡例，出典，留保を確認する．全体構成には，スライドを一覧するオーバービューを使う．

[![紹介用デッキをサムネイルで並べたオーバービューの表示例](/posts/img/marpagent/overview-20261101.png)](/posts/img/marpagent/overview-20261101.png)

*`--overview`による一覧表示．説明の不足や重複を見つけ，必要なら原稿に補足したり，ページの順序を変えたりする．*

## 同じ原稿から発表・配布する

発表用HTMLにはレーザーポインタがあり，説明箇所を指し示せる．長い表や付録では`<!-- _scroll: true -->`を指定して本文を縦にスクロールでき，同じブラウザの発表セッションでは発表者画面とも位置を同期する．PDF・PPTX・画像に出力されるのは最初の表示範囲なので，静的な配布物へ全文を載せるときはページを分ける．

[![Markdown原稿から出力する形式と，配布後の確認事項](/posts/img/marpagent/distribution-20261101.png)](/posts/img/marpagent/distribution-20261101.png)

*PDFは閲覧・印刷，PPTXはPowerPoint，HTMLと素材のZIPはブラウザでの発表に使う．出力ファイルを開き，改行や図表，操作を確認する．[画像に対応する原稿](https://github.com/takumi-nishimura/MarpAgent/blob/4297158341e086d6acb8f3ea7d2bae774b4d7a2c/decks/example/slide.md)*

別のPCへHTMLを渡すときは，参照する画像やCSSなどをまとめるZIP出力を使う．生成済みの図も含まれるため，受け手はD2を用意する必要がない．ZIPにはMarkdown原稿やbriefは含まれないので，共同編集する場合は原稿と素材を別途渡す．

```bash
npm run marpx -- decks/my-talk/slide.md --pdf
npm run marpx -- decks/my-talk/slide.md --zip --dry-run
npm run marpx -- decks/my-talk/slide.md --zip --output out/my-talk.zip
```

`--dry-run`では，収集する素材や外部への依存を確認する．標準テーマにはGoogle Fontsへの参照があり，外部資源はZIPへ自動でダウンロードされない．完全なオフライン用に依存を揃えたか検査したい場合は，`--zip --strict-offline`を使う．外部URLなどが残っていれば失敗する指定である．展開後の`index.html`の開き方や，ブラウザの制約を避けるローカルHTTPサーバでの閲覧は，[配布の利用ガイド](https://github.com/takumi-nishimura/MarpAgent/blob/main/docs/usage.md#distribute-html)を参照してほしい．

## 手元の図や表で使い始める

リポジトリを取得し，実行環境と依存を用意する．miseを使う場合は，次の手順で固定版のNode.js 25.6.0とD2 0.9.0を導入する．

```bash
git clone https://github.com/takumi-nishimura/MarpAgent.git
cd MarpAgent
mise install
mise exec -- npm ci
mise exec -- npx playwright install --with-deps chromium
```

Chromiumは描画検証とPDF・PPTX・画像の出力に使う．全E2Eテストを実行する場合はFirefoxも用意する．Node.jsを別の方法で管理する場合は，[READMEの環境構築手順](https://github.com/takumi-nishimura/MarpAgent#prerequisites)を参照してほしい．

まずは紹介用デッキを開き，表示と原稿を見比べる．その後に新しいデッキを作り，`brief.md`と`slide.md`を編集する．

```bash
# Preview the introduction. Stop it with Ctrl+C before the next command.
npm run marpx -- decks/example/slide.md

# Create a deck, then edit brief.md and slide.md.
npm run marpx -- -n decks/my-talk

# Preview the draft. Stop it before starting the overview.
npm run marpx -- decks/my-talk/slide.md
npm run marpx -- decks/my-talk/slide.md --overview

# After stopping the overview, validate and export.
npm run marpx -- decks/my-talk/slide.md -v --strict
npm run marpx -- decks/my-talk/slide.md --pdf
```

最初は，手元の図や表を1枚のページへ置いてみる．読める大きさか，説明と対応しているかを確かめ，同じ原稿を直してから全体へ広げる．MarpAgentでは，その試作・描画・改稿と，仕上げの検証・出力を続けて進められるようにしている．
