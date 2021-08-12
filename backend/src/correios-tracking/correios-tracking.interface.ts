export interface Base {
  code: string;
}

export interface Response extends Base {
  id: number;
}

export interface CorreiosResponse extends Base {
  data: string;
  hora: string;
  local: string;
  status: string;
  substatus: Array<string>;
}
