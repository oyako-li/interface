// interface Window {
//   api: {
//     get(data?: string): Promise<any>;
//     post(data: string): Promise<any>;
//     webhook(callback: any): any;
//   };
// }
// // declare var window: Window
declare var window: Window & typeof globalThis;
