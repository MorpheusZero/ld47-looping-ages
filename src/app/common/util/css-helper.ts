export class CssHelper {
  public static fadeIn(elem, ms): void {
    if (!elem) {
      return;
    }

    elem.style.opacity = 0;
    elem.style.filter = 'alpha(opacity=0)';
    elem.style.display = 'inline-block';
    elem.style.visibility = 'visible';

    if (ms) {
      let opacity = 0;
      const timer = setInterval(() => {
        opacity += 50 / ms;
        if (opacity >= 1) {
          clearInterval(timer);
          opacity = 1;
        }
        elem.style.opacity = opacity;
        elem.style.filter = 'alpha(opacity=' + opacity * 100 + ')';
      }, 50);
    } else {
      elem.style.opacity = 1;
      elem.style.filter = 'alpha(opacity=1)';
    }
  }

  public static fadeOut(elem, ms): void {
    if (!elem) {
      return;
    }

    if (ms) {
      let opacity = 1;
      const timer = setInterval(() => {
        opacity -= 50 / ms;
        if (opacity <= 0) {
          clearInterval(timer);
          opacity = 0;
          elem.style.display = 'none';
          elem.style.visibility = 'hidden';
        }
        elem.style.opacity = opacity;
        elem.style.filter = 'alpha(opacity=' + opacity * 100 + ')';
      }, 50);
    } else {
      elem.style.opacity = 0;
      elem.style.filter = 'alpha(opacity=0)';
      elem.style.display = 'none';
      elem.style.visibility = 'hidden';
    }
  }
}
