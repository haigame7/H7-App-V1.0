//
//  Bridge.m
//  haigame7
//
//  Created by 胡浩然 on 16/5/23.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(ManagerBridger, NSObject)

RCT_EXTERN_METHOD(addEvent:(NSString *)name callback:(RCTResponseSenderBlock)callback)

@end



