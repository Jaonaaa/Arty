export class AreaData {
  label;
  data;
  fill;
  borderColor;
  backgroundColor;
  borderWidth;

  /**
   *
   * @param {string} label
   * @param {number[]} data
   * @param {boolean} fill
   * @param {string} borderColor
   * @param {string} backgroundColor
   * @param {number} borderWidth
   */
  constructor(label, data, fill, borderColor, backgroundColor, borderWidth) {
    this.label = label;
    this.data = data;
    this.fill = fill;
    this.borderColor = borderColor;
    this.backgroundColor = backgroundColor;
    this.borderWidth = borderWidth;
  }
}

export class AreaGraphic {
  labels;
  datasets;

  /**
   *
   * @param {string[]} labels
   * @param {AreaData[]} datasets
   */
  constructor(labels, datasets) {
    this.labels = labels;
    this.datasets = datasets;
  }

  /**
   *
   * @param {HTMLCanvasElement} canvas
   * @return {Chart}
   */
  drawGraph(canvas) {
    return new Chart(canvas, {
      type: "line",
      data: {
        labels: this.labels,
        datasets: this.datasets,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
}

export class BarData {
  label;
  data;
  backgroundColor;
  borderColor;
  borderWidth;

  /**
   *
   * @param {string} label
   * @param {number[]} data
   * @param {string[]} backgroundColor
   * @param {string[]} borderColor
   * @param {number} borderWidth
   */
  constructor(label, data, backgroundColor, borderColor, borderWidth) {
    this.label = label;
    this.data = data;
    this.backgroundColor = backgroundColor;
    this.borderColor = borderColor;
    this.borderWidth = borderWidth;
  }
}

export class BarGraph {
  labels;
  datasets;

  /**
   *
   * @param {string[]} labels
   * @param {BarData[]} datasets
   */
  constructor(labels, datasets) {
    this.labels = labels;
    this.datasets = datasets;
  }

  /**
   *
   * @param {HTMLCanvasElement} canvas
   * @returns {Chart}
   */
  drawGraph(canvas) {
    return new Chart(canvas, {
      type: "bar",
      data: {
        labels: this.labels,
        datasets: this.datasets,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
}

export class Bubble {
  x;
  y;
  r;

  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {number} r
   */
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
}

export class BubbleData {
  label;
  data;
  backgroundColor;

  /**
   *
   * @param {string} label
   * @param {Bubble[]} data
   * @param {string} backgroundColor
   */
  constructor(label, data, backgroundColor) {
    this.label = label;
    this.data = data;
    this.backgroundColor = backgroundColor;
  }
}

export class BubbleGraph {
  datasets;

  /**
   *
   * @param {BubbleData[]} datasets
   */
  constructor(datasets) {
    this.datasets = datasets;
  }

  /**
   *
   * @param {HTMLCanvasElement} canvas
   * @return {Chart}
   */
  drawGraph(canvas) {
    return new Chart(canvas, {
      type: "bubble",
      data: {
        datasets: this.datasets,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
}

export class DoughnutData {
  data;
  borderColor;
  backgroundColor;
  borderWidth;

  /**
   *
   * @param {number[]} data
   * @param {string[]} borderColor
   * @param {string[]} backgroundColor
   * @param {number} borderWidth
   */
  constructor(data, borderColor, backgroundColor, borderWidth) {
    this.data = data;
    this.borderColor = borderColor;
    this.backgroundColor = backgroundColor;
    this.borderWidth = borderWidth;
  }
}

export class DoughnutGraphic {
  labels;
  datasets;

  /**
   *
   * @param {string[]} labels
   * @param {DoughnutData} datasets
   */
  constructor(labels, datasets) {
    this.labels = labels;
    this.datasets = datasets;
  }

  /**
   *
   * @param {HTMLCanvasElement} canvas
   * @returns {Chart}
   */
  drawGraph(canvas) {
    return new Chart(canvas, {
      type: "doughnut",
      data: {
        labels: this.labels,
        datasets: this.datasets,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
}

export class LineData {
  label;
  data;
  fill;
  borderColor;
  backgroundColor;
  borderWidth;

  /**
   *
   * @param {string} label
   * @param {number[]} data
   * @param {boolean} fill
   * @param {string} borderColor
   * @param {string} backgroundColor
   * @param {number} borderWidth
   */
  constructor(label, data, fill, borderColor, backgroundColor, borderWidth) {
    this.label = label;
    this.data = data;
    this.fill = fill;
    this.borderColor = borderColor;
    this.backgroundColor = backgroundColor;
    this.borderWidth = borderWidth;
  }
}

export class LineGraph {
  labels;
  datasets;

  /**
   *
   * @param {string[]} labels
   * @param {LineData[]} datasets
   */
  constructor(labels, datasets) {
    this.labels = labels;
    this.datasets = datasets;
  }

  /**
   *
   * @param {HTMLCanvasElement} canvas
   * @return {Chart}
   */
  drawGraph(canvas) {
    return new Chart(canvas, {
      type: "line",
      data: {
        labels: this.labels,
        datasets: this.datasets,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
}

export class PolarAreaData {
  data;
  borderColor;
  backgroundColor;
  borderWidth;

  /**
   *
   * @param {number[]} data
   * @param {string[]} borderColor
   * @param {string[]} backgroundColor
   * @param {number} borderWidth
   */
  constructor(data, borderColor, backgroundColor, borderWidth) {
    this.data = data;
    this.borderColor = borderColor;
    this.backgroundColor = backgroundColor;
    this.borderWidth = borderWidth;
  }
}

export class PolarAreaGraph {
  labels;
  datasets;

  /**
   *
   * @param {string[]} labels
   * @param {PolarAreaData} datasets
   */
  constructor(labels, datasets) {
    this.labels = labels;
    this.datasets = datasets;
  }

  /**
   *
   * @param {HTMLCanvasElement} canvas
   * @returns {Chart}
   */
  drawGraph(canvas) {
    return new Chart(canvas, {
      type: "polarArea",
      data: {
        labels: this.labels,
        datasets: this.datasets,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
}

export class RadarData {
  label;
  backgroundColor;
  data;

  /**
   *
   * @param {string} label
   * @param {string} backgroundColor
   * @param {number[]} data
   */
  constructor(label, backgroundColor, data) {
    this.label = label;
    this.backgroundColor = backgroundColor;
    this.data = data;
  }
}

export class RadarGraph {
  labels;
  datasets;

  /**
   *
   * @param {string[]} labels
   * @param {RadarData[]} datasets
   */
  constructor(labels, datasets) {
    this.labels = labels;
    this.datasets = datasets;
  }

  /**
   *
   * @param {HTMLCanvasElement} canvas
   * @returns {Chart}
   */
  drawGraph(canvas) {
    return new Chart(canvas, {
      type: "radar",
      data: {
        labels: this.labels,
        datasets: this.datasets,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
}
