// 关于  所有电影的  api
import axios from 'axios'
//首页 获取电影 列表
export const getMovies = () => {
  return axios('/api/movie/in_theaters').then((response) => {
    return response.data
  })
}
// 获取电影详情页
export const getMoviesDetail = (id) => {
  return axios(`/api/client/movie/get_detail/${id}`)
    .then((response) => {
      return response.data
    })
}