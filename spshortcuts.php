<?php
/* This extension defines:
   - three extra JS files that handle keyboard shortcuts for every page
   - a modified version of the access keys help tooltip
*/

require_once 'spshortcuts.civix.php';

function spshortcuts_civicrm_config(&$config) {

	CRM_Core_Resources::singleton()
		->addScriptFile('nl.sp.shortcuts', 'js/mousetrap.min.js', 1001, 'page-footer', FALSE)
		->addScriptFile('nl.sp.shortcuts', 'js/shortcuts.defs.js', 1002, 'page-footer', FALSE)
		->addScriptFile('nl.sp.shortcuts', 'js/shortcuts.js', 1003, 'page-footer', FALSE);

  _spshortcuts_civix_civicrm_config($config);
}

/* End */

function spshortcuts_civicrm_xmlMenu(&$files) {
  _spshortcuts_civix_civicrm_xmlMenu($files);
}

function spshortcuts_civicrm_install() {
  return _spshortcuts_civix_civicrm_install();
}

function spshortcuts_civicrm_uninstall() {
  return _spshortcuts_civix_civicrm_uninstall();
}

function spshortcuts_civicrm_enable() {
  return _spshortcuts_civix_civicrm_enable();
}

function spshortcuts_civicrm_disable() {
  return _spshortcuts_civix_civicrm_disable();
}

function spshortcuts_civicrm_upgrade($op, CRM_Queue_Queue $queue = NULL) {
  return _spshortcuts_civix_civicrm_upgrade($op, $queue);
}

function spshortcuts_civicrm_managed(&$entities) {
  return _spshortcuts_civix_civicrm_managed($entities);
}

function spshortcuts_civicrm_caseTypes(&$caseTypes) {
  _spshortcuts_civix_civicrm_caseTypes($caseTypes);
}

function spshortcuts_civicrm_alterSettingsFolders(&$metaDataFolders = NULL) {
  _spshortcuts_civix_civicrm_alterSettingsFolders($metaDataFolders);
}
