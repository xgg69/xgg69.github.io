let showE = false;


function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}
function showElem(sh) {
    showE = !showE;
    console.log(showE);
    if (showE) {
        document.getElementById(sh).style.display='block';
    }
    if (!showE) {
        document.getElementById(sh).style.display='none';
    }
}
function loadPage(pg) {
    window.location = pg;
}