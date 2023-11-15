// import { Chart } from "react-chartjs-2";

// export const CustomTitle = {
//   id: "customTitle",
//   beforeLayout: (chart, args, opts) => {
//     const { display, font } = opts;
//     if (!display) {
//       return;
//     }

//     const { ctx } = chart;
//     ctx.font = font || '12px "Helvetica Neue", Helvetica, Arial, sans-serif';
//     const { width } = ctx.measureText(opts.text);

//     chart.options.layout.padding.left = width * 1;
//   },
//   afterDraw: (chart, args, opts) => {
//     const { font, text, color } = opts;
//     const {
//       ctx,
//       // chartArea: { left, right },
//       canvas: { offsetLeft, offsetTop },
//     } = chart;
//     if (opts.display) {
//       ctx.fillStyle = color || Chart.defaults.color;
//       ctx.font = font || '12px "Helvetica Neue", Helvetica, Arial, sans-serif';
//       console.log(ctx);
//       ctx.fillText(text, offsetLeft * 1.4, offsetTop / 0.5);
//     }
//   },
// };
