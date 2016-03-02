function oa2ImportJSON (dsName, JSONFolder) {
	//ds.SourceRef.importFromJSON(JSONFolder);
	ds.importFromJSON(JSONFolder);
}

dsName = "SourceRef";
impFolder = new Folder(ds.getModelFolder().path + "DataFolderJSON/import/");     // get a reference to the export folder

if (impFolder.exists)     // if the folder actually exists
{
	oa2ImportJSON(dsName,impFolder);
};
