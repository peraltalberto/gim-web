import { Injectable } from '@angular/core';
import {UtilService} from './'

@Injectable()
export class StorageService {

  public static TOKEN: string = "gim-web-st";
  public static USUARIO: string = "gim-web-ga";
  public static RECORDAR_LOGIN: string = "gim-web-recuerda";


  constructor() { }

  setSession(key, value) {
    sessionStorage.setItem(key, value);
  }
  setBrowser(key, value) {
     localStorage.setItem(key, value);
  }
  removeSession(key) {
    sessionStorage.removeItem(key);
  }
  removeBrowser(key) {
    localStorage.removeItem(key);
  }
  getSession(key) {
    sessionStorage.getItem(key);
  }
  getBrowser(key) {
    return localStorage.getItem(key);
  }


  getToken() : string{
    return UtilService.decode64(this.getBrowser(StorageService.TOKEN));
  }
   setToken(value){
     this.setBrowser(StorageService.TOKEN,UtilService.encode64(value));
  }

 getUser() : string{
    return UtilService.decode64(this.getBrowser(StorageService.USUARIO));
  }
  setUser(value){
     this.setBrowser(StorageService.USUARIO,UtilService.encode64(value));
  }
}
