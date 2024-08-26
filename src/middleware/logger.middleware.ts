import { Request } from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function loggerRed(str) {
  console.log(`%c${str}`, 'color: red');
}

export function logger(req: Request, resp: Response, next) {
  console.log(`Request...`);
  console.log(req.url);
  //   console.log(`Response...`);
  //   console.log(resp);

  //   red(req.url); // 实验性值的颜色打印，目前无效
  next();
}
