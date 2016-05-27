//
//  MainViewController.m
//  haigame7
//
//  Created by 胡浩然 on 16/5/24.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "MainViewController.h"

@interface MainViewController ()

@end

@implementation MainViewController

- (void)viewDidLoad {
  [super viewDidLoad];
  // Do any additional setup after loading the view, typically from a nib.
  
  self.view.backgroundColor = [UIColor whiteColor];
  [self initViews];
//  [self performSelector:@selector(initViews) withObject:nil afterDelay:2.0f];
}

- (void)didReceiveMemoryWarning {
  [super didReceiveMemoryWarning];
  // Dispose of any resources that can be recreated.
}
-(void)butClick{
  
//  UIViewController *viewController = [[UIViewController alloc]init];
//  viewController.view.backgroundColor = [UIColor whiteColor];
//  [self.navigationController pushViewController:viewController animated:YES];
  
  UIAlertView *alert = [[UIAlertView alloc] initWithTitle:@"提示"
                                                  message:@"单击了动态按钮！"
                                                 delegate:self
                                        cancelButtonTitle:@"确定"
                                        otherButtonTitles:nil];
  [alert show];
  
  //api啊
//  [self dismissViewControllerAnimated:YES
//   
//                           completion:^(void){
//                             
//                             // Code
//                             
//                           }];

}

-(void)butClicksssssss{
  
//    UIViewController *viewController = [[UIViewController alloc]init];
//    viewController.view.backgroundColor = [UIColor whiteColor];
//    [self.navigationController pushViewController:viewController animated:YES];
  
  
//  api啊
    [self dismissViewControllerAnimated:YES
  
                             completion:^(void){
  
                               // Code
  
                             }];
  
}

- (void)initViews{
  UIButton* button = [UIButton buttonWithType:UIButtonTypeRoundedRect];
  button.frame = CGRectMake(100,100,100,100);
  [button setTitle:@"新添加的动态按钮" forState: UIControlStateNormal];
  [button setTitleColor:[UIColor yellowColor]forState:UIControlStateNormal];
  button.backgroundColor = [UIColor redColor];
  
  [button addTarget:self action:@selector(butClick) forControlEvents:UIControlEventTouchUpInside];
  
  UIButton* button1 = [UIButton buttonWithType:UIButtonTypeRoundedRect];
  button1.frame = CGRectMake(100,210,100,50);
  [button1 setTitle:@"退出" forState: UIControlStateNormal];
  [button1 setTitleColor:[UIColor yellowColor]forState:UIControlStateNormal];
  button1.backgroundColor = [UIColor grayColor];
  
  [button1 addTarget:self action:@selector(butClicksssssss) forControlEvents:UIControlEventTouchUpInside];
  [self.view addSubview:button];
  [self.view addSubview:button1];
}


@end
