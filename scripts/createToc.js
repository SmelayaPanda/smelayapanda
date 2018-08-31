function createToc(content, toc) {
    var headingSelector = 'h2, h3, h4'
    
    if (isMobile()) { // detect mobile (can be another logic)
        headingSelector = 'h2'
    }
    console.log('see selector');
    console.log(headingSelector);
    tocbot.init({
        // Where to render the table of contents.
        tocSelector: toc,
        // Where to grab the headings to build the table of contents.
        contentSelector: content,
        // Which headings to grab inside of the contentSelector element.
        headingSelector: headingSelector,
        // Class to add to active links,
        // the link corresponding to the top most heading on the page.
        activeLinkClass: 'is-active-link',
    });
}

document.addEventListener('DOMContentLoaded', function () {
        createToc('#content', '#toc');
    }
);

window.onscroll = function () {
    var activeLink = document.getElementsByClassName('is-active-link')
    if (activeLink && activeLink[0]) {
        activeLink[0].scrollIntoView({behavior: 'smooth', block: 'start'});
    }
}

window.onresize = function (event) { // recreate toc for realtime browser resize
    createToc('#content', '#toc');
};

function isMobile() {
    console.log(window.innerWidth);
    console.log(navigator.userAgent);
    console.log(document.documentElement);
    console.log(window.MSStream);
    console.log(/iPhone|iPod|Mobi|Android/i.test(navigator.userAgent) && !window.MSStream );
    return (
        window.innerWidth <= 980 ||
        (/iPhone|iPod|Mobi|Android/i.test(navigator.userAgent) && !window.MSStream ) ||
        'ontouchstart' in document.documentElement
    );
}
