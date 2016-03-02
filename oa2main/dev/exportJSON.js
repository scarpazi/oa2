function oa2ExportAllJSON (JSONFolder) {
 ds.exportAsJSON(JSONFolder);
}

function oa2ExportClassJSON (dsName, JSONFolder) {
 ds[dsName].exportAsJSON(JSONFolder);
}

dsName = "BiblioTitle";
locFolder = "aaa"
expFolder = new Folder(ds.getModelFolder().path + "export/" + locFolder + "/");     // get a reference to the export folder

if (expFolder.exists)     // if the folder actually exists
{
	oa2ExportAllJSON(expFolder);
};
