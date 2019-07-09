registerPaint('ripple', class {
    static get inputProperties() {
      return [
        'background-color',
        '--ripple-color',
        '--animation-tick',
        '--ripple-x',
        '--ripple-y'
      ];
    }

    paint(ctx, geom, properties) {
      const bgColor = properties.get('background-color');
      const rippleColor = properties.get('--ripple-color');
      const x = properties.get('--ripple-x');
      const y = properties.get('--ripple-y');
      let tick = properties.get('--animation-tick');

      if (tick < 0) {
        tick = 0;
      } else if (tick > 1000) {
        tick = 1000;
      }

      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, geom.width, geom.height);
      ctx.fillRect(0, 0, geom.width, geom.height);

      ctx.fillStyle = rippleColor;
      ctx.globalAlpha = 1 - tick/1000;
      ctx.arc(
        x, y,
        geom.width * tick/1000,
        0,
        2 * Math.PI
      );
      ctx.fill();
    }
});