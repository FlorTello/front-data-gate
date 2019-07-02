import { Status, StatusClass } from './status.enum';

export class Request {
  id: string;
  date: Date;
  reason: string;
  status: string;
  statusCode: string;
}

export class RequestModel extends Request {
  private styleStatus: string;
  constructor(data: any) {
    super();
    this.id = data.id;
    this.date = data.date;
    this.reason = data.reason;
    this.status = data.status;
    this.statusCode = data.status_code;
    this.styleStatus = StatusClass[data.status];
  }
}
