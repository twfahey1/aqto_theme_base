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


  // Dark mode enabled toggle
  $form['aqto_theme_base']['dark_mode_enabled'] = [
    '#type' => 'checkbox',
    '#title' => t('Enable dark mode'),
    '#default_value' => theme_get_setting('dark_mode_enabled'),
    '#description' => t('If checked, the dark mode will be enabled if users have it set as preference, or toggle is enabled below. The preference for user is stored as local cookie.'),
  ];

  // dark_mode_toggle_enabled toggle
  $form['aqto_theme_base']['dark_mode_toggle_enabled'] = [
    '#type' => 'checkbox',
    '#title' => t('Enable dark mode toggle'),
    '#default_value' => theme_get_setting('dark_mode_toggle_enabled'),
    '#description' => t(''),
  ];


}
