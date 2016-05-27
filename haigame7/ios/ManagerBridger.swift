//
//  ManagerBridger.swift
//  haigame7
//
//  Created by 胡浩然 on 16/5/23.
//  Copyright © 2016年 Facebook. All rights reserved.
//

import Foundation
@objc(ManagerBridger)

class ManagerBridger: NSObject {
  @objc func addEvent(name: String, callback: RCTResponseSenderBlock) -> Void {
    
    let rootVC: UITabBarController = UIApplication.sharedApplication().keyWindow!.rootViewController!
      as! UITabBarController
    let navVC: UINavigationController = rootVC.selectedViewController as! UINavigationController
    let detailVC = LikeDetaiViewController()
    detailVC.title = name;
    callback([])
    
    dispatch_async(dispatch_get_main_queue()) { 
      () -> Void in
      detailVC.hidesBottomBarWhenPushed = true
      navVC.pushViewController(detailVC, animated: true)
    }
  }
}