<?php

/*
 * Geeklog database configuration
 *
 * You should not need to edit this file. See the installation instructions
 * for details.
 */
if (stripos($_SERVER['PHP_SELF'], basename(__FILE__)) !== false) {
    die('This file can not be used on its own!');
}

global $_DB_host, $_DB_name, $_DB_user, $_DB_pass, $_DB_table_prefix, $_DB_dbms, $_DB_charset;

$_DB_host = 'localhost';
$_DB_name = 'geeklog';
$_DB_user = 'username';
$_DB_pass = 'password';
$_DB_table_prefix = 'gl_';
$_DB_dbms = 'mysql';
$_DB_charset = 'utf8mb4';
