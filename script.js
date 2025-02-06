/* --------------------------
 * THANKS BRICKSANDMORTARWEB.COM FOR GETTING ME STARTED:
   www.bricksandmortarweb.com/web-design/how-to-make-an-interactive-particle-logo-using-canvas
 * -------------------------- */
/* --------------------------
 * THANKS BRICKSANDMORTARWEB.COM FOR GETTING ME STARTED:
   www.bricksandmortarweb.com/web-design/how-to-make-an-interactive-particle-logo-using-canvas
 * -------------------------- */

/* --------------------------
 * CANVAS VARIABLES
 * -------------------------- */
function drawHeroAnimImageOpened() {
  /* --------------------------
   * CANVAS VARIABLES
   * -------------------------- */
  var canvasInteractive = document.getElementById("canvas-interactive"),
    canvasReference = document.getElementById("canvas-reference"),
    contextInteractive = canvasInteractive.getContext("2d"),
    contextReference = canvasReference.getContext("2d"),
    image = document.getElementById("menu_items"),
    text_left_image = document.getElementById("text_left"),
    text_left_visible_image = document.getElementById("text_left_visible"),
    text_right_image = document.getElementById("text_right"),
    text_right_visible_image = document.getElementById("text_right_visible"),
    burger = document.getElementById("close"),
    inst = document.getElementById("inst"),
    global_width = window.innerWidth * 2,
    global_height = window.innerHeight * 2;

  canvasInteractive.width = canvasReference.width = global_width;
  canvasInteractive.height = canvasReference.height = global_height;
  canvasInteractive.style.width = canvasReference.style.width =
    global_width / 2;
  canvasInteractive.style.height = canvasReference.style.height =
    global_height / 2;

  /* --------------------------
   * LOGO VARIABLES
   * -------------------------- */

  var logoDimensions = { x: 800, y: 800 };
  var global_center = { x: global_width / 2, y: global_height / 2 };
  var logoLocation = {
    x: global_center.x - logoDimensions.x / 2,
    y: global_center.y - logoDimensions.y / 2,
  };

  var particleArr = [];
  var particleAttributes = { spacing: 15, radius: 7 };
  var colorPalette = [
    "rgba(255, 255, 255, 1)",
    "rgba(240, 240, 240, 1)",
    "rgba(220, 220, 220, 1)",
    "rgba(200, 200, 200, 1)",
  ];

  /* --------------------------
   * PARTICLE CLASS
   * -------------------------- */

  function Particle(x, y) {
    this.originX = x;
    this.originY = y;
    this.x = randomNumber(-200, global_width + 200);
    this.y = randomNumber(-200, global_height + 200);
    this.radius = particleAttributes.radius * randomNumber(0.7, 1);
    this.color = colorPalette[Math.floor(randomNumber(0, colorPalette.length))];
    this.shapeOffsets = Array.from(
      { length: 8 },
      () => this.radius * (0.8 + Math.random() * 0.4)
    );
  }

  /* --------------------------
   * INIT
   * -------------------------- */

  function init() {
    const imgLeftAspect = text_left_image.width / text_left_image.height;
    const canvasAspect = global_width / global_height;
    const imgMaxWidth = global_width * 0.4;

    let textWidth, textHeight;

    if (window.innerWidth > 1500) {
      textWidth = 2600;
      textHeight = 2600 / imgLeftAspect;
    } else if (window.innerWidth > 576) {
      if (canvasAspect > imgLeftAspect) {
        // textHeight = global_height + imgMaxWidth;
        // textWidth = (global_height + imgMaxWidth) * imgLeftAspect;
        textWidth = 2500;
        textHeight = 2500 / imgLeftAspect;
      } else {
        textWidth = global_width - imgMaxWidth;
        textHeight = (global_width - imgMaxWidth) / imgLeftAspect;
      }
    } else if (window.innerWidth > 470) {
      textWidth = 900;
      textHeight = 900 / imgLeftAspect;
    } else {
      textWidth = 600;
      textHeight = 600 / imgLeftAspect;
    }

    const rightX = global_width - textWidth - 30;
    const rightY = global_height - textHeight - 30;

    if (window.innerWidth > 992) {
      contextReference.drawImage(
        text_left_image,
        30,
        30,
        textWidth,
        textHeight
      );
      contextReference.drawImage(
        text_right_image,
        rightX,
        rightY,
        textWidth,
        textHeight
      );
      contextReference.drawImage(burger, global_width - 190, 30, 150, 155);
      contextReference.drawImage(inst, 250, global_height - 200, 150, 150);
      particleAttributes = { spacing: 15, radius: 7 };
      contextReference.drawImage(
        image,
        logoLocation.x,
        logoLocation.y,
        800,
        800
      );
    } else if (window.innerWidth > 576) {
      contextReference.drawImage(
        text_left_image,
        30,
        30,
        textWidth,
        textHeight
      );
      contextReference.drawImage(
        text_right_image,
        rightX,
        rightY,
        textWidth,
        textHeight
      );
      contextReference.drawImage(burger, global_width - 200, 30, 100, 100);
      contextReference.drawImage(inst, 50, global_height - 200, 150, 150);
      particleAttributes = { spacing: 12, radius: 5 };
      contextReference.drawImage(
        image,
        logoLocation.x,
        logoLocation.y,
        700,
        700
      );
    } else if (window.innerWidth > 470) {
      contextReference.drawImage(
        text_left_image,
        30,
        30,
        textWidth,
        textHeight
      );
      contextReference.drawImage(
        text_right_image,
        rightX,
        rightY - 120,
        textWidth,
        textHeight
      );
      contextReference.drawImage(burger, global_width - 150, 150, 100, 100);
      contextReference.drawImage(inst, 50, global_height / 2 + 500, 150, 150);
      particleAttributes = { spacing: 10, radius: 4 };
      logoDimensions = { x: 500, y: 500 };
      logoLocation = {
        x: global_center.x - logoDimensions.x / 2,
        y: global_center.y - logoDimensions.y / 2,
      };
      contextReference.drawImage(
        image,
        logoLocation.x,
        logoLocation.y,
        500,
        500
      );
    } else {
      contextReference.drawImage(
        text_left_visible_image,
        10,
        30,
        textWidth,
        textHeight
      );
      contextReference.drawImage(
        text_right_visible_image,
        rightX + 20,
        rightY - 120,
        textWidth,
        textHeight
      );
      contextReference.drawImage(burger, global_width - 150, 150, 100, 100);
      contextReference.drawImage(inst, 50, global_height / 2 + 500, 150, 150);
      particleAttributes = { spacing: 10, radius: 4 };
      logoDimensions = { x: 500, y: 500 };
      logoLocation = {
        x: global_center.x - logoDimensions.x / 2,
        y: global_center.y - logoDimensions.y / 2,
      };
      contextReference.drawImage(
        image,
        logoLocation.x,
        logoLocation.y,
        500,
        500
      );
    }

    TweenLite.ticker.addEventListener("tick", animate);

    const pixels = contextReference.getImageData(
      0,
      0,
      global_width,
      global_height
    ).data;
    for (let y = 0; y < global_height; y += particleAttributes.spacing) {
      for (let x = 0; x < global_width; x += particleAttributes.spacing) {
        const index = (y * global_width + x) * 4;
        if (pixels[index + 3] === 0) {
          const particle = new Particle(x, y);
          particleArr.push(particle);
          TweenLite.to(particle, randomNumber(1, 2), {
            x: particle.originX,
            y: particle.originY,
            ease: "power1.out",
          });
        }
      }
    }
  }

  init();

  /* --------------------------
   * RESIZE THE CANVAS
   * -------------------------- */

  function resize() {
    contextInteractive.clearRect(
      0,
      0,
      canvasInteractive.width,
      canvasInteractive.height
    );
    TweenLite.ticker.removeEventListener("tick", animate);
    particleArr = [];

    global_width = window.innerWidth * 2;
    global_height = window.innerHeight * 2;
    global_center = { x: global_width / 2, y: global_height / 2 };
    logoLocation = {
      x: global_center.x - logoDimensions.x / 2,
      y: global_center.y - logoDimensions.y / 2,
    };

    canvasInteractive.width = canvasReference.width = global_width;
    canvasInteractive.height = canvasReference.height = global_height;
    canvasInteractive.style.width = canvasReference.style.width =
      global_width / 2;
    canvasInteractive.style.height = canvasReference.style.height =
      global_height / 2;

    init();
    TweenLite.ticker.addEventListener("tick", animate);
  }

  window.addEventListener("resize", resize, false);

  /* --------------------------
   * RENDER
   * -------------------------- */
  function drawOrganicShape(context, x, y, shapeOffsets) {
    context.beginPath();
    const points = shapeOffsets.length;
    const angleStep = (Math.PI * 2) / points;

    for (let i = 0; i <= points; i++) {
      const angle = i * angleStep;
      const offsetRadius = shapeOffsets[i % points];
      const xPoint = x + Math.cos(angle) * offsetRadius;
      const yPoint = y + Math.sin(angle) * offsetRadius;

      if (i === 0) {
        context.moveTo(xPoint, yPoint);
      } else {
        context.lineTo(xPoint, yPoint);
      }
    }

    context.closePath();
  }

  function render() {
    contextInteractive.clearRect(0, 0, global_width, global_height);
    for (var i = 0; i < particleArr.length; i++) {
      var p = particleArr[i];

      // Draw each particle as a consistent organic shape using precomputed offsets
      drawOrganicShape(contextInteractive, p.x, p.y, p.shapeOffsets);

      contextInteractive.fillStyle = p.color;
      contextInteractive.fill();
    }
  }

  /* --------------------------
   * ANIMATE
   * -------------------------- */

  function animate() {
    render();
  }

  /* --------------------------
   * INTERACTIONS
   * -------------------------- */

  document.body.addEventListener("mousedown", function () {
    for (var i = 0; i < particleArr.length; i++) {
      var p = particleArr[i];
      var angle = Math.atan2(p.y - global_center.y, p.x - global_center.x);
      var distance = randomNumber(150, 300);

      var xTarget = p.originX + Math.cos(angle) * distance;
      var yTarget = p.originY + Math.sin(angle) * distance;

      TweenLite.to(p, randomNumber(1, 1.5), { x: xTarget, y: yTarget });
    }
  });

  document.body.addEventListener("mouseup", function () {
    for (var i = 0; i < particleArr.length; i++) {
      var p = particleArr[i];
      TweenLite.to(p, randomNumber(1, 2), { x: p.originX, y: p.originY });
    }
  });

  /* --------------------------
   * RANDOM FUNCTIONS
   * -------------------------- */

  function randomWholeNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
  }

  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
}
function drawHeroAnimImage(isFirst = true) {
  /* --------------------------
   * CANVAS VARIABLES
   * -------------------------- */
  var canvasInteractive = document.getElementById("canvas-interactive"),
    canvasReference = document.getElementById("canvas-reference"),
    contextInteractive = canvasInteractive.getContext("2d"),
    contextReference = canvasReference.getContext("2d"),
    image = document.getElementById("img"),
    text_left_image = document.getElementById("text_left"),
    text_left_visible_image = document.getElementById("text_left_visible"),
    text_right_image = document.getElementById("text_right"),
    text_right_visible_image = document.getElementById("text_right_visible"),
    burger = document.getElementById("burger"),
    inst = document.getElementById("inst"),
    global_width = window.innerWidth * 2,
    global_height = window.innerHeight * 2;

  canvasInteractive.width = canvasReference.width = global_width;
  canvasInteractive.height = canvasReference.height = global_height;
  canvasInteractive.style.width = canvasReference.style.width =
    global_width / 2;
  canvasInteractive.style.height = canvasReference.style.height =
    global_height / 2;

  /* --------------------------
   * LOGO VARIABLES
   * -------------------------- */

  var logoDimensions = { x: 800, y: 800 };
  var global_center = { x: global_width / 2, y: global_height / 2 };
  var logoLocation = {
    x: global_center.x - logoDimensions.x / 2,
    y: global_center.y - logoDimensions.y / 2,
  };

  var particleArr = [];
  var particleAttributes = { spacing: 15, radius: 7 };
  var colorPalette = [
    "rgba(255, 255, 255, 1)",
    "rgba(240, 240, 240, 1)",
    "rgba(220, 220, 220, 1)",
    "rgba(200, 200, 200, 1)",
  ];

  /* --------------------------
   * PARTICLE CLASS
   * -------------------------- */

  function Particle(x, y) {
    this.originX = x;
    this.originY = y;
    this.x = randomNumber(-200, global_width + 200);
    this.y = randomNumber(-200, global_height + 200);
    this.radius = particleAttributes.radius * randomNumber(0.7, 1);
    this.color = colorPalette[Math.floor(randomNumber(0, colorPalette.length))];
    this.shapeOffsets = Array.from(
      { length: 8 },
      () => this.radius * (0.8 + Math.random() * 0.4)
    );
  }

  /* --------------------------
   * INIT
   * -------------------------- */

  function init() {
    const imgLeftAspect = text_left_image.width / text_left_image.height;
    const canvasAspect = global_width / global_height;
    const imgMaxWidth = global_width * 0.4;

    let textWidth, textHeight;

    if (window.innerWidth > 1500) {
      textWidth = 1600;
      textHeight = 1600 / imgLeftAspect;
    } else if (window.innerWidth > 576) {
      if (canvasAspect > imgLeftAspect) {
        // textHeight = (global_height + imgMaxWidth)-1000;
        // textWidth = ((global_height + imgMaxWidth) * imgLeftAspect)-1000;
        textWidth = 1500;
        textHeight = 1500 / imgLeftAspect;
      } else {
        textWidth = global_width - imgMaxWidth;
        textHeight = (global_width - imgMaxWidth) / imgLeftAspect;
      }
    } else if (window.innerWidth > 470) {
      textWidth = 900;
      textHeight = 900 / imgLeftAspect;
    } else {
      textWidth = 600;
      textHeight = 600 / imgLeftAspect;
    }

    const rightX = global_width - textWidth - 30;
    const rightY = global_height - textHeight - 30;

    if (window.innerWidth > 992) {
      contextReference.drawImage(
        text_left_image,
        30,
        30,
        textWidth,
        textHeight
      );
      contextReference.drawImage(
        text_right_image,
        rightX,
        rightY,
        textWidth,
        textHeight
      );
      contextReference.drawImage(burger, global_width - 190, 30, 150, 125);
      contextReference.drawImage(inst, 250, global_height - 200, 150, 150);
      particleAttributes = { spacing: 15, radius: 7 };
      contextReference.drawImage(
        image,
        logoLocation.x,
        logoLocation.y,
        800,
        800
      );
    } else if (window.innerWidth > 576) {
      contextReference.drawImage(
        text_left_image,
        30,
        30,
        textWidth,
        textHeight
      );
      contextReference.drawImage(
        text_right_image,
        rightX,
        rightY,
        textWidth,
        textHeight
      );
      contextReference.drawImage(burger, global_width - 200, 30, 100, 90);
      contextReference.drawImage(inst, 50, global_height - 200, 150, 150);
      particleAttributes = { spacing: 12, radius: 5 };
      contextReference.drawImage(
        image,
        logoLocation.x,
        logoLocation.y,
        700,
        700
      );
    } else if (window.innerWidth > 470) {
      contextReference.drawImage(
        text_left_image,
        30,
        30,
        textWidth,
        textHeight
      );
      contextReference.drawImage(
        text_right_image,
        rightX,
        rightY - 120,
        textWidth,
        textHeight
      );
      contextReference.drawImage(burger, global_width - 150, 150, 100, 80);
      contextReference.drawImage(inst, 50, global_height / 2 + 500, 150, 150);
      particleAttributes = { spacing: 10, radius: 4 };
      logoDimensions = { x: 500, y: 500 };
      logoLocation = {
        x: global_center.x - logoDimensions.x / 2,
        y: global_center.y - logoDimensions.y / 2,
      };
      contextReference.drawImage(
        image,
        logoLocation.x,
        logoLocation.y,
        500,
        500
      );
    } else {
      contextReference.drawImage(
        text_left_visible_image,
        10,
        30,
        textWidth,
        textHeight
      );
      contextReference.drawImage(
        text_right_visible_image,
        rightX + 20,
        rightY - 120,
        textWidth,
        textHeight
      );
      contextReference.drawImage(burger, global_width - 150, 150, 100, 80);
      contextReference.drawImage(inst, 50, global_height / 2 + 500, 150, 150);
      particleAttributes = { spacing: 10, radius: 4 };
      logoDimensions = { x: 500, y: 500 };
      logoLocation = {
        x: global_center.x - logoDimensions.x / 2,
        y: global_center.y - logoDimensions.y / 2,
      };
      contextReference.drawImage(
        image,
        logoLocation.x,
        logoLocation.y,
        500,
        500
      );
    }

    TweenLite.ticker.addEventListener("tick", animate);

    const pixels = contextReference.getImageData(
      0,
      0,
      global_width,
      global_height
    ).data;
    for (let y = 0; y < global_height; y += particleAttributes.spacing) {
      for (let x = 0; x < global_width; x += particleAttributes.spacing) {
        const index = (y * global_width + x) * 4;
        if (pixels[index + 3] === 0) {
          const particle = new Particle(x, y);
          particleArr.push(particle);
          TweenLite.to(particle, randomNumber(1, 2), {
            x: particle.originX,
            y: particle.originY,
            ease: "power1.out",
          });
        }
      }
    }
  }

  if (isFirst) {
    setTimeout(() => {
      init();
    }, 3000);
  } else {
    init();
  }

  /* --------------------------
   * RESIZE THE CANVAS
   * -------------------------- */

  function resize() {
    contextInteractive.clearRect(
      0,
      0,
      canvasInteractive.width,
      canvasInteractive.height
    );
    TweenLite.ticker.removeEventListener("tick", animate);
    particleArr = [];

    global_width = window.innerWidth * 2;
    global_height = window.innerHeight * 2;
    global_center = { x: global_width / 2, y: global_height / 2 };
    logoLocation = {
      x: global_center.x - logoDimensions.x / 2,
      y: global_center.y - logoDimensions.y / 2,
    };

    canvasInteractive.width = canvasReference.width = global_width;
    canvasInteractive.height = canvasReference.height = global_height;
    canvasInteractive.style.width = canvasReference.style.width =
      global_width / 2;
    canvasInteractive.style.height = canvasReference.style.height =
      global_height / 2;

    init();
    TweenLite.ticker.addEventListener("tick", animate);
  }

  window.addEventListener("resize", resize, false);

  /* --------------------------
   * RENDER
   * -------------------------- */
  function drawOrganicShape(context, x, y, shapeOffsets) {
    context.beginPath();
    const points = shapeOffsets.length;
    const angleStep = (Math.PI * 2) / points;

    for (let i = 0; i <= points; i++) {
      const angle = i * angleStep;
      const offsetRadius = shapeOffsets[i % points];
      const xPoint = x + Math.cos(angle) * offsetRadius;
      const yPoint = y + Math.sin(angle) * offsetRadius;

      if (i === 0) {
        context.moveTo(xPoint, yPoint);
      } else {
        context.lineTo(xPoint, yPoint);
      }
    }

    context.closePath();
  }

  function render() {
    contextInteractive.clearRect(0, 0, global_width, global_height);
    for (var i = 0; i < particleArr.length; i++) {
      var p = particleArr[i];

      // Draw each particle as a consistent organic shape using precomputed offsets
      drawOrganicShape(contextInteractive, p.x, p.y, p.shapeOffsets);

      contextInteractive.fillStyle = p.color;
      contextInteractive.fill();
    }
  }

  /* --------------------------
   * ANIMATE
   * -------------------------- */

  function animate() {
    render();
  }

  /* --------------------------
   * INTERACTIONS
   * -------------------------- */

  document.body.addEventListener("mousedown", function () {
    for (var i = 0; i < particleArr.length; i++) {
      var p = particleArr[i];
      var angle = Math.atan2(p.y - global_center.y, p.x - global_center.x);
      var distance = randomNumber(150, 300);

      var xTarget = p.originX + Math.cos(angle) * distance;
      var yTarget = p.originY + Math.sin(angle) * distance;

      TweenLite.to(p, randomNumber(1, 1.5), { x: xTarget, y: yTarget });
    }
  });

  document.body.addEventListener("mouseup", function () {
    for (var i = 0; i < particleArr.length; i++) {
      var p = particleArr[i];
      TweenLite.to(p, randomNumber(1, 2), { x: p.originX, y: p.originY });
    }
  });

  /* --------------------------
   * RANDOM FUNCTIONS
   * -------------------------- */

  function randomWholeNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
  }

  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
}
function drawWebsiteAnimImage(isFirst) {
  var canvasInteractive = document.getElementById("canvas-interactive"),
    canvasReference = document.getElementById("canvas-reference"),
    contextInteractive = canvasInteractive.getContext("2d"),
    contextReference = canvasReference.getContext("2d"),
    image = document.getElementById("Slides"),
    slider = document.getElementById("slider"),
    text_left_image = document.getElementById("text_left"),
    text_left_visible_image = document.getElementById("text_left_visible"),
    text_right_image = document.getElementById("text_right"),
    text_right_visible_image = document.getElementById("text_right_visible"),
    burger = document.getElementById("close"),
    inst = document.getElementById("inst"),
    global_width = window.innerWidth * 2,
    global_height = window.innerHeight * 2;

  canvasInteractive.width = canvasReference.width = global_width;
  canvasInteractive.height = canvasReference.height = global_height;
  canvasInteractive.style.width = canvasReference.style.width =
    global_width / 2;
  canvasInteractive.style.height = canvasReference.style.height =
    global_height / 2;

  /* --------------------------
   * LOGO VARIABLES
   * -------------------------- */

  var logoDimensions = { x: 2280, y: 1290 };
  var global_center = { x: global_width / 2, y: global_height / 2 };
  var logoLocation = {
    x: global_center.x - logoDimensions.x / 2,
    y: global_center.y - logoDimensions.y / 2,
  };

  var particleArr = [];
  var particleAttributes = { spacing: 15, radius: 7 };
  var colorPalette = [
    "rgba(255, 255, 255, 1)",
    "rgba(240, 240, 240, 1)",
    "rgba(220, 220, 220, 1)",
    "rgba(200, 200, 200, 1)",
  ];

  /* --------------------------
   * PARTICLE CLASS
   * -------------------------- */

  function Particle(x, y) {
    this.originX = x;
    this.originY = y;
    this.x = randomNumber(-200, global_width + 200);
    this.y = randomNumber(-200, global_height + 200);
    this.radius = particleAttributes.radius * randomNumber(0.7, 1);
    this.color = colorPalette[Math.floor(randomNumber(0, colorPalette.length))];
    this.shapeOffsets = Array.from(
      { length: 8 },
      () => this.radius * (0.8 + Math.random() * 0.4)
    );
  }

  /* --------------------------
   * INIT
   * -------------------------- */

  function init() {
    const imgLeftAspect = text_left_image.width / text_left_image.height;
    const canvasAspect = global_width / global_height;
    const imgMaxWidth = global_width * 0.4;

    let textWidth, textHeight;
    let sliderWidth, sliderHeight, sliderX, sliderY;

    // Calculate center points
    const centerX = global_width / 2;
    const centerY = global_height / 2;

    // Calculate the vertical position based on viewport height
    // This ensures the slider maintains a consistent relative position
    const verticalOffset = global_height * 0.8; // Places slider at 80% of viewport height

    if (window.innerWidth > 1500) {
      textWidth = 1600;
      textHeight = 1600 / imgLeftAspect;
      sliderWidth = 900;
      sliderHeight = 100;
      sliderX = centerX - sliderWidth / 2;
      sliderY = verticalOffset;
    } else if (window.innerWidth > 992) {
      textWidth = global_width - imgMaxWidth;
      textHeight = (global_width - imgMaxWidth) / imgLeftAspect;
      sliderWidth = 680;
      sliderHeight = 80;
      sliderX = centerX - sliderWidth / 2;
      sliderY = verticalOffset;
    } else if (window.innerWidth > 576) {
      textWidth = global_width - imgMaxWidth;
      textHeight = (global_width - imgMaxWidth) / imgLeftAspect;
      sliderWidth = 780;
      sliderHeight = 80;
      sliderX = centerX - sliderWidth / 2;
      sliderY = verticalOffset;
    } else if (window.innerWidth > 470) {
      textWidth = 900;
      textHeight = 900 / imgLeftAspect;
      sliderWidth = 400;
      sliderHeight = 40;
      sliderX = centerX - sliderWidth / 2;
      sliderY = verticalOffset;
    } else {
      textWidth = 600;
      textHeight = 600 / imgLeftAspect;
      sliderWidth = 400;
      sliderHeight = 50;
      sliderX = centerX - sliderWidth / 2;
      sliderY = global_height * 0.7;
    }

    const rightX = global_width - textWidth - 30;
    const rightY = global_height - textHeight - 30;

    // Draw elements based on screen size
    if (window.innerWidth > 1200) {
      drawElements({
        textWidth,
        textHeight,
        rightX,
        rightY,
        burgerPos: { x: global_width - 190, y: 30, w: 150, h: 125 },
        instPos: { x: 250, y: global_height - 200, w: 150, h: 150 },
        imagePos: {
          x: centerX - 900, // Center the image
          y: centerY - 450, // Position image above slider
          w: 1800,
          h: global_height * 0.54,
        },
        particleSpacing: 15,
        particleRadius: 7,
      });
    } else if (window.innerWidth > 992) {
      drawElements({
        textWidth,
        textHeight,
        rightX,
        rightY,
        burgerPos: { x: global_width - 190, y: 30, w: 150, h: 125 },
        instPos: { x: 250, y: global_height - 200, w: 150, h: 150 },
        imagePos: {
          x: centerX - 750,
          y: centerY - 425,
          w: 1500,
          h: global_height * 0.44,
        },
        particleSpacing: 15,
        particleRadius: 7,
      });
    } else if (window.innerWidth > 576) {
      drawElements({
        textWidth,
        textHeight,
        rightX,
        rightY,
        burgerPos: { x: global_width - 200, y: 30, w: 100, h: 90 },
        instPos: { x: 50, y: global_height - 200, w: 150, h: 150 },
        imagePos: {
          x: centerX - 800,
          y: centerY - 450,
          w: 1600,
          h: global_height * 0.34,
        },
        particleSpacing: 12,
        particleRadius: 5,
      });
    } else {
      drawElements({
        textWidth,
        textHeight,
        rightX,
        rightY: rightY - 120,
        burgerPos: { x: global_width - 150, y: 150, w: 100, h: 80 },
        instPos: { x: 50, y: global_height / 2 + 500, w: 150, h: 150 },
        imagePos: {
          x: centerX - 250,
          y: centerY - 250,
          w: 500,
          h: 500,
        },
        particleSpacing: 10,
        particleRadius: 4,
      });
    }

    // Draw slider in center position with pagination offset
    if (window.innerWidth > 1200) {
      contextReference.drawImage(
        slider,
        sliderX,
        sliderY,
        sliderWidth,
        sliderHeight
      );
    }

    // Calculate pagination bullet positions
    const bulletOffset = 20; // Space between slider and bullets
    const bulletY = sliderY + sliderHeight + bulletOffset;

    // Initialize particles after drawing all elements
    initParticles();
  }

  // Helper functions remain the same as before
  function drawElements({
    textWidth,
    textHeight,
    rightX,
    rightY,
    burgerPos,
    instPos,
    imagePos,
    particleSpacing,
    particleRadius,
  }) {
    contextReference.drawImage(text_left_image, 30, 30, textWidth, textHeight);
    contextReference.drawImage(
      text_right_image,
      rightX,
      rightY,
      textWidth,
      textHeight
    );
    contextReference.drawImage(
      burger,
      burgerPos.x,
      burgerPos.y,
      burgerPos.w,
      burgerPos.h
    );
    contextReference.drawImage(
      inst,
      instPos.x,
      instPos.y,
      instPos.w,
      instPos.h
    );
    if (window.innerWidth > 1200) {
      contextReference.drawImage(
        image,
        imagePos.x,
        imagePos.y,
        imagePos.w,
        imagePos.h
      );
    }
    particleAttributes = { spacing: particleSpacing, radius: particleRadius };
  }

  function initParticles() {
    TweenLite.ticker.addEventListener("tick", animate);
    const pixels = contextReference.getImageData(
      0,
      0,
      global_width,
      global_height
    ).data;

    for (let y = 0; y < global_height; y += particleAttributes.spacing) {
      for (let x = 0; x < global_width; x += particleAttributes.spacing) {
        const index = (y * global_width + x) * 4;
        if (pixels[index + 3] === 0) {
          const particle = new Particle(x, y);
          particleArr.push(particle);
          TweenLite.to(particle, randomNumber(1, 2), {
            x: particle.originX,
            y: particle.originY,
            ease: "power1.out",
          });
        }
      }
    }
  }
  if (isFirst) {
    setTimeout(() => {
      init();
    }, 3000);
  } else {
    init();
  }

  /* --------------------------
   * RESIZE THE CANVAS
   * -------------------------- */

  function resize() {
    contextInteractive.clearRect(
      0,
      0,
      canvasInteractive.width,
      canvasInteractive.height
    );
    TweenLite.ticker.removeEventListener("tick", animate);
    particleArr = [];

    global_width = window.innerWidth * 2;
    global_height = window.innerHeight * 2;
    global_center = { x: global_width / 2, y: global_height / 2 };
    logoLocation = {
      x: global_center.x - logoDimensions.x / 2,
      y: global_center.y - logoDimensions.y / 2,
    };

    canvasInteractive.width = canvasReference.width = global_width;
    canvasInteractive.height = canvasReference.height = global_height;
    canvasInteractive.style.width = canvasReference.style.width =
      global_width / 2;
    canvasInteractive.style.height = canvasReference.style.height =
      global_height / 2;

    init();
    TweenLite.ticker.addEventListener("tick", animate);
  }

  window.addEventListener("resize", resize, false);

  /* --------------------------
   * RENDER
   * -------------------------- */
  function drawOrganicShape(context, x, y, shapeOffsets) {
    context.beginPath();
    const points = shapeOffsets.length;
    const angleStep = (Math.PI * 2) / points;

    for (let i = 0; i <= points; i++) {
      const angle = i * angleStep;
      const offsetRadius = shapeOffsets[i % points];
      const xPoint = x + Math.cos(angle) * offsetRadius;
      const yPoint = y + Math.sin(angle) * offsetRadius;

      if (i === 0) {
        context.moveTo(xPoint, yPoint);
      } else {
        context.lineTo(xPoint, yPoint);
      }
    }

    context.closePath();
  }

  function render() {
    document.querySelector(".portfolio-slider").classList.add("initial-load");

    contextInteractive.clearRect(0, 0, global_width, global_height);
    for (var i = 0; i < particleArr.length; i++) {
      var p = particleArr[i];

      // Draw each particle as a consistent organic shape using precomputed offsets
      drawOrganicShape(contextInteractive, p.x, p.y, p.shapeOffsets);

      contextInteractive.fillStyle = p.color;
      contextInteractive.fill();
    }
  }

  /* --------------------------
   * ANIMATE
   * -------------------------- */

  function animate() {
    render();
  }

  /* --------------------------
   * INTERACTIONS
   * -------------------------- */
  function scatterParticles() {
    for (var i = 0; i < particleArr.length; i++) {
      var p = particleArr[i];
      var angle = Math.atan2(p.y - global_center.y, p.x - global_center.x);
      var distance = randomNumber(150, 300);

      var xTarget = p.originX + Math.cos(angle) * distance;
      var yTarget = p.originY + Math.sin(angle) * distance;

      TweenLite.to(p, randomNumber(1, 1.5), { x: xTarget, y: yTarget });
    }
  }

  function returnParticles() {
    for (var i = 0; i < particleArr.length; i++) {
      var p = particleArr[i];
      TweenLite.to(p, randomNumber(1, 2), { x: p.originX, y: p.originY });
    }
  }
  // Initialize Swiper with particle animations
  const portfolioSwiper = new Swiper(".portfolio-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      bulletClass: "swiper-pagination-bullet",
      bulletActiveClass: "swiper-pagination-bullet-active",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 40,
        centeredSlides: false,
      },
    },
    on: {
      // Trigger scatter effect when slide change begins
      slideChangeTransitionStart: function () {
        document
          .querySelector(".portfolio-slider")
          .classList.remove("initial-load");
        scatterParticles();
      },
      // Return particles when slide change ends
      slideChangeTransitionEnd: function () {
        document
          .querySelector(".portfolio-slider")
          .classList.remove("initial-load");
        returnParticles();
      },
      // Optional: Add effects for touch interactions
      touchStart: function () {
        document
          .querySelector(".portfolio-slider")
          .classList.add("touch-active");
        scatterParticles();
      },
      touchEnd: function () {
        document
          .querySelector(".portfolio-slider")
          .classList.remove("touch-active");
        returnParticles();
      },
    },
  });

  // Clean up function
  function cleanup() {
    if (portfolioSwiper) {
      portfolioSwiper.destroy();
    }
  }

  document.body.addEventListener("mousedown", function () {
    document.querySelector(".portfolio-slider").classList.add("touch-active");
    for (var i = 0; i < particleArr.length; i++) {
      var p = particleArr[i];
      var angle = Math.atan2(p.y - global_center.y, p.x - global_center.x);
      var distance = randomNumber(150, 300);

      var xTarget = p.originX + Math.cos(angle) * distance;
      var yTarget = p.originY + Math.sin(angle) * distance;

      TweenLite.to(p, randomNumber(1, 1.5), { x: xTarget, y: yTarget });
    }
  });

  document.body.addEventListener("mouseup", function () {
    document
      .querySelector(".portfolio-slider")
      .classList.remove("touch-active");
    for (var i = 0; i < particleArr.length; i++) {
      var p = particleArr[i];
      TweenLite.to(p, randomNumber(1, 2), { x: p.originX, y: p.originY });
    }
  });

  /* --------------------------
   * RANDOM FUNCTIONS
   * -------------------------- */

  function randomWholeNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
  }

  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  return cleanup;
}
function drawContactAnimImage(isFirst) {
  var canvasInteractive = document.getElementById("canvas-interactive"),
    canvasReference = document.getElementById("canvas-reference"),
    contextInteractive = canvasInteractive.getContext("2d"),
    contextReference = canvasReference.getContext("2d"),
    image = document.getElementById("contactbase"),
    text_left_image = document.getElementById("text_left"),
    text_left_visible_image = document.getElementById("text_left_visible"),
    text_right_image = document.getElementById("text_right"),
    text_right_visible_image = document.getElementById("text_right_visible"),
    burger = document.getElementById("close"),
    inst = document.getElementById("inst"),
    global_width = window.innerWidth * 2,
    global_height = window.innerHeight * 2;

  canvasInteractive.width = canvasReference.width = global_width;
  canvasInteractive.height = canvasReference.height = global_height;
  canvasInteractive.style.width = canvasReference.style.width =
    global_width / 2;
  canvasInteractive.style.height = canvasReference.style.height =
    global_height / 2;

  /* --------------------------
   * LOGO VARIABLES
   * -------------------------- */

  var logoDimensions = { x: 1800, y: 1290 };
  var global_center = { x: global_width / 2, y: global_height / 2 };
  var logoLocation = {
    x: global_center.x - logoDimensions.x / 2,
    y: global_center.y - logoDimensions.y / 2,
  };

  var particleArr = [];
  var particleAttributes = { spacing: 15, radius: 7 };
  var colorPalette = [
    "rgba(255, 255, 255, 1)",
    "rgba(240, 240, 240, 1)",
    "rgba(220, 220, 220, 1)",
    "rgba(200, 200, 200, 1)",
  ];

  /* --------------------------
   * PARTICLE CLASS
   * -------------------------- */

  function Particle(x, y) {
    this.originX = x;
    this.originY = y;
    this.x = randomNumber(-200, global_width + 200);
    this.y = randomNumber(-200, global_height + 200);
    this.radius = particleAttributes.radius * randomNumber(0.7, 1);
    this.color = colorPalette[Math.floor(randomNumber(0, colorPalette.length))];
    this.shapeOffsets = Array.from(
      { length: 8 },
      () => this.radius * (0.8 + Math.random() * 0.4)
    );
  }

  /* --------------------------
   * INIT
   * -------------------------- */

  function init() {
    const imgLeftAspect = text_left_image.width / text_left_image.height;
    const canvasAspect = global_width / global_height;
    const imgMaxWidth = global_width * 0.4;

    let textWidth, textHeight;

    if (window.innerWidth > 1500) {
      textWidth = 1600;
      textHeight = 1600 / imgLeftAspect;
    } else if (window.innerWidth > 576) {
      if (canvasAspect > imgLeftAspect) {
        // textHeight = global_height + imgMaxWidth;
        // textWidth = (global_height + imgMaxWidth) * imgLeftAspect;
        textWidth = 1500;
        textHeight = 1500 / imgLeftAspect;
      } else {
        textWidth = global_width - imgMaxWidth;
        textHeight = (global_width - imgMaxWidth) / imgLeftAspect;
      }
    } else if (window.innerWidth > 470) {
      textWidth = 900;
      textHeight = 900 / imgLeftAspect;
    } else {
      textWidth = 600;
      textHeight = 600 / imgLeftAspect;
    }

    const rightX = global_width - textWidth - 30;
    const rightY = global_height - textHeight - 30;
    if (window.innerWidth > 1200) {
      contextReference.drawImage(
        text_left_image,
        30,
        30,
        textWidth,
        textHeight
      );
      contextReference.drawImage(
        text_right_image,
        rightX,
        rightY,
        textWidth,
        textHeight
      );
      contextReference.drawImage(burger, global_width - 190, 30, 150, 125);
      contextReference.drawImage(inst, 250, global_height - 200, 150, 150);
      particleAttributes = { spacing: 15, radius: 7 };
    } else if (window.innerWidth > 992) {
      contextReference.drawImage(
        text_left_image,
        30,
        30,
        textWidth,
        textHeight
      );
      contextReference.drawImage(
        text_right_image,
        rightX,
        rightY,
        textWidth,
        textHeight
      );
      contextReference.drawImage(burger, global_width - 190, 30, 150, 125);
      contextReference.drawImage(inst, 250, global_height - 200, 150, 150);
      particleAttributes = { spacing: 15, radius: 7 };
    } else if (window.innerWidth > 576) {
      contextReference.drawImage(
        text_left_image,
        30,
        30,
        textWidth,
        textHeight
      );
      contextReference.drawImage(
        text_right_image,
        rightX,
        rightY,
        textWidth,
        textHeight
      );
      contextReference.drawImage(burger, global_width - 200, 30, 100, 90);
      contextReference.drawImage(inst, 50, global_height - 200, 150, 150);
      particleAttributes = { spacing: 12, radius: 5 };
      contextReference.drawImage(
        image,
        logoLocation.x + 310,
        logoLocation.y + 100,
        1200,
        940
      );
      contextReference.drawImage(slider, 100, 100, 100, 100);
    } else if (window.innerWidth > 470) {
      contextReference.drawImage(
        text_left_image,
        30,
        30,
        textWidth,
        textHeight
      );
      contextReference.drawImage(
        text_right_image,
        rightX,
        rightY - 120,
        textWidth,
        textHeight
      );
      contextReference.drawImage(burger, global_width - 150, 150, 100, 80);
      contextReference.drawImage(inst, 50, global_height / 2 + 500, 150, 150);
      particleAttributes = { spacing: 10, radius: 4 };
      logoDimensions = { x: 500, y: 500 };
      logoLocation = {
        x: global_center.x - logoDimensions.x / 2,
        y: global_center.y - logoDimensions.y / 2,
      };
      contextReference.drawImage(
        image,
        logoLocation.x,
        logoLocation.y,
        500,
        500
      );
    } else {
      contextReference.drawImage(
        text_left_visible_image,
        10,
        30,
        textWidth,
        textHeight
      );
      contextReference.drawImage(
        text_right_visible_image,
        rightX + 20,
        rightY - 120,
        textWidth,
        textHeight
      );
      contextReference.drawImage(burger, global_width - 150, 150, 100, 80);
      contextReference.drawImage(inst, 50, global_height / 2 + 500, 150, 150);
      particleAttributes = { spacing: 10, radius: 4 };
      logoDimensions = { x: 500, y: 500 };
      logoLocation = {
        x: global_center.x - logoDimensions.x / 2,
        y: global_center.y - logoDimensions.y / 2,
      };
      contextReference.drawImage(
        image,
        logoLocation.x - 100,
        logoLocation.y - 100,
        700,
        600
      );
    }

    TweenLite.ticker.addEventListener("tick", animate);

    const pixels = contextReference.getImageData(
      0,
      0,
      global_width,
      global_height
    ).data;
    for (let y = 0; y < global_height; y += particleAttributes.spacing) {
      for (let x = 0; x < global_width; x += particleAttributes.spacing) {
        const index = (y * global_width + x) * 4;
        if (pixels[index + 3] === 0) {
          const particle = new Particle(x, y);
          particleArr.push(particle);
          TweenLite.to(particle, randomNumber(1, 2), {
            x: particle.originX,
            y: particle.originY,
            ease: "power1.out",
          });
        }
      }
    }
  }

  if (isFirst) {
    setTimeout(() => {
      init();
    }, 3000);
  } else {
    init();
  }

  /* --------------------------
   * RESIZE THE CANVAS
   * -------------------------- */

  function resize() {
    contextInteractive.clearRect(
      0,
      0,
      canvasInteractive.width,
      canvasInteractive.height
    );
    TweenLite.ticker.removeEventListener("tick", animate);
    particleArr = [];

    global_width = window.innerWidth * 2;
    global_height = window.innerHeight * 2;
    global_center = { x: global_width / 2, y: global_height / 2 };
    logoLocation = {
      x: global_center.x - logoDimensions.x / 2,
      y: global_center.y - logoDimensions.y / 2,
    };

    canvasInteractive.width = canvasReference.width = global_width;
    canvasInteractive.height = canvasReference.height = global_height;
    canvasInteractive.style.width = canvasReference.style.width =
      global_width / 2;
    canvasInteractive.style.height = canvasReference.style.height =
      global_height / 2;

    init();
    TweenLite.ticker.addEventListener("tick", animate);
  }

  window.addEventListener("resize", resize, false);

  /* --------------------------
   * RENDER
   * -------------------------- */
  function drawOrganicShape(context, x, y, shapeOffsets) {
    context.beginPath();
    const points = shapeOffsets.length;
    const angleStep = (Math.PI * 2) / points;

    for (let i = 0; i <= points; i++) {
      const angle = i * angleStep;
      const offsetRadius = shapeOffsets[i % points];
      const xPoint = x + Math.cos(angle) * offsetRadius;
      const yPoint = y + Math.sin(angle) * offsetRadius;

      if (i === 0) {
        context.moveTo(xPoint, yPoint);
      } else {
        context.lineTo(xPoint, yPoint);
      }
    }

    context.closePath();
  }

  function render() {
    document.querySelector(".contact-page").classList.add("initial-load");

    contextInteractive.clearRect(0, 0, global_width, global_height);
    for (var i = 0; i < particleArr.length; i++) {
      var p = particleArr[i];

      // Draw each particle as a consistent organic shape using precomputed offsets
      drawOrganicShape(contextInteractive, p.x, p.y, p.shapeOffsets);

      contextInteractive.fillStyle = p.color;
      contextInteractive.fill();
    }
  }

  /* --------------------------
   * ANIMATE
   * -------------------------- */

  function animate() {
    render();
  }

  /* --------------------------
   * INTERACTIONS
   * -------------------------- */

  document.body.addEventListener("mousedown", function () {
    document.querySelector(".contact-page").classList.add("touch-active");
    for (var i = 0; i < particleArr.length; i++) {
      var p = particleArr[i];
      var angle = Math.atan2(p.y - global_center.y, p.x - global_center.x);
      var distance = randomNumber(150, 300);

      var xTarget = p.originX + Math.cos(angle) * distance;
      var yTarget = p.originY + Math.sin(angle) * distance;

      TweenLite.to(p, randomNumber(1, 1.5), { x: xTarget, y: yTarget });
    }
  });

  document.body.addEventListener("mouseup", function () {
    document.querySelector(".contact-page").classList.remove("touch-active");
    for (var i = 0; i < particleArr.length; i++) {
      var p = particleArr[i];
      TweenLite.to(p, randomNumber(1, 2), { x: p.originX, y: p.originY });
    }
  });

  /* --------------------------
   * RANDOM FUNCTIONS
   * -------------------------- */

  function randomWholeNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
  }

  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
}
function drawFooterAnimImage() {
  var parentFooter = document.getElementById("footer"),
    canvasInteractive = document.getElementById("canvas-interactive2"),
    canvasReference = document.getElementById("canvas-reference2"), // Reference Canvas to parse the image data from
    contextInteractive = canvasInteractive.getContext("2d"),
    contextReference = canvasReference.getContext("2d"),
    image = document.getElementById("img2"),
    global_height = parentFooter.clientHeight * 4,
    global_width;

  if (window.innerWidth > 992) {
    global_width = parentFooter.clientWidth * 2;
  } else {
    global_width = parentFooter.clientWidth * 10;
  }
  /**
   * Compensate for High Density Screens
   */

  // Set canvas for twice the intended size
  canvasInteractive.width = canvasReference.width = global_width;
  canvasInteractive.height = canvasReference.height = global_height;

  // Scale the Canvas back to Normal Size
  canvasInteractive.style.width = canvasReference.style.width =
    global_width / 2;
  canvasInteractive.style.height = canvasReference.style.height =
    global_height / 2;

  /* --------------------------
   * LOGO VARIABLES
   * -------------------------- */

  var logoDimensions = {
    x: 800,
    y: 200,
  };

  var global_center = {
    x: global_width / 2,
    y: global_height / 2,
  };

  var logoLocation = {
    x: global_center.x - logoDimensions.x / 2,
    y: global_center.y - logoDimensions.y / 2,
  };

  var particleArr = [];
  var particleAttributes = { spacing: 15, radius: 7 };
  var colorPalette = [
    "rgba(255, 255, 255, 1)",
    "rgba(240, 240, 240, 1)",
    "rgba(220, 220, 220, 1)",
    "rgba(200, 200, 200, 1)",
  ];

  /* --------------------------
   * PARTICLE VARS
   * -------------------------- */

  /**
   * Set up Particle
   */

  function Particle(x, y) {
    this.x = this.originX = x;
    this.y = this.originY = y;
    this.color = colorPalette[Math.floor(randomNumber(0, colorPalette.length))];
  }

  /* --------------------------
   * INIT
   * -------------------------- */

  function init() {
    //Add Greensock Ticker to Update the Canvas
    TweenLite.ticker.addEventListener("tick", animate);

    // Set up the draw particles
    contextReference.drawImage(image, logoLocation.x, logoLocation.y);
    var pixels = contextReference.getImageData(
      0,
      0,
      global_width,
      global_height
    ).data;
    var index;
    for (var y = 0; y < global_height; y += particleAttributes.spacing) {
      for (var x = 0; x < global_width; x += particleAttributes.spacing) {
        index = (y * global_width + x) * 4;
        if (pixels[++index] > 0) {
          particleArr.push(new Particle(x, y));
        }
      }
    }

    // Animate the particles in from around the stage
    for (var i = 0; i < particleArr.length; i++) {
      TweenLite.from(particleArr[i], randomNumber(1, 2), {
        y: randomNumber(-100, canvasInteractive.height + 100),
        x: randomNumber(-100, canvasInteractive.width + 100),
      });
    }
  }
  init();

  /* --------------------------
   * RESIZE THE CANVAS
   * -------------------------- */

  function resize() {
    // Clear the canvas for redraw
    contextInteractive.clearRect(
      0,
      0,
      canvasInteractive.width,
      canvasInteractive.height
    );

    // Destroy the Greensock Ticker
    TweenLite.ticker.removeEventListener("tick", animate);

    // Clear the particle array
    particleArr = [];

    /**
     * Reset Stage and logo vars
     */

    global_height = parentFooter.clientHeight * 4;
    if (window.innerWidth > 992) {
      global_width = parentFooter.clientWidth * 2;
    } else {
      global_width = parentFooter.clientWidth * 4;
    }

    global_center = {
      x: global_width / 2,
      y: global_height / 2,
    };

    logoLocation = {
      x: global_center.x - logoDimensions.x / 2,
      y: global_center.y - logoDimensions.y / 2,
    };

    /**
     * Compensate for High Density Screens
     */

    // Set canvas for twice the intended size
    canvasInteractive.width = canvasReference.width = global_width;
    canvasInteractive.height = canvasReference.height = global_height;

    // Scale the Canvas back to Normal Size
    canvasInteractive.style.width = canvasReference.style.width =
      global_width / 2;
    canvasInteractive.style.height = canvasReference.style.height =
      global_height / 2;

    init();

    // Create a New Ticker
    TweenLite.ticker.addEventListener("tick", animate);
  }

  window.addEventListener("resize", resize, false);

  /* --------------------------
   * RENDER
   * -------------------------- */

  function render() {
    // Draw the particles

    contextInteractive.clearRect(0, 0, global_width, global_height);
    for (var i = 0; i < particleArr.length; i++) {
      var p = particleArr[i];
      contextInteractive.beginPath();
      contextInteractive.arc(
        p.x,
        p.y,
        particleAttributes.radius,
        0,
        2 * Math.PI,
        false
      );
      contextInteractive.fillStyle = p.color;
      contextInteractive.fill();
    }
  }

  /* --------------------------
   * ANIMATE
   * -------------------------- */

  function animate(event) {
    // Particle render
    render();
  }

  /* --------------------------
   * INTERACTIONS
   * -------------------------- */

  /**
   * Mouse Down
   */

  document.body.addEventListener("mousedown", function (event) {
    for (var i = 0; i < particleArr.length; i++) {
      // Animate particles off the stage
      TweenLite.to(particleArr[i], randomNumber(0.1, 1), {
        y: randomExcluded(
          -200,
          canvasInteractive.height + 200,
          -10,
          canvasInteractive.height + 10
        ),
        x: randomNumber(-100, canvasInteractive.width + 100),
      });
    }
  });

  /**
   * Mouse Up
   */
  document.body.addEventListener("mouseup", function (event) {
    for (var i = 0; i < particleArr.length; i++) {
      // Put the particles back at their origin
      TweenLite.to(particleArr[i], randomNumber(1, 3), {
        y: particleArr[i].originY,
        x: particleArr[i].originX,
      });
    }
  });

  /**
   * Touch Start
   */

  document.body.addEventListener("touchstart", function (event) {
    for (var i = 0; i < particleArr.length; i++) {
      // Animate particles off the stage
      TweenLite.to(particleArr[i], randomNumber(0.1, 1), {
        y: randomExcluded(
          -200,
          canvasInteractive.height + 200,
          -10,
          canvasInteractive.height + 10
        ),
        x: randomNumber(-100, canvasInteractive.width + 100),
      });
    }
  });

  /**
   * Touch End
   */
  document.body.addEventListener("touchend", function (event) {
    for (var i = 0; i < particleArr.length; i++) {
      // Put the particles back at their origin
      TweenLite.to(particleArr[i], randomNumber(1, 3), {
        y: particleArr[i].originY,
        x: particleArr[i].originX,
      });
    }
  });

  /* --------------------------
     * REUSABLE FUNCTIONS FOR SELECTING
       A RANDOM NUMBER WITH A MIN & MAX
     * -------------------------- */

  // Random Number Without Rounding
  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Random Number with a Range Exclusion
  function randomExcluded(min, max, minExcluded, maxExcluded) {
    var n = minExcluded;
    while (n >= minExcluded && n <= maxExcluded)
      n = Math.floor(Math.random() * (1 + max - min) + min);
    return n;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  /* --------------------------
   * LOADER
   * -------------------------- */
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 3000);

  /* -------------------
   * DRAW
   */
  drawHeroAnimImage();

  const intersectionObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const intersectionCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        drawFooterAnimImage();
      }
    });
  };

  const observer = new IntersectionObserver(
    intersectionCallback,
    intersectionObserverOptions
  );
  const footerAboutText = document.getElementById("canvas-interactive2");
  observer.observe(footerAboutText);

  /* --------------------------
   * MENU
   * -------------------------- */
  const burgerMenuBtn = document.getElementById("menu");
  const menuItemsContainer = document.getElementById("menu_container");
  let opened = false;
  let enabled = true;

  const portfolioLink = document.getElementById("portfolioLink");
  const portfolioSlider = document.querySelector(".portfolio-slider");
  const contactLink = document.getElementById("contactLink");
  const contactPage = document.querySelector(".contact-page");

  if (burgerMenuBtn && enabled) {
    if (portfolioLink && portfolioSlider) {
      portfolioLink.onclick = (e) => {
        drawHeroAnimImageOpened(false);
        e.preventDefault();
        portfolioSlider.classList.add("visible");
        drawWebsiteAnimImage();
      };
    }
    if (contactLink && contactPage) {
      contactLink.onclick = (e) => {
        drawHeroAnimImageOpened(false);
        e.preventDefault();
        contactPage.classList.add("visible");

        drawContactAnimImage();
      };
    }

    burgerMenuBtn.onclick = () => {
      opened = !opened;
      menuItemsContainer.classList.toggle("open");

      if (opened) {
        drawHeroAnimImageOpened();
      } else {
        if (portfolioLink && portfolioSlider) {
          portfolioSlider.classList.remove("visible");
        }
        if (contactLink && contactPage) {
          contactPage.classList.remove("visible");
        }
        drawHeroAnimImage(false);
      }

      enabled = false;
      setTimeout(() => {
        enabled = true;
      }, 3000);
    };
  }

  /* --------------------------
   * FOOTER
   * -------------------------- */

  var background = {};
  background.initialize = function () {
    var $this = this;

    //option
    $this.id = "background_css3";
    $this.style = {
      bubbles_color: "#fff",
      stroke_width: 0,
      stroke_color: "black",
    };
    $this.bubbles_number = 30;
    $this.speed = [1500, 8000]; //milliseconds
    $this.max_bubbles_height = $this.height;
    $this.shape = false; // 1 : circle | 2 : triangle | 3 : rect | false :random

    if ($("#" + $this.id).lenght > 0) {
      $("#" + $this.id).remove();
    }
    $this.object = $(
      "<div style='z-index:-1;margin:0;padding:0; overflow:hidden;position:absolute; bottom: 0' id='" +
        $this.id +
        "'></div>'"
    ).appendTo("footer#footer");

    $this.ww = $(window).width();
    $this.wh = 340;
    $this.width = $this.object.width($this.ww);
    $this.height = $this.object.height($this.wh);

    $("body").prepend(
      "<style>.shape_background {transform-origin:center; width:80px; height:80px; background: " +
        $this.style.bubbles_color +
        "; position: absolute}</style>"
    );

    for (i = 0; i < $this.bubbles_number; i++) {
      $this.generate_bubbles();
    }
  };
  background.generate_bubbles = function () {
    var $this = this;
    var base = $("<div class='shape_background'></div>");
    var shape_type = $this.shape ? $this.shape : Math.floor($this.rn(3, 4));
    if (shape_type == 1) {
      var bolla = base.css({
        "clip-path":
          "polygon(50% 5%, 75% 20%, 95% 35%, 85% 65%, 78% 90%, 50% 80%, 22% 90%, 15% 65%, 5% 35%, 25% 20%)",
      });
    } else if (shape_type == 2) {
      var bolla = base.css({
        "clip-path":
          "polygon(50% 0%, 75% 15%, 100% 38%, 85% 65%, 82% 100%, 50% 85%, 18% 100%, 0% 65%, 15% 38%, 25% 15%)",
      });
    } else if (shape_type === 3) {
      var bolla = base.css({
        "clip-path":
          "polygon(20% 15%, 40% 10%, 70% 20%, 90% 50%, 70% 80%, 50% 90%, 30% 80%, 10% 50%)",
        background: $this.style.bubbles_color,
      });
    } else if (shape_type === 4) {
      var bolla = base.css({
        "clip-path":
          "polygon(50% 2%, 70% 20%, 90% 40%, 85% 70%, 60% 90%, 35% 80%, 20% 60%, 15% 35%)",
        background: $this.style.bubbles_color,
      });
    } else {
      var bolla = base;
    }
    var rn_size = $this.rn(0.8, 1.2);
    bolla.css({
      transform:
        "scale(" + rn_size + ") rotate(" + $this.rn(-360, 360) + "deg)",
      top: $this.wh + 100,
      left: $this.rn(-60, $this.ww + 60),
    });
    bolla.appendTo($this.object);
    bolla.transit(
      {
        top: $this.rn($this.wh / 2, $this.wh / 2 - 60),
        transform:
          "scale(" + rn_size + ") rotate(" + $this.rn(-360, 360) + "deg)",
        opacity: 0,
      },
      $this.rn($this.speed[0], $this.speed[1]),
      function () {
        $(this).remove();
        $this.generate_bubbles();
      }
    );
  };
  background.rn = function (from, to, arr) {
    if (arr) {
      return Math.random() * (to - from + 1) + from;
    } else {
      return Math.floor(Math.random() * (to - from + 1) + from);
    }
  };
  background.initialize();
});
