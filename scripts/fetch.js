// Jieun Kwon
// updated date : Sep 12, 2018
//
// this page for menu of index.html
// call navlist file, and then make html code, 
// link can	fetch file 
// 

	// fetch page 
	function fetchPage(name){
	fetch(name).then(function(response){
	  response.text().then(function(text){
		document.querySelector('article').innerHTML = text;
	  })
	});
	}
	
	// default page 
	if(location.hash){
	fetchPage(location.hash.substr(2));
	} else {
	fetchPage('Profile.html');
	}
	
	// fetch navlist file for menu
	fetch('navlist').then(function(response){
	response.text().then(function(text){
	  
	  var items = text.split(',');
	  var i = 0;
	  var tags = '';	// tag for link
	  
	  while( i < items.length ){
		var item = items[i];
		item = item.trim();
		 
		var tag = ' <a href="#!'+item+'" onclick="fetchPage(\''+item+'.html\')" class="top_menu">'+item+'</a> ';
		tags = tags + tag;
		i = i + 1;
	  }
	
	    // innerHTML
		document.querySelector('#nav_menu').innerHTML = tags;
	
	})
	});
