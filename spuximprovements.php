<?php
/* This extension defines:
   - three extra JS files that handle keyboard shortcuts for every page
   - a modified version of the access keys help tooltip
*/

require_once 'spuximprovements.civix.php';

/**
 * Add all our JS to the current request (called by function below).
 */
function _spuximprovements_load_assets() {
  CRM_Core_Resources::singleton()
      ->addScriptFile('nl.sp.uximprovements', 'js/mousetrap.min.js', 1001, 'page-footer', FALSE)
      ->addScriptFile('nl.sp.uximprovements', 'js/shortcuts.defs.js', 1002, 'page-footer', FALSE)
      ->addScriptFile('nl.sp.uximprovements', 'js/shortcuts.js', 1003, 'page-footer', FALSE)
      ->addScriptFile('nl.sp.uximprovements', 'js/bindfirst.min.js', 1011, 'page-footer', FALSE)
      ->addScriptFile('nl.sp.uximprovements', 'js/inputvalidation.js', 1012, 'page-footer', FALSE);
}

/**
 * Implements civicrm_hook_config.
 * @param mixed $config CiviCRM Config
 */
function spuximprovements_civicrm_config(&$config) {

  // There doesn't seem to be a reliable way to check for an ajax / inline request in CiviCRM. So we're checking ourselves.
  // (CRM_Core_Resources::isAjaxMode only exists in >= 4.6, and doesn't cover all cases either.)
  if ((isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest')) {
    return;
  }

  // If not an XHR request, add JS assets to page footer
  _spuximprovements_load_assets();
}

/**
 * Implements hook_postcodenl_get.
 * Van Jaap mag de plaatsnaam niet in hoofdletters in org.civicoop.postcodenl.
 * Dit is voor Oane en Mathijs. ;-)
 * @param array $returnValues Results returned by org.civicoop.postcodenl
 */
function spuximprovements_civicrm_postcodenl_get(&$returnValues = []) {
  if (count($returnValues) > 0) {
    foreach ($returnValues as &$r) {
      $r['gemeente'] = strtoupper($r['gemeente']);
      $r['woonplaats'] = strtoupper($r['woonplaats']);
    }
  }
}

/* Default Civix hooks follow */

function spuximprovements_civicrm_xmlMenu(&$files) {
  _spuximprovements_civix_civicrm_xmlMenu($files);
}

function spuximprovements_civicrm_install() {
  return _spuximprovements_civix_civicrm_install();
}

function spuximprovements_civicrm_uninstall() {
  return _spuximprovements_civix_civicrm_uninstall();
}

function spuximprovements_civicrm_enable() {
  return _spuximprovements_civix_civicrm_enable();
}

function spuximprovements_civicrm_disable() {
  return _spuximprovements_civix_civicrm_disable();
}

function spuximprovements_civicrm_upgrade($op, CRM_Queue_Queue $queue = NULL) {
  return _spuximprovements_civix_civicrm_upgrade($op, $queue);
}

function spuximprovements_civicrm_managed(&$entities) {
  _spuximprovements_civix_civicrm_managed($entities);
}

function spuximprovements_civicrm_caseTypes(&$caseTypes) {
  _spuximprovements_civix_civicrm_caseTypes($caseTypes);
}

function spuximprovements_civicrm_alterSettingsFolders(&$metaDataFolders = NULL) {
  _spuximprovements_civix_civicrm_alterSettingsFolders($metaDataFolders);
}
