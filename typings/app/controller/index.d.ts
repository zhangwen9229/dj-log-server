// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportApiAuth from '../../../app/controller/api/auth';
import ExportApiLog from '../../../app/controller/api/log';
import ExportBusinessMtaIndex from '../../../app/controller/business/Mta/index';
import ExportBusinessMtaModelBaseModel from '../../../app/controller/business/Mta/model/BaseModel';
import ExportBusinessMtaModelEpModel from '../../../app/controller/business/Mta/model/EpModel';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    api: {
      auth: ExportApiAuth;
      log: ExportApiLog;
    }
    business: {
      mta: {
        index: ExportBusinessMtaIndex;
        model: {
          baseModel: ExportBusinessMtaModelBaseModel;
          epModel: ExportBusinessMtaModelEpModel;
        }
      }
    }
  }
}
