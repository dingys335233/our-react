/**
 * web-vitals：前端性能检测工具，是Google的一项重大举措，旨在为质量信号提供统一的指导
 * web vitals旨在简化流程，并帮助网站开发者聚焦在核心性能指标上，也称为Core Web Vitals
 * CLS（Cumulative Layout Shift）：衡量视觉稳定性，CLS应该小于0.1。
 * FID（First Input Delay）：衡量可交互性，FID的值应该在100ms以内。
 * LPC（Largest Contentful Paint）：衡量加载性能，LCP应该在2.5s以内。
 */
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
