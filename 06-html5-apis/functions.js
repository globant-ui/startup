$(document).ready(function(){

	var ini= indexedDB.open("data_base",2);
	var db;
	ini.onsuccess = function(e){
		db=e.target.result;
	};

	ini.onupgradeneeded =function(e){
		db=e.target.result;
		db.createObjectStore("text",{keyPath:"id"});
	};

	$("#bt_save").click(function(event){

		var content=$("#content").val();
		//INDEXED DB 
		var id=$.now();
		var transac=db.transaction(["text"],"readwrite");
		var store=transac.objectStore("text");
		var addItem=store.add({id:id,text:content});

		//LOCALSTORAGE
		localStorage.setItem(id,content);
		alert("Save!");

		$("#content").val('');
	});

	$("#bt_clear").click(function(){
		//INDEXED DB 
		var transac=db.transaction(["text"],"readwrite");
		var store=transac.objectStore("text");
		var request=store.clear();

		//LOCALSTORAGE
		localStorage.clear();
		alert("Clear!");
	});


	function handleFileSelect(event){
		event.stopPropagation();
		event.preventDefault();
		var files=event.dataTransfer.files;
		var reader=new FileReader();
		var result;
		for (var i=0,f; f=files[i];i++)
		{
			reader.readAsText(f);
			reader.onloadend=function(){
				$("#content").val(reader.result);
			}
		}
	};

	function handleDragOver(event){
		event.stopPropagation();
		event.preventDefault();
		event.dataTransfer.dropEffect='copy';
	};

	var dropZone=document.getElementById('content');
	dropZone.addEventListener('dragover',handleDragOver,false);
	dropZone.addEventListener('drop',handleFileSelect,false);


	var websocket=new WebSocket("wss://echo.websocket.org");
	websocket.onmessage=function(event){
		console.log('RESPONSE: '+event.data);
	}
	WebSocket.onerror=function(event){
		console.log('ERROR: '+event.data);
	}
	$('#bt_wsSave').click(function(){
		wsContent=$('#ws').val();
		websocket.send(wsContent);
		$('#ws').val('');
	});
});