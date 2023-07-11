//
//  Counter.m
//  sample_project
//
//  Created by Mohammadkhizer on 04/07/23.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(Counter, NSObject)

RCT_EXTERN_METHOD(increment:(RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(decrement:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(greeting:(NSString*)name)
RCT_EXTERN_METHOD(processObject:(NSDictionary *)object)

@end

