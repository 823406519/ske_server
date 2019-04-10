# 版本
emailer 1.0.0

# 依赖
依赖于包nodeemailer, 在此基础上的进一步封装

# 功能
1. 暂时仅有一个发送邮件功能
2. 暂时仅有一个html邮件模板

author: 刘耀惠
date: 2019.04.09

# 文件结构
- index.js emailer对象
- sendEmail 发送邮件功能模块
  - index.js 发送邮件入口
  - transporter.js  生成transporter对象
    - 依赖于nodemailer
  - createHtmlTpl.js
    - 生成html模板字符串
  - ejs  存放html ejs模板
    - htmlTpl.ejs 暂时只有一个模板