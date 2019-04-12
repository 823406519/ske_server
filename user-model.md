# User model
1. username
  - type {String}
  - required
  - unique

2. email
  - type {String}
  - required
  - unique

3. password
  - type {String}
  - required
  - unique

4. avatar
  - type {String}

5. date
  - type {Date}
  - default {Date.now}

6. about_me
  - type {String}

7. gender
  - type {Number}
  - default: 0
    - 0 man
    - 1 woman
8. age
  - type {Number}

9. birthday
  - year
    - type {String}
  - month
    - type {String}
  - day
    - type {String}

10. location
  - type {String}

11. mtto(格言)
  - type {String}

12. contribution(贡献)
  - type {Number}
  - dafault 0

13. konwledgeWanted(想要关注的知识)
  - type {String array}
  - default

14. privacy(信息是否公开)
  - type {number}
  - default 0  -----公开

15. post_source(发表的资源，存储资源id)
  - type {string array} 

16. collect_source(收藏的资源，存储资源id)

17. status(状态)
  - 0 (未激活)
  - 1 （激活）

18. reset_password_token
  - 重置密码的token

19. reset_password_expires
  - 重置密码token的过期时间

# 登陆与注册
## 全球公认头像的使用
yarn add gravatar

## password 加密和比对
yarn add bcrypt
  - 利用bcrypt生成工具函数encryter
  - 利用bcrypt进行密码比对

## JWT
1. 创建自定义的401 Unauthorized 的错误处理
  - 放在/middlewares/JWTErrorHandler
2. 生成token，封装工具函数tokener
yarn add jsonwebtoken
  - 用于生成或者验证token
yarn add koa-jwt
  - 用于检验token是否存在
自定义一个koa-jwt错误解决方法，token不存在，返回错误信息给客户端

## validator工具函数的生成
- 主要用于表单的验证
  - 如注册登录的验证
  - 前端与后端的双重验证，保证数据的完整性

- 安装依赖
  - yarn add validator

## 邮箱验证
- 封装工具函数mailer

# 修改密码与找回密码
- 找回密码中工具函数mailer增加sendPswEmail方法
- 