class Loading extends HTMLElement {
  constructor() {
    super();
    const width = parseInt(this.getAttribute("width"), 10) || 20;
    const circleRadius = parseInt(this.getAttribute("borderWidth"), 10) || 3;
    const circle = parseInt(this.getAttribute("circle"), 10) || 8;
    const root = this.attachShadow({ mode: "open" });
    //    ${this.buildCircle(width, circle, circleRadius)}
    root.innerHTML += `<div class="loading">
    ${this.buildStyle(width, circleRadius * 2, circle)}
    ${this.buildTrail(width / 2 - circleRadius, circleRadius * 1)}
    ${this.buildTrail(
      width / 3 - circleRadius,
      circleRadius * 1,
      "inner-circle"
    )}

    </div>`;
  }
  /**
   *
   * @param {number} w width svg
   * @param {number} n number of circle
   * @param {*} r radius
   * @return {string}
   */
  buildCircle(w, n, r) {
    let dom = `<svg class="circles" width="${w}" height="${w}" viewBox="0 0 ${w} ${w}" >`;
    const radius = w / 2 - r;
    for (let i = 0; i < n; i++) {
      const a = (i * (Math.PI * 2)) / n;
      const x = radius * Math.sin(a) + w / 2;
      const y = radius * Math.cos(a) + w / 2;

      dom += `<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor"/>`;
    }

    return dom + "</svg>";
  }

  /**
   *
   * @param {number} w
   * @param {number} stroke
   * @return  {string}
   */
  buildStyle(w, stroke, n) {
    const perimeter = Math.PI * (w - stroke);
    return `
    <style>
        :host{
            display : block;
         }
        div {
            width : ${w}px;
            height : ${w}px;
            position : relative;
        }
        
        .loading{
          position : relative;
          opacity : 1;
          display : flex;
          justify-content : center;
          align-items : center;
        }
        
        .circles {
            animation : spin 16s linear infinite;
        }
        svg {
          position : absolute;
          top :0;
          left : 0;
        }
        @keyframes spin {
            from { transform : rotate(0deg)}
            to { transform : rotate(360deg)}
        }
        .trail {
          stroke-dasharray : ${perimeter} ;
          stroke-dashoffset : ${perimeter + perimeter / n};
          animation : spin2 2s cubic-bezier(.5,.15,.5,.85) infinite;
        }
        .trail circle{
          animation : trail 2s cubic-bezier(.5,.15,.5,.85) infinite;
        } 
        
        @keyframes trail{
          O%{
            stroke-dashoffset : ${perimeter + perimeter / n};
          }
          50%{
            stroke-dashoffset : ${perimeter + (3 * perimeter) / n};
          }
          100%{
            stroke-dashoffset : ${perimeter + perimeter / n};
          }

        }
        .inner-circle 
        {
          left : 15%;
          top: 15%;
          opacity : 0.6;
        } 
        @keyframes spin2 {
          from { transform : rotate(0deg)}
          to { transform : rotate(720deg)}
        }
    </style>
    `;
  }
  /**
   *
   * @param {number} r radius
   * @param {number} stroke s
   */
  buildTrail(r, stroke, inner) {
    const w = r * 2 + stroke;
    let dom = `<svg class="trail ${inner}" width="${w}" height="${w}" viewBox="0 0 ${w} ${w}">`;

    dom += `<circle cx="${w / 2}" cy="${w / 2}" 
    r="${r}" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" fill="none"/>`;

    return dom + "</svg>";
  }
}

try {
  customElements.define("spining-dots", Loading);
} catch (e) {
  if (e instanceof DOMException) {
    console.error("DOMException" + e.message);
  } else {
    throw e;
  }
}
