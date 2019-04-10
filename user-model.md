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


# password 加密
yarn add bcrypt


