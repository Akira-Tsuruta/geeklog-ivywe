<?php

/*
 * Geeklog site configuration
 *
 * You should not need to edit this file. See the installation instructions
 * for details.
 *
 */

if (stripos($_SERVER['PHP_SELF'], basename(__FILE__)) !== false) {
    die('This file can not be used on its own!');
}

global $_CONF;

// To disable your site quickly, simply set this flag to false
$_CONF['site_enabled'] = true;

// If you have errors on your site, can't login, or can't get to the
// config UI, then you can comment this in to set the root debug option
// on and get detailed error messages. You can set this to 'force' (which the
// Config UI won't allow you to do) to override hiding of password and cookie
// items in the debug trace.
// $_CONF['rootdebug'] = true;

/**
 * Demo mode
 *
 * If you uncomment the line below the site will be in a demo mode. This will disable 
 * certain config options from being changed and from certain features being enabled.
 * This includes the File Manager, Saving of Static Pages, Uploading Plugins, and
 * Sending Bulk Emails. Some plugins may support this setting as well.
 * For more information see: http://wiki.geeklog.net/Setting_up_a_Demo_Site
 *
 * @since v2.2.0
 */
// $_CONF['demo_mode'] = true;

/**
 * Developer mode
 *
 * If you set this flag to true, detailed information will be displayed and/or logged.
 * When this flag is not set or set to false, all the options below DO NOT take effect.
 *
 * @var boolean
 * @since v2.1.2
 */
// $_CONF['developer_mode'] = true;

/**
 * This overwrites error_reporting level set in lib-common.php
 *
 * @var int
 * @see http://php.net/manual/en/function.error-reporting.php and for a list of PHP
 *      error constants see http://php.net/manual/en/errorfunc.constants.php
 * @since v2.2.0
 */
// $_CONF['developer_mode_php']['error_reporting'] = 4439; // -1 Will show every possible error. (Same as E_ALL in later versions of PHP)

/**
 * When these flags are set to true, detailed information will be logged respectively.
 *
 * @var bool
 * @since v2.2.0
 */
// $_CONF['developer_mode_log']['trace'] = true;        // Include call trace in log file
// $_CONF['developer_mode_log']['common'] = true;       // lib-common.php
// $_CONF['developer_mode_log']['database'] = true;     // lib-database.php
// $_CONF['developer_mode_log']['deprecated'] = true;   // Deprecated features
// $_CONF['developer_mode_log']['resource'] = true;     // Resource class
// $_CONF['developer_mode_log']['security'] = true;     // lib-security.php
// $_CONF['developer_mode_log']['session'] = true;      // lib-session.php
// $_CONF['developer_mode_log']['template'] = true;     // Template class
// $_CONF['developer_mode_log']['topic'] = true;        // lib-topic.php
// $_CONF['developer_mode_log']['user'] = true;         // lib-user.php
// $_CONF['developer_mode_log']['redirect'] = true;     // Redirect function

$_CONF['path'] = '/path/to/Geeklog/';
$_CONF['path_system'] = $_CONF['path'] . 'system/';

$_CONF['default_charset'] = 'utf-8';

$_CONF_FCK['imagelibrary'] = '/images/library';

// Useful Stuff
if (!defined('LB')) {
  define('LB',"\n");
}

if (!defined('VERSION')) {
  define('VERSION', '2.2.1');
}
