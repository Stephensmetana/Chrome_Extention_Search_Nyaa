function searchNyaa(e){	
	var searchstring = e.selectionText;	
	chrome.tabs.create({url: "https://nyaa.si/?f=0&c=0_0&q=" + searchstring + "&s=seeders&o=desc"})
}
chrome.contextMenus.create({
	title: "Search Nyaa for \"%s\"",
	contexts:["selection"],
	onclick: searchNyaa
});