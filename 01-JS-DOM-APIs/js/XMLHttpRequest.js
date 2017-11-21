const READY_STATE_UNINITIALIZATED = 0;
const READY_STATE_LOADING = 1;
const READY_STATE_LOADED = 2;
const READY_STATE_INTERACTIVE = 3;
const READY_STATE_COMPLETE = 4;
var peticion_http;

if(window.XMLHttpRequest)
	peticion_http = new XMLHttpRequest();	//Navegadores modernos

function getInfo(config)
{
	peticion_http.onreadystatechange = showInfo;
	peticion_http.open(config.type, config.url, true);
	peticion_http.send(null);
}