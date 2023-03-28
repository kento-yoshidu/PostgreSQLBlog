---
title: "#1 ハンズオンPostgreSQL"
postdate: "2099-12-23"
update: "2099-12-23"
seriesName: "ハンズオンPostgreSQL"
seriesSlug: "HandsOnPostgreSQL"
tags: ["PostgreSQL", "OSS-DB"]
keywords: ["PostgreSQL", "Database", "DB"]
published: false
---

# ハンズオンPostgreSQL

以前からOSS-DB Silverの勉強をしており、先日合格しました。

この試験の勉強を進めながら、学んだことを残していこうと思いました。OracleDBやMySQLはネットでの情報や書籍も多いですが、PostgreSQLは少ないですよね。

もちろん公式リファレンスを見てもらうのが一番なんですが、PostgreSQLのリファレンスって**とても読みにくい**と思っています。

[PostgreSQL 12.4文書](https://www.postgresql.jp/document/12/html/)

OSS-DB Silverの受験対策としては後述するPing-tの講座がNo.1だと思っているのですが、Ping-tは選択肢を解いていくのみで手を動かしながら学習することはできません。

そこで、ハンズオン形式でPostgreSQLを学習できるシリーズを作ろうと思いました。一連の記事は仮想的にOSS-DB Silverの受験対策としてもご利用いただけます。ハンズオンで雰囲気をつかんだ後は、公式リファレンスに飛んで仕様を確かめてください。

対象は**最短合格を目指さず**、ハンズオンでゆっくり学習したい方です。「とにかく早く試験に受かりたい」という方には全くお勧めできません。

なお、SQLの基本的な文法については説明していませんのであしからず。

## おすすめの受験対策

前述しましたが、試験合格のためにはPing-tのみをやっておけばそれだけで十分です。ただし、プレミアムコンテンツであるため問題集は有料です。

以上！

## DDL

Data Definition Languageの略で、データを**定義**するSQLです。

- CREATE
- DROP
- ALTER
- TRUNCATE


## DML

Data Manipulation Languageの略で、データを**操作**するSQLです。いわゆるCRUDにあたるSQLが該当します。

## DCL

Data Control Languageの略で、システムを**管理**するSQLです。権限とトランザクションに関するSQLが該当します。

- BEGIN
- ROLLBACK
- COMMIT
- GRANT
- REVOKE

## 記事一覧

- 関数
- トリガー
