<?php

$locale = Lang::getLocale();

PackageManager::add('elfinder')
    ->js('elfinder.lib', resources_url('/libs/elfinder/js/elfinder.min.js'), 'global')
    ->js("elfinder.{$locale}", resources_url("/libs/elfinder/js/i18n/elfinder.{$locale}.js"), 'elfinder.lib')
    ->css('elfinder.lib', resources_url('/libs/elfinder/css/elfinder.min.css'));
