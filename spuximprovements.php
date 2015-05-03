<?php
/* This extension defines:
   - three extra JS files that handle keyboard shortcuts for every page
   - a modified version of the access keys help tooltip
*/

require_once 'spuximprovements.civix.php';

/**
 * Implements hook_config.
 * Adds our JavaScript to the page footer.
 * @param mixed $config CiviCRM Config
 */
function spuximprovements_civicrm_config(&$config) {

	CRM_Core_Resources::singleton()
		->addScriptFile('nl.sp.uximprovements', 'js/mousetrap.min.js', 1001, 'page-footer', FALSE)
		->addScriptFile('nl.sp.uximprovements', 'js/shortcuts.defs.js', 1002, 'page-footer', FALSE)
		->addScriptFile('nl.sp.uximprovements', 'js/shortcuts.js', 1003, 'page-footer', FALSE)
        ->addScriptFile('nl.sp.uximprovements', 'js/bindfirst.min.js', 1011, 'page-footer', FALSE)
        ->addScriptFile('nl.sp.uximprovements', 'js/inputvalidation.js', 1012, 'page-footer', FALSE);

  _spuximprovements_civix_civicrm_config($config);
}

/**
 * Implements hook_postcodenl_get.
 * Van Jaap mag de plaatsnaam niet in hoofdletters in org.civicoop.postcodenl.
 * Dit is voor Oane en Mathijs. ;-)
 * @param array $returnValues Results returned by org.civicoop.postcodenl
 */
function spuximprovements_civicrm_postcodenl_get(&$returnValues = array()) {
  if(count($returnValues) > 0) {
    foreach($returnValues as &$r) {
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
