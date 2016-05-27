//
//  CalendarManager.m
//  haigame7
//
//  Created by 胡浩然 on 16/5/23.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "PaymentManager.h"
#import "RCTBridge.h"
#import "RCTEventDispatcher.h"

@implementation PaymentManager

RCT_EXPORT_MODULE();



@synthesize bridge = _bridge;


NSString *_productID = @"";
NSString *_result = @"";

RCT_EXPORT_METHOD(purchaseEvent:(NSString *)productID callback:(RCTResponseSenderBlock)callback)
{
  _productID = productID;
  [[SKPaymentQueue defaultQueue] addTransactionObserver:self]; 
  NSString *product = productID;
  if([SKPaymentQueue canMakePayments]){
    [self requestProductData:product];
  }else{
    NSLog(@"不允许程序内付费");
  }
}
//请求商品
- (void)requestProductData:(NSString *)type{
  NSLog(@"-------------请求对应的产品信息----------------");
  NSArray *product = [[NSArray alloc] initWithObjects:type, nil, nil];
  
  NSSet *nsset = [NSSet setWithArray:product];
  SKProductsRequest *request = [[SKProductsRequest alloc] initWithProductIdentifiers:nsset];
  request.delegate = self;
  [request start];
  
}


//收到产品返回信息
- (void)productsRequest:(SKProductsRequest *)request didReceiveResponse:(SKProductsResponse *)response{
  
  NSLog(@"--------------收到产品反馈消息---------------------");
  NSArray *product = response.products;
  if([product count] == 0){
    NSLog(@"--------------没有商品------------------");
    return;
  }
  
  NSLog(@"productID:%@", response.invalidProductIdentifiers);
  NSLog(@"产品付费数量:%lu",(unsigned long)[product count]);
  
  SKProduct *p = nil;
  for (SKProduct *pro in product) {
//    NSLog(@"%@", [pro description]);
//    NSLog(@"%@", [pro localizedTitle]);
//    NSLog(@"%@", [pro localizedDescription]);
//    NSLog(@"%@", [pro price]);
//    NSLog(@"%@", [pro productIdentifier]);
    if([pro.productIdentifier isEqualToString:_productID]){
      p = pro;
    }
  }
  
  SKPayment *payment = [SKPayment paymentWithProduct:p];
  
  NSLog(@"发送购买请求");
  [[SKPaymentQueue defaultQueue] addPayment:payment];
}


//请求失败
- (void)request:(SKRequest *)request didFailWithError:(NSError *)error{
  NSLog(@"------------------错误-----------------:%@", error);
}

- (void)requestDidFinish:(SKRequest *)request{
  NSLog(@"------------反馈信息结束-----------------");
}
//监听购买结果
- (void)paymentQueue:(SKPaymentQueue *)queue updatedTransactions:(NSArray *)transaction{
  NSLog(@"%s","这里出发ICI");
  for(SKPaymentTransaction *tran in transaction){
    
    switch (tran.transactionState) {
      case SKPaymentTransactionStatePurchased:
        NSLog(@"交易完成");
        _result = @"交易完成";
        break;
      case SKPaymentTransactionStatePurchasing:
        NSLog(@"商品添加进列表");
//        _result
        break;
      case SKPaymentTransactionStateRestored:
        NSLog(@"已经购买过商品");
        _result = @"已经购买过商品";
        break;
      case SKPaymentTransactionStateFailed:
        NSLog(@"交易失败");
        _result = @"交易失败";
        break;
      default:
        break;
    }
  }
  [self paymentEventReminderReceived];
}

//交易结束
- (void)completeTransaction:(SKPaymentTransaction *)transaction{
  NSLog(@"交易结束");
  
  [[SKPaymentQueue defaultQueue] finishTransaction:transaction];
//  [self paymentEventReminderReceived];
}

- (void)paymentEventReminderReceived
{
  [self.bridge.eventDispatcher sendAppEventWithName:@"PaymentResult"
                                               body:@{@"paymentResult": _result}];
}


@end

