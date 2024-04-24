<?php

declare(strict_types=1);

/**
 * @file
 * Theme settings form for aqto_theme_base theme.
 */

use Drupal\Core\Form\FormState;

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function aqto_theme_base_form_system_theme_settings_alter(array &$form, FormState $form_state): void {

  $form['aqto_theme_base'] = [
    '#type' => 'details',
    '#title' => t('aqto_theme_base'),
    '#open' => TRUE,
  ];

  $form['aqto_theme_base']['example'] = [
    '#type' => 'textfield',
    '#title' => t('Example'),
    '#default_value' => theme_get_setting('example'),
  ];

}
