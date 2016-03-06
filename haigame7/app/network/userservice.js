'use strict';

import FecthService from './fetchservice'
export default class{
  constructor() {
    super();
  }

  register(data) {
    FecthService.doFecth()
  }

}
