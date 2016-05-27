var elixir = require('laravel-elixir');
elixir.extend('sourcemaps', false);

process.env.DISABLE_NOTIFIER = true;

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
	/**************************************************************
	 * elFinder
	 **************************************************************/
	mix
		.scripts([
			'elfinder.js',
			'elFinder.version.js',
			'jquery.elfinder.js',
			'elFinder.options.js',
			'elFinder.history.js',
			'elFinder.command.js',
			'elFinder.resources.js',
			'jquery.dialogelfinder.js',
			'elfinder.en.js',
			'ui/button.js',
			'ui/contextmenu.js',
			'ui/cwd.js',
			'ui/dialog.js',
			'ui/navbar.js',
			'ui/overlay.js',
			'ui/panel.js',
			'ui/path.js',
			'ui/places.js',
			'ui/searchbutton.js',
			'ui/sortbutton.js',
			'ui/stat.js',
			'ui/toolbar.js',
			'ui/tree.js',
			'ui/uploadButton.js',
			'ui/viewbutton.js',
			'ui/workzone.js',
			'commands/archive.js',
			'commands/back.js',
			'commands/copy.js',
			'commands/cut.js',
			'commands/download.js',
			'commands/duplicate.js',
			'commands/edit.js',
			'commands/extract.js',
			'commands/forward.js',
			'commands/getfile.js',
			'commands/help.js',
			'commands/home.js',
			'commands/info.js',
			'commands/mkdir.js',
			'commands/mkfile.js',
			'commands/netmount.js',
			'commands/open.js',
			'commands/paste.js',
			'commands/quicklook.js',
			'commands/quicklook/audio.js',
			'commands/quicklook/flash.js',
			'commands/quicklook/images.js',
			'commands/quicklook/pdf.js',
			'commands/quicklook/text.js',
			'commands/quicklook/video.js',
			'commands/quicklook/browser.media.js',
			'commands/reload.js',
			'commands/rename.js',
			'commands/resize.js',
			'commands/rm.js',
			'commands/search.js',
			'commands/sort.js',
			'commands/up.js',
			'commands/upload.js',
			'commands/view.js',
			'elfinder.end.js'
		], 'public/cms/libs/elfinder/js/elfinder.min.js', 'resources/assets/js/elfinder')
		.styles(
			['elfinder.full.css'], 'public/cms/libs/elfinder/css/elfinder.min.css', 'public/cms/libs/elfinder/css/'
		);
});
