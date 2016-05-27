//
//  PaymentViewController.h
//  haigame7
//
//  Created by 胡浩然 on 16/5/24.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

#import <StoreKit/StoreKit.h>

@interface PaymentViewController : UIViewController<SKPaymentTransactionObserver,SKProductsRequestDelegate>

@property (strong, nonatomic) IBOutlet UITextField *productID;

@property (strong, nonatomic) IBOutlet UIButton *purchase;

- (IBAction)purchaseFunc:(id)sender;

@end