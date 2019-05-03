


const changeCSS = (cssFile, cssLinkIndex) => {  
       
    let oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    let newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}