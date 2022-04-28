import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import * as DataModel from '@measurements/api-interfaces';
import * as Data from './db.json';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  data = Data.data as DataModel.DataItem[];

  @Get('list')
  getData(): DataModel.DataItem[] {
    return this.data;
  }

  @Get('detail/:id')
  getDetail(@Param('id') id: string): DataModel.DataItem {
    return this.data.find((item) => {
      console.log(item, id);
      return item.id === id;
    });
  }

  @Post('save')
  postDetail(@Body() item: DataModel.DataItem): boolean {
    const exists = this.data.findIndex((i) => {
      return i.id == item.id;
    });

    if (exists) {
      this.data[exists] = item;
    } else {
      this.data.push(item);
    }

    return true;
  }
}
