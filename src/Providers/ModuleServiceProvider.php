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

    public function boot()
    {
        $this->publishes([
            __DIR__.DIRECTORY_SEPARATOR.'..'.DIRECTORY_SEPARATOR.'..'.DIRECTORY_SEPARATOR.'public'.DIRECTORY_SEPARATOR.'cms' => public_path('cms'),
        ], 'kodicms');
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
