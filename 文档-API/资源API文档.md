## 根据点赞数量，返回首页的推荐知识资源
| 请求方法 | 请求url                            | 请求参数(参数类型) |
| -------- | ---------------------------------- | ------------------ |
| GET      | http://localhost:3000/source/index |                    |

1. 描述： 返回指定number的知识资源,用于首页推荐
2. 举例： http://localhost:3000/source/index
  - 获取8条记录作为首页推荐

3. 返回示例(根据数据库结构)
  
## 根据分类名称获取，返回知识资源
| 请求方法 | 请求url                                           | 请求参数(参数类型) |
| -------- | ------------------------------------------------- | ------------------ |
| GET      | http://localhost:3000/source/classification/:name | name(Number)       |

1. 描述： 返回指定number的知识资源,用于首页推荐
2. 举例： 
  - http://localhost:3000/source/classification/computer-sciences
  - http://localhost:3000/source/classification/economic
  - http://localhost:3000/source/classification/social-sciences
  - http://localhost:3000/source/classification/history
  - http://localhost:3000/source/classification/art-and-humanities
  - 返回计算机科学相关知识资源
3. 返回示例(根据数据库结构)