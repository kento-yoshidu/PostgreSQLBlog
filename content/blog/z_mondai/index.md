---
title: "問題"
postdate: "2023-04-09"
update: "2023-04-09"
seriesName: "ハンズオンPostgreSQL"
seriesSlug: "HandsOnPostgreSQL"
tags: ["PostgreSQL", "Docker"]
keywords: ["PostgreSQL", "Database", "DB", "Docker"]
published: false
---

# 重要度4

## G1.2 運用管理用コマンド全般

### GUCパラメーター

再起動は(①)。


|パラメーター|説明|
|---|---|
|②|ログ収集を行うか|

### バックアップの種類

pg_dump、pg_dumpallは(①)バックアップに分類される。tar/rsyncなどのコマンドによるバックアップは（②）バックアップに分類される。

pg_dumpは(③)や(④)を指定できる。

### PITR

PITRを行うため、WALに書き込む内容を設定する(①)を(②)もしくは(③)にすること、WALアーカイブを保存するかを設定する(④)を(⑤)にすることが必要。なお、(④)はデフォルトで(⑤)になっている。

参考 : [いつかDBがぶっ壊れるその日まで~ポイントインタイムリカバリ~ | 株式会社ロジカルスタジオ](https://www.wantedly.com/companies/logical-studio/post_articles/287569)

### その他コマンド

CLUSTERは(①)の並び順を適切に配置しなおす。

VACUUMは(②)と(③)を処理する。


## pg_stat_activity

|列名|説明|
|---|---|
|datid|バックエンドが接続するDBのOID|
|pid|バックエンドのプロセスID|
|client_port|クライアントがバックエンドとの通信に使用するポート番号|
| ① |トランザクションが開始した時刻|
| ② | stateの最終変更時刻|


|問|答|
|---|---|
| ① |xact_start|
| ② |state_change|

## pg_stat_archiver

|列名|説明|
|---|---|
|archived_count|アーカイブに成功したWALファイルの数|
| ① |アーカイブに成功した**最後の**WALファイルの名前|
|last_archive_time|最後に成功したアーカイブの時刻|
|failed_count|アーカイブに失敗した回数|
| ② |最後に失敗したアーカイブの時刻|
|last_failed_wal|アーカイブに失敗した最後のWALファイルの名前|
|stats_reset|統計情報がリセットされた時刻|

|問|答|
|---|---|
|①|last_archived_wal|
|②|last_failed_Time|

## pg_stat_bgwriter

クラスターの（①）に関するデータを保持します。形式は（②）です。

|列名|説明|
|---|---|
|

|問|説明|
|---|---|
|①|グローバルデータ|
|②|1行のみ|

## pg_statio_all_tables

データベースのテーブルのI/Oに関するデータを保持します。形式は（①）です。

|問|説明|
|---|---|
|①|テーブルごとに1行|
