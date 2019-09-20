// 引入mock
import Mock from 'mockjs'
// 引入data.json文件
import data from './data.json'

Mock.mock('/categoryList',{code:0,data:data})