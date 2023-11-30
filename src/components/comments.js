import { Component, createRef } from 'react'
import moment from 'moment'
// 导入图片资源
import avatar from '../images/active.png'
// 导入 lodash 包
import orderBy from 'lodash/orderBy'

const state = {
  // hot: 热度排序  time: 时间排序
  tabs: [
    {
      id: 1,
      name: '热度',
      type: 'hot'
    },
    {
      id: 2,
      name: '时间',
      type: 'time'
    }
  ],
  active: 'hot',
  list: [
    {
      id: 1,
      author: '刘德华',
      comment: '给我一杯忘情水',
      time: new Date('2021-10-10 09:09:00'),
      // 1: 点赞 0：无态度 -1:踩
      attitude: 1
    },
    {
      id: 2,
      author: '周杰伦',
      comment: '哎哟，不错哦',
      time: new Date('2021-10-11 09:09:00'),
      // 1: 点赞 0：无态度 -1:踩
      attitude: 0
    },
    {
      id: 3,
      author: '五月天',
      comment: '不打扰，是我的温柔',
      time: new Date('2021-10-11 10:09:00'),
      // 1: 点赞 0：无态度 -1:踩
      attitude: -1
    }
  ],
  // textarea 的 value 值
  txt: ''
}

// 1 创建一个 类组件 来渲染内容
// 2 为 类组件 提供状态数据
// 3 能够使用 tabs 数据来渲染：按热度排序和按时间排序 标签
// 4 使用 list 数据渲染评论列表内容
// 5 根据数据渲染 点赞、踩 样式效果
class Comments extends Component {
  state = state
  RefTxt = createRef()
  // 格式化时间
  fomartTime(time) {
    return moment(time).format('YYYY-MM-DD HH:mm:ss')
  }
  //   控制文本域的值
  changeTxt = (e) => {
    this.setState({
      txt: e.target.value
    })
  }
  // 添加评论
  addComments = () => {
    // 没有信息就获取焦点
    if (this.state.txt.trim() === '') return this.RefTxt.current.focus()
    this.setState({
      list: [
        {
          id: new Date().getTime(),
          author: '蔡徐坤',
          comment: this.state.txt,
          time: new Date(),
          attitude: 0
        },
        ...this.state.list
      ],
      txt: ''
    })
  }
  // 删除评论
  handleDel = (id) => {
    this.setState({
      list: this.state.list.filter((item) => item.id !== id)
    })
  }
  // 点赞
  changeAttitude = (id, attitude) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          return { ...item, attitude }
        }
        return item
      })
    })
  }
  // 切换
  handleTab = (type) => {
    const { list } = this.state
    var newList
    if (type === 'hot') {
      newList = orderBy(list, ['id'], ['asc'])
    } else {
      newList = orderBy(list, ['time'], ['desc'])
    }
    this.setState({ active: type, list: newList })
  }
  render() {
    const { tabs, active, list, txt } = this.state
    return (
      <div className="App">
        <div className="comment-container">
          {/* 评论数 */}
          <div className="comment-head">
            <span>5 评论</span>
          </div>
          {/* 排序 */}
          <div className="tabs-order">
            <ul className="sort-container">
              {tabs.map((item) => (
                <li key={item.id} className={item.type === active ? 'on' : ''} onClick={() => this.handleTab(item.type)}>
                  按{item.name}排序
                </li>
              ))}
            </ul>
          </div>

          {/* 添加评论 */}
          <div className="comment-send">
            <div className="user-face">
              <img className="user-head" src={avatar} alt="" />
            </div>
            <div className="textarea-container">
              <textarea ref={this.RefTxt} onChange={this.changeTxt} value={txt} cols="80" rows="5" placeholder="发条友善的评论" className="ipt-txt" />
              <button className="comment-submit" onClick={this.addComments}>
                发表评论
              </button>
            </div>
            <div className="comment-emoji">
              <i className="face"></i>
              <span className="text">表情</span>
            </div>
          </div>

          {/* 评论列表 */}
          <div className="comment-list">
            {list.map((item) => (
              <div className="list-item" key={item.id}>
                <div className="user-face">
                  <img className="user-head" src={avatar} alt="" />
                </div>
                <div className="comment">
                  <div className="user">{item.author}</div>
                  <p className="text">{item.comment}</p>
                  <div className="info">
                    <span className="time">{this.fomartTime(item.time)}</span>
                    <span
                      className={`like ${item.attitude === 1 ? 'liked' : ''}`}
                      onClick={() => {
                        this.changeAttitude(item.id, item.attitude === 1 ? 0 : 1)
                      }}
                    >
                      <i className="icon" />
                    </span>
                    <span
                      className={`hate ${item.attitude === -1 ? 'hated' : ''}`}
                      onClick={() => {
                        this.changeAttitude(item.id, item.attitude === -1 ? 0 : -1)
                      }}
                    >
                      <i className="icon" />
                    </span>
                    <span
                      className="reply btn-hover"
                      onClick={() => {
                        this.handleDel(item.id)
                      }}
                    >
                      删除
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default Comments
