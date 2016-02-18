// DO NOT change multiplier or element that is set in fittext,
// unless you want to refactor: widths, heights and font-sizes across sass files.
// Setting FitText ONLY on HTML (root) element allows ems to relatively cascade down
// and rems to properly reference a dynamic root element.
// No other JS needed for responsive content
// A Sass mixin using media queries (MANY!!) could replace FitText
// window.fitText(document.querySelector('html'), 10);
$("html").fitText(10);

// font-size of html element is 1/100th of browser width. (1200px means 12px)
