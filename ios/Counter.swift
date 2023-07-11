//
//  Counter.swift
//  sample_project
//
//  Created by Mohammadkhizer on 04/07/23.
//

import Foundation
@objc(Counter)

class Counter :NSObject{
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
