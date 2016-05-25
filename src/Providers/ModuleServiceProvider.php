<?php

namespace KodiCMS\Filemanager\Providers;

use KodiCMS\Support\ServiceProvider;
use KodiCMS\Users\Model\Permission;

class ModuleServiceProvider extends ServiceProvider
{
    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        Permission::register('filemanager', 'filemanager', [
            'view',
        ]);
    }

    public function contextBackend()
    {
        \Navigation::setFromArray([
            [
                'id' => 'filemanager',
                'title' => 'filemanager::core.title.index',
                'url' => route('backend.filemanager'),
                'priority' => 6000,
                'permissions' => 'filemanager.view',
                'icon' => 'folder-open',
            ],
        ]);
    }
}
