(function(waDropzone) {

//      /*Display name of the widget*/
	waDropzone.setDescription('Dropzone');

//      /*Default width and height of your widget when added to the Page*/
	waDropzone.setWidth('500');
	waDropzone.setHeight('300');
	
	waDropzone.customizeProperty("parallelUploads", {'title': 'Parallel Uploads'});
	waDropzone.customizeProperty("maxFilesize", {'title': 'Max File size(MB)'});
	waDropzone.customizeProperty("uploadMultiple", {'title': 'Upload Multiple'});
	waDropzone.customizeProperty("createImageThumbnails", {'title': 'CreateImageThumbnails'});
	waDropzone.customizeProperty("maxFiles", {'title': 'Max Files'});
	waDropzone.customizeProperty("addRemoveLinks", {'title': 'addRemoveLinks'});
	waDropzone.customizeProperty("maxFiles", {'title': 'Max Files'});
	waDropzone.customizeProperty("autoProcess", {'title': 'Auto Process'});
	waDropzone.customizeProperty("ifFileExist", {'title': 'In Case of conflict', 'sourceDisplay': false});
	waDropzone.customizeProperty("uploadFolder", {'title': 'Upload Folder'});

//      /*Define the events for your widget*/
	waDropzone.addEvent({
		'name':'addedfile',
		'description':'On File Added',
		'category': 'File Events'
	});
	
	waDropzone.addEvent({
		'name':'removedfile',
		'description':'On File Removed',
		'category': 'File Events'
	});
	
	waDropzone.addEvent({
		'name':'error',
		'description':'On Error',
		'category': 'File Events'
	});
	
	waDropzone.addEvent({
		'name':'processing',
		'description':'On Processing',
		'category': 'File Events'
	});
	
	waDropzone.addEvent({
		'name':'uploadprogress',
		'description':'On Upload Progress',
		'category': 'File Events'
	});
	
	waDropzone.addEvent({
		'name':'sending',
		'description':'On Sending',
		'category': 'File Events'
	});
	
	waDropzone.addEvent({
		'name':'success',
		'description':'On Success',
		'category': 'File Events'
	});
	
	waDropzone.addEvent({
		'name':'complete',
		'description':'On Complete',
		'category': 'File Events'
	});
	
	waDropzone.addEvent({
		'name':'canceled',
		'description':'On Canceled',
		'category': 'File Events'
	});
	
	waDropzone.addEvent({
		'name':'maxfilesreached',
		'description':'On Max Files Reached',
		'category': 'File Events'
	});
	
	waDropzone.addEvent({
		'name':'maxfilesexceeded',
		'description':'On Max Files Exceeded',
		'category': 'File Events'
	});
	

});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3870.html
