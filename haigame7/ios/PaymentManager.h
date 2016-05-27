//
//  CalendarManager.h
//  haigame7
//
//  Created by 胡浩然 on 16/5/23.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "RCTBridgeModule.h"
#import <Foundation/Foundation.h>
#import <StoreKit/StoreKit.h> 

@interface PaymentManager : NSObject <RCTBridgeModule,SKPaymentTransactionObserver,SKProductsRequestDelegate>
//+ (instancetype) shareInstance;-(void) calendarEventReminderReceived;

@end
