# 资源创建相关
  ## 创建资源
| 请求方法 | 请求url                                 | 请求参数(参数类型) |
| -------- | --------------------------------------- | ------------------ |
| post     | http://localhost:3000/user/:id/resources | 列举               |
1. 参数列举
  - classification
  - author_id
  - title
  - content:
2. 描述： _id为创建资源，并将该资源添加到用户列表中
3. 返回示例(根据数据库结构)

----------------------------------------------------
# 资源更新相关
## 进行资源编辑
| 请求方法 | 请求url                                     | 请求参数(参数类型) |
| -------- | ------------------------------------------- | ------------------ |
| post     | http://localhost:3000/update-resources/:_id | title, content     |

1. 描述： 前端点击编辑页面（只有作者才能看到编辑），跳转到编辑压面，获取资源title和content，发起更新
2. 返回示例(根据数据库结构)


## 增加点赞数
| 请求方法 | 请求url                                     | 请求参数(参数类型) |
| -------- | ------------------------------------------- | ------------------ |
| post     | http://localhost:3000/add-like-count/:id |      |

1. 描述： 点击后，对该文章的点赞数进行增加
2. 返回示例(根据数据库结构)



## 根据资源id返回资源
| 请求方法 | 请求url                              | 请求参数(参数类型) |
| -------- | ------------------------------------ | ------------------ |
| GET      | http://localhost:3000/resources/:_id | _id                |
1. 描述： 返回指定number的知识资源,用于首页推荐
2. 返回示例(根据数据库结构)

## 根据点赞数量，返回首页的推荐知识资源
| 请求方法 | 请求url                                           | 请求参数(参数类型) |
| -------- | ------------------------------------------------- | ------------------ |
| GET      | http://localhost:3000/recommend-resources/:number | number             |
1. 描述： 返回指定number的知识资源,用于首页推荐
2. 返回示例(根据数据库结构)

## 根据分类名称获取，返回知识资源
| 请求方法 | 请求url                                              | 请求参数(参数类型) |
| -------- | ---------------------------------------------------- | ------------------ |
| GET      | http://localhost:3000/resources/classification/:name | name               |

1. 描述： 返回指定number的知识资源,用于首页推荐
2. 举例： 
  
3. 返回示例(根据数据库结构)
  - http://localhost:3000/resource/classification/computer-sciences
  - http://localhost:3000/resource/classification/economic
  - http://localhost:3000/resource/classification/social-sciences
  - http://localhost:3000/resource/classification/history
  - http://localhost:3000/resource/classification/art-and-humanities


# 资源搜索相关
