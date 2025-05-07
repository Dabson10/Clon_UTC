function loadScript(src) {
    const script = document.createElement("script");
    script.src = src;
    script.type = "text/javascript";
    document.head.appendChild(script);
}

if (window.innerWidth <= 767) {
    // Cargar solo el JS para mobile
    loadScript("script.js");
} else if(window.innerWidth >= 768) {
    // Cargar solo el JS para desktop
    loadScript("desktop.js");
}
