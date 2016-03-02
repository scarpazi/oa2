## Custom Widget for [Wakanda](http://wakanda.org)
The __waDropzone__ widget is simple implementation of DropzoneJS library, for more details please see https://www.dropzonejs.com/. 

### Video Demo
http://www.youtube.com/watch?v=ErjplSPF0MA

### Installation Note
* Dont forget to set the upload group permissions in the [Permissions.waPerm](http://doc.wakanda.org/home2.de.html#/Data-Security-and-Access-Control/Assigning-Group-Permissions.200-725897.en.html) file and the allowed upload file extensions in the [Settings.waSettings file](http://doc.wakanda.org/Wakanda0/help/Title/en/page1945.html).

### Properties
This __waDropzone__ widget has the following properties: 

* __Parall Uploads__: How many file uploads to process in parallel. (See the Enqueuing file uploads section for more info: https://www.dropzonejs.com/)
* __Max File Size__: The max file size allowed (in MB).
* __Upload Multiple__: Whether the widget should send multiple files in one request.
* __Create Image Thumbnails__: Display thumbnails for images.
* __Add Remove Links__: This will add a link to every file preview to remove or cancel (if already uploading).
* __Max Files__: How many files the widget can handle.
* __Auto Process__: if checked, it will process files automatically, if not, you should call the .processQueue() method to upload files.
* __In Case of conflict__: Select an action in case if file already exists.
* __Upload folder__: Path to the folder where to save the files.

### Events:

This __waDropzone__ widget has 11 Events:

* __On File Added__: called whenever a file is added to the widget.

* __On File Removed__: Called whenever a file is removed from the list. You can listen to this and delete the file from your server if you want to.

* __On Error__: An error occured. Receives the errorMessage as second parameter and if the error was due to the XMLHttpRequest the xhr object as third.

* __On Processing__: When a file gets processed (since there is a queue not all files are processed immediately).
* __On Upload Progress__: Gets called periodically whenever the file upload progress changes.
Gets the progress parameter as second parameter which is a percentage (0-100) and the bytesSent parameter as third which is the number of the bytes that have been sent to the server.
* __On Sending__: Called just before each file is sent. Gets the xhr object and the formData objects as second and third parameters, so you can modify them (for example to add a CSRF token) or add additional data.
* __On Processing__: When a file gets processed (since there is a queue not all files are processed immediately).
* __On Success__: The file has been uploaded successfully. Gets the server response as second argument.
* __On Complete__: Called when the upload was either successful or erroneous.
* __On Cancel__: Called when a file upload gets canceled.
* __On Max Files Reached__: Called when the number of files accepted reached the maxFiles limit.
* __On Max Files Exceeded__: Called for each file that has been rejected because the number of files exceeds the maxFiles limit.

### Methods

* __getAcceptedFiles__: List of files accepted.
* __getRejectedFiles__: List of files rejected by the widget (due to size, file type etc).
* __getRejectedFiles__: List of files rejected by the widget (due to size, file type etc).
* __getQueuedFiles__: List of files in the Queue.
* __getUploadingFiles__: List the files currently in the upload process.
* __disable__: Disable the widget.
* __enable__: Enable the widget.
* __addFile(file)__: Add file to the widget, it accept one parameter File Object __file__ (http://www.w3.org/TR/FileAPI/#dfn-file).
* __enqueueFiles(files)__: enqueue multiple files to the Queue, it accept an array of file objects. 
* __enqueueFile(file)__: enqueue single file to the Queue, it accept an file object as parameter. 
* __removeFile(file)__: remove file from the widget. 
* __removeAllFiles(cancelIfNecessary)__: remove all files from the widget, pass a boolean to cancel the uploading files as well. 
* __removeAllFiles(cancelIfNecessary)__: remove all files from the widget, pass a boolean to cancel the uploading files as well. 
* __processQueue()__: start processing files in the Queue. 
* __processFiles(files)__: process the specified files. 
* __cancelUpload(file)__: cancel the upload for the specified file.
* __uploadFiles(files)__: Start uploading the specified files.

### Goals
The __waDropzone__ is an alternative to upload multiple files to Wakanda Server, it's easy to use just Drag & Drop the widget to your page and you're up & running.

### More Information
For more information on how to install a custom widget, refer to [Installing a Custom Widget](http://doc.wakanda.org/WakandaStudio0/help/Title/en/page3869.html#1027761).

For more information about Custom Widgets, refer to [Custom Widgets](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3863.html "Custom Widgets") in the [Architecture of Wakanda Applications](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3844.html "Architecture of Wakanda Applications") manual.
