//
//  Counter.swift
//  sample_project
//
//  Created by Mohammadkhizer on 04/07/23.
//

import Foundation
import CryptoKit
@objc(Counter)

class Counter :NSObject{
  
  


  func aesSecretKeyKhan() -> String {
      let key = SymmetricKey(size: .bits256)
      let keyData = key.withUnsafeBytes { Data($0) }
      let base64EncodedKey = keyData.base64EncodedString()
      return base64EncodedKey
  }

  func encryptData12(payload: String, aesKey: String) throws -> String? {
      guard let data = payload.data(using: .utf8),
            let keyData = aesKey.data(using: .utf8) else {
          return nil
      }
      
      let key = SymmetricKey(data: keyData)
      let nonce = AES.GCM.Nonce()
      let tagLength = 128
      
      do {
          let sealedBox = try AES.GCM.seal(data, using: key, nonce: nonce)
          let encryptedData = sealedBox.combined
          return encryptedData?.base64EncodedString()
      } catch {
          print("Encryption error: \(error)")
          return nil
      }
  }
  
  @objc func aesSecretKey(
     _ resolve: RCTPromiseResolveBlock,
     reject: RCTPromiseRejectBlock) {
       let key = aesSecretKeyKhan()
       print("Cryptography key : \(key)")
       resolve(key)
     }


   @objc func aesEncrypt(_ payload: String, aesKey: String, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
     print("=====Cryptography aesEncrypt")
     do {
         if let encryptedData = try encryptData12(payload: payload, aesKey: aesKey) {
             print("=====Cryptography aesEncrypt encryptedValue \(encryptedData)")
           resolve(encryptedData)
         } else {
             print("Encryption failed.")
         }
     } catch {
         print("Encryption error: \(error)")
     }
   }

  let payload = """
  {
      "user_id": "clik5ap3900060i5a72ojcrqw"
  }
  """
  let aesKey = "OmbqXw6HGv2xUxWLeDp476IDfC8om8/mv6VLj+uslQE="
  
  
  
  
  
  private var count = 1;
  @objc
  func increment(_ callback:RCTResponseSenderBlock){
    count+=1;
    print("inside swift ====>")
    print(count)
    callback([count])
  }
  
  @objc
  func decrement(_ resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock){
    count-=1;
    if(count==0){
      let error = NSError(domain: "", code: 200,userInfo: nil);
      reject("ERROR_COUNT","COUNT BECAME ZERO",error)
    }
    else {
      resolve("decremented count is \(count)")
    }
  }
  
  @objc
  static func requiresMainQueueSetup ()->Bool{
    return true;
  }
  
  @objc
  func constantsToExport ()->[String:Any]{
    return ["initialValue":0];
  }
  
  @objc
  func greeting(_ name: String ){
    print("Hello \(name), glad to meet you!")
}
  @objc
  func processObject(_ object: [String: Any]) {
      // Access object properties
      if let name = object["name"] as? String {
        print("Name: \(name)")
      }
      
      if let mobileNo = object["mobileNo"] as? String {
        print("Mobile No: \(mobileNo)")
      }
    }
}
