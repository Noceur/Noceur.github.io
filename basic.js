// Expands section (shows text) and does some styling related things.
function showText (checkboxEle) {

    // Get color variables from css
    let textColor   = getComputedStyle(document.documentElement).getPropertyValue('--titlecolor');
    let textHighlightColor = getComputedStyle(document.documentElement).getPropertyValue('--titlecolorHilight');

    // Get relevant objects to modify
    let titleEle   = checkboxEle.parentElement;
    let contentEle = titleEle.parentElement.children[1];

    // Default look
    let vis          = "none";
    let margin       = "0px";
    let expandSymbol = "+";

    // If post is expanded
    if(checkboxEle.checked){
        vis          = "block";
        textColor    = textHighlightColor;
        margin       = "5px";
        expandSymbol = "-";
    }
    
    // Update html
    titleEle.style.color = textColor;
    titleEle.style.marginLeft = margin;
    titleEle.children[0].innerText = expandSymbol;
    contentEle.style.display = vis;
}

// Get the latest 'news' post and return all the content so it can be displayed on the first page of the site.
function latestNews(){

}
